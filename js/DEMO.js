(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#CC6699",
	manifest: [
		{src:"img/huaban.png", id:"huaban"}
	]
};



// symbols:



(lib.huaban = function() {
	this.initialize(img.huaban);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,44);


(lib.树叶s2 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.huaban();
	this.instance.setTransform(16.7,249.1,2.479,2.479);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,289.7,360.2);


(lib.树叶飘s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.树叶s2();
	this.instance.setTransform(382,66,0.167,0.167,-120,0,0,145.1,179.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:179.3,scaleX:0.16,scaleY:0.16,rotation:-106.5,guide:{path:[381.9,66,307.9,77.4,233.3,81]},alpha:1},25).to({regX:145,regY:179.1,scaleX:0.14,scaleY:0.14,rotation:-12.7,guide:{path:[233.3,81,226.9,81.3,220.5,81.6,137.8,86,56.6,71.4,39.7,68.4,23.2,64.4]}},26).to({regX:144.6,regY:179.2,scaleX:0.13,scaleY:0.13,rotation:59.4,guide:{path:[23,64.4,-34.1,50.6,-87.4,25.5,-154.9,-6.7,-227.7,5.4]}},24).to({regX:145.2,regY:179.3,scaleX:0.11,scaleY:0.11,rotation:120,guide:{path:[-227.7,5.3,-232.5,6.1,-237.3,7.1,-317.4,23.4,-390.4,59.7,-408.1,68.6,-427.8,71.9]},alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,47.4,28.7,31.4);


(lib.树叶飘副本s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.树叶s2();
	this.instance.setTransform(382,66,0.167,0.167,-15,0,0,144.7,178.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:144.8,scaleX:0.16,scaleY:0.16,rotation:-61.5,guide:{path:[381.9,66,307.9,77.4,233.3,81]},alpha:1},23).to({regX:146.8,regY:179.2,scaleX:0.07,scaleY:0.14,rotation:0,skewX:-117.7,skewY:62.3,guide:{path:[233.3,81,226.9,81.3,220.4,81.6,137.7,86,56.5,71.4,40.1,68.5,23.2,65.2]}},27).to({regX:144.2,regY:179,scaleX:0.13,scaleY:0.13,rotation:-135.6,skewX:0,skewY:0,guide:{path:[23.1,65.1,-36.9,53.4,-101.6,37.4,-163.6,22.3,-232.8,12.6]}},29).to({regX:145.5,regY:179.3,scaleX:0.11,scaleY:0.11,rotation:-105,guide:{path:[-233,12.7,-256.3,9.4,-280.1,6.8,-375.8,-3.5,-429.4,24.1,-483.1,51.5,-527.9,92.5]},alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.4,76.3,29.5,24.3);


(lib.树叶飘副本2s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.树叶s2();
	this.instance.setTransform(382,66,0.167,0.167,-120,0,0,145.1,179.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:179.3,scaleX:0.13,scaleY:0.23,rotation:-106.5,guide:{path:[381.9,66,307.9,77.4,233.3,81]},alpha:1},21).to({regX:144.4,regY:179.2,scaleX:0.05,scaleY:0.14,rotation:-12.7,guide:{path:[233.3,81,226.9,81.3,220.5,81.6,145,69.1,109.2,56.1,86.8,48,40.2,28.6]}},24).to({regX:144.6,scaleX:0.13,scaleY:0.13,rotation:59.4,guide:{path:[39.9,28.3,11.5,16.3,-25.9,0,-124.5,-42.9,-209.3,-37.8,-222.9,-37,-236.3,-34.9]}},26).to({regX:145.2,regY:179.3,scaleX:0.11,scaleY:0.11,rotation:120,guide:{path:[-236.4,-34.9,-306,-24.1,-369.2,20.7,-444.4,73.9,-486.2,82]},alpha:0},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,47.4,28.7,31.4);


(lib.树叶飘动画s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 8
	this.instance = new lib.树叶飘副本2s2("synched",0,false);
	this.instance.setTransform(-561.2,-90.8,1.048,1.048,0,0,0,28.8,35.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).wait(95));

	// 图层 2
	this.instance_1 = new lib.树叶飘s2("synched",0,false);
	this.instance_1.setTransform(-508.1,88.6,1.182,1.066,0,-172,8,28.8,35.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).wait(95));

	// 图层 4
	this.instance_2 = new lib.树叶飘副本s2("synched",0,false);
	this.instance_2.setTransform(-290.5,143.5,1.616,1.616,30,0,0,312,98.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({_off:false},0).wait(95));

	// 图层 5
	this.instance_3 = new lib.树叶飘副本s2("synched",0,false);
	this.instance_3.setTransform(-431.6,-68.6,1.024,1.024,7.7,0,0,28.7,35.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(132));

	// 图层 6
	this.instance_4 = new lib.树叶飘s2("synched",0,false);
	this.instance_4.setTransform(-505.5,11.5,1.224,1.224,-6.2,0,0,28.7,35.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).wait(132));

	// 图层 3
	this.instance_5 = new lib.树叶飘副本s2("synched",0,false);
	this.instance_5.setTransform(-300.1,49.7,1.391,1.391,0,0,0,28.7,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(168));

	// 图层 1
	this.instance_6 = new lib.树叶飘s2("synched",0,false);
	this.instance_6.setTransform(-411.2,-14,1.596,1.596,4.5,0,0,28.7,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168));

	// 图层 9
	this.instance_7 = new lib.树叶飘副本2s2("synched",0,false);
	this.instance_7.setTransform(-342.6,17,0.95,0.95,0,0,0,28.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,28,207.5,112);


// stage content:
(lib.DEMO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.树叶飘动画s2("synched",5,false);
	this.instance.setTransform(538.3,85.7,1.6,1.6,-59,0,0,-119.4,36.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},138).wait(1));

	// 图层 3
	this.instance_1 = new lib.树叶飘动画s2("synched",5,false);
	this.instance_1.setTransform(561.7,113.1,1.778,1.778,-52.6,0,0,-119.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},133).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(984.6,336.9,346.4,233.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

var canvas, stage, exportRoot;

function init() {
  createjs.MotionGuidePlugin.install();

  canvas = document.getElementById("canvas");
  canvas.width=$(document).width();
  canvas.height=$(document).height();
  images = images||{};

  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
  if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
  exportRoot = new lib.DEMO();

  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  stage.update();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
}