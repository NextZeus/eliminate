class GameData {
	// 空白地图块的数量
	public static umapnum:number = 0;
	public static mapData:number[][];

	public static stepNum:number = 0;
	public static levelStep:number = 0;

	public static elementTypes:number[];
	public static levelreq:LevelRequire;

	// 游戏对象
	public static elements:GameElement[];

	// 未使用元素ID
	public static unusedElements: number[];

	// 背景图
	public static levelBackgroundImageName:	string = "";

	public static MaxRow:number = 8;
	public static MaxColumn:number = 8;

	// 当前地图可使用数量
	public static currentElementNum:number =0;

	public static initData(){
		GameData.mapData = [];

		for(var i = 0 ; i < GameData.MaxRow; i++){
			var arr:number[] = [];
			for(var t = 0 ; t < GameData.MaxColumn; t++){
				// －1 无法使用
				// －2 可使用 但是还未放置
				GameData.mapData[t].push(-2);
			}
		}

		GameData.levelreq = new LevelRequire();

		GameData.elements = [];
		GameData.unusedElements = [];

		// 填充元素
		var len:number = GameData.MaxRow * GameData.MaxColumn;

		for(var q = 0; q < len; q++){
			var ele:GameElement = new GameElement();
			ele.id = q;
			GameData.elements.push(ele);
			GameData.unusedElements.push(q);
		}

		GameData.stageW =  egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight

	}

	public static stageW:number = 0;
	public static stageH:number = 0;

}