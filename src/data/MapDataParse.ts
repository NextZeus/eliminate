/**
 * 解析地图数据
 */
class MapDataParse {
	public static createMapData(val:number[]):void{
		var len:number = val.length;

		GameData.unmapnum = len;

		var index:number = 0;

		for(var i = 0; i < len; i++){
			index = val[i];

			var row:number = Math.floor(index / GameData.MaxColumn);
			var col:number = index % GameData.MaxRow;

			// 这个方块可用
			GameData.mapData[row][col] = -1;
			GameData.currentElementNum = GameData.MaxRow * GameData.MaxColumn - len;;
		}
	}
}