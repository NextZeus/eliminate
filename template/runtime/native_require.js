
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"polyfill/promise.js",
	"bin-debug/data/element/BaseElement.js",
	"bin-debug/view/PropViewManage.js",
	"bin-debug/data/element/LevelRequireElement.js",
	"bin-debug/data/GameData.js",
	"bin-debug/data/LevelGameDataParse.js",
	"bin-debug/data/LevelRequire.js",
	"bin-debug/data/LinkLogic.js",
	"bin-debug/data/MapControl.js",
	"bin-debug/data/MapDataParse.js",
	"bin-debug/data/PropLogic.js",
	"bin-debug/event/ElementViewManageEvent.js",
	"bin-debug/data/element/GameElement.js",
	"bin-debug/Main.js",
	"bin-debug/view/ElementView.js",
	"bin-debug/view/ElementViewManage.js",
	"bin-debug/view/GameBackGround.js",
	"bin-debug/view/GameLayer.js",
	"bin-debug/view/GameOverPanel.js",
	"bin-debug/view/LevelElementView.js",
	"bin-debug/view/LevelReqViewManage.js",
	"bin-debug/view/PropView.js",
	"bin-debug/GameLogic.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};