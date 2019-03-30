// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

function displayRace() {
	console.log("hello");
	var div = document.createElement('div');

  div.id = 'fig_el6321399603051460088527058598';

  document.getElementById('content').appendChild(div);

	if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
	// already loaded: just create the figure
	!function(mpld3){

	mpld3.draw_figure("fig_el6321399603051460088527058598", {"width": 576.0, "height": 396.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.49, 1.49], "ylim": [0.0, 0.7106060606060607], "xdomain": [-0.49, 1.49], "ydomain": [0.0, 0.7106060606060607], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 2, "tickvalues": [0, 1], "tickformat": ["negative rate", "positive rate"], "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#EAEAF2", "axesbgalpha": null, "zoomable": true, "id": "el632139960307378944", "lines": [], "paths": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260941472", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260940856", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}], "markers": [], "texts": [{"text": "Demographic Parity for Race", "position": [0.5, 1.0200682319887617], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#262626", "alpha": 1, "zorder": 3, "id": "el632139960261036912"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[-0.4, 0.0], [0.4, 0.0], [0.4, 0.0], [-0.4, 0.0]], "data02": [[0.6, 0.0], [1.4, 0.0], [1.4, 0.6767676767676768], [0.6, 0.6767676767676768]]}, "id": "el632139960305146008", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
	}(mpld3);
	}else if(typeof define === "function" && define.amd){
	// require.js is available: use it to load d3/mpld3
	require.config({paths: {d3: "https://mpld3.github.io/js/d3.v3.min"}});
	require(["d3"], function(d3){
	window.d3 = d3;
	mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function(){

	mpld3.draw_figure("fig_el6321399603051460088527058598", {"width": 576.0, "height": 396.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.49, 1.49], "ylim": [0.0, 0.7106060606060607], "xdomain": [-0.49, 1.49], "ydomain": [0.0, 0.7106060606060607], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 2, "tickvalues": [0, 1], "tickformat": ["negative rate", "positive rate"], "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#EAEAF2", "axesbgalpha": null, "zoomable": true, "id": "el632139960307378944", "lines": [], "paths": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260941472", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260940856", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}], "markers": [], "texts": [{"text": "Demographic Parity for Race", "position": [0.5, 1.0200682319887617], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#262626", "alpha": 1, "zorder": 3, "id": "el632139960261036912"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[-0.4, 0.0], [0.4, 0.0], [0.4, 0.0], [-0.4, 0.0]], "data02": [[0.6, 0.0], [1.4, 0.0], [1.4, 0.6767676767676768], [0.6, 0.6767676767676768]]}, "id": "el632139960305146008", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
	});
	});
	}else{
	// require.js not available: dynamically load d3 & mpld3
	mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
	mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function(){

				 mpld3.draw_figure("fig_el6321399603051460088527058598", {"width": 576.0, "height": 396.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.49, 1.49], "ylim": [0.0, 0.7106060606060607], "xdomain": [-0.49, 1.49], "ydomain": [0.0, 0.7106060606060607], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 2, "tickvalues": [0, 1], "tickformat": ["negative rate", "positive rate"], "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#FFFFFF", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#EAEAF2", "axesbgalpha": null, "zoomable": true, "id": "el632139960307378944", "lines": [], "paths": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260941472", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el632139960260940856", "dasharray": "none", "alpha": 0.5, "facecolor": "#4C72B0", "edgecolor": "none", "edgewidth": 0.3, "zorder": 1}], "markers": [], "texts": [{"text": "Demographic Parity for Race", "position": [0.5, 1.0200682319887617], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#262626", "alpha": 1, "zorder": 3, "id": "el632139960261036912"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[-0.4, 0.0], [0.4, 0.0], [0.4, 0.0], [-0.4, 0.0]], "data02": [[0.6, 0.0], [1.4, 0.0], [1.4, 0.6767676767676768], [0.6, 0.6767676767676768]]}, "id": "el632139960305146008", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
		})
	});
	}
}

function mpld3_load_lib(url, callback){
	var s = document.createElement('script');
	s.src = url;
	s.async = true;
	s.onreadystatechange = s.onload = callback;
	s.onerror = function(){console.warn("failed to load library " + url);};
	document.getElementsByTagName("head")[0].appendChild(s);
}
