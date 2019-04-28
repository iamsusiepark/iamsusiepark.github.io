
const HOSTED_URLS = {
  model:
      'model_js/model.json'
};


function status(statusText) {
  console.log(statusText);
  document.getElementById('status').textContent = statusText;
}


function settextField(text, predict) {
  const textField = document.getElementById('text-entry');
  textField.value = text;
  doPredict(predict);
}


function setPredictFunction(predict) {
  const textField = document.getElementById('text-entry');
  textField.addEventListener('input', () => doPredict(predict));
}


function disableLoadModelButtons() {
  document.getElementById('load-model').style.display = 'none';
}


function getTextColor(red, green, blue) {
    var brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    if(brightness < 125) { //background is dark
        return 'white';
    } else {
        return 'black';
    }
}

function doPredict(predict) {
  var textField = document.getElementById('text-entry');
  var btn = document.getElementById("btn");
  var view = document.getElementById("view");
  var msg = document.getElementById("message");
  const result = predict(textField.value);
  score_string = "Class scores: ";
  for (var x in result.score) {
    score_string += x + " ->  " + result.score[x].toFixed(3) + ", "
  }
  console.log(score_string);
  const red = result.score[0]
  const green = result.score[1]
  const blue = result.score[2]
  var displayColor = function() {
        var result = parseInput(txt.value);
        if(result) {
            msg.style.display = "none";
            view.innerHTML =
                '<div class="' + getTextColor(red, green, blue) + '">' +
                    '<div class="inner">' +
                        '<span>' + 'RGB(' + red + ', ' + green + ', ' + blue + ')' + '</span>' +
                    '</div>' +
                '</div>' + view.innerHTML;
            view.firstChild.style.backgroundColor = 'RGB(' + red + ', ' + green + ', ' + blue + ')';
            txt.value = "";

        } else {
            msg.style.display = "block";
        }
    };
  btn.onclick = displayColor;
  status(
      score_string + ' elapsed: ' + result.elapsed.toFixed(3) + ' ms)');
}

function prepUI(predict) {
  setPredictFunction(predict);
  settextField('tensorflow orange', predict);
}


async function urlExists(url) {
  status('Testing url ' + url);
  try {
    const response = await fetch(url, {method: 'HEAD'});
    return response.ok;
  } catch (err) {
    return false;
  }
}

async function loadHostedPretrainedModel(url) {
  status('Loading pretrained model from ' + url);
  try {
    const model = await tf.loadLayersModel(url);
    status('Done loading pretrained model.');
    disableLoadModelButtons();
    return model;
  } catch (err) {
    console.error(err);
    status('Loading pretrained model failed.');
  }
}


class Classifier {

  async init(urls) {
    this.urls = urls;
    this.model = await loadHostedPretrainedModel(urls.model);
    return this;
  }

  predict(text) {
    // Convert to lower case and remove all punctuations.
    const inputText =
        text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    // Look up word indices.
    console.log(inputText);

    status('Running inference');
    const beginMs = performance.now();
    const predictOut = this.model.predict(inputText);
    //console.log(predictOut.dataSync());
    const score = predictOut.dataSync();//[0];
    predictOut.dispose();
    const endMs = performance.now();

    return {score: score, elapsed: (endMs - beginMs)};
  }
};

async function setup() {
  if (await urlExists(HOSTED_URLS.model)) {
    status('Model available: ' + HOSTED_URLS.model);
    const button = document.getElementById('load-model');
    button.addEventListener('click', async () => {
      const predictor = await new Classifier().init(HOSTED_URLS);
      prepUI(x => predictor.predict(x));
    });
    button.style.display = 'inline-block';
  }

  status('Standing by.');
}

setup();
