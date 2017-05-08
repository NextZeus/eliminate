/**
 * 解析
 */

class LevelGameDataParse {
	
	public static parseLevelGameData(val:any){
		GameData.stepNum = val.step;
		GameData.levelStepNum = val.step;
		GameData.elementTypes = val.element;
		GameData.levelBackgroundImageName = val.levelbgimg;
		LevelGameDataParse.parseLevelReq(val.levelreq);
	}

	// 解析过关条件
	private static parseLevelReq(val:any){
		// 将原有数据清空
		GameData.levelreq.openChange();
		var len:number = val.length;

		for(var i = 0 ; i < len; i++){
			GameData.levelreq.addElement(val[i].type,val[i].num);
		}
	}

}