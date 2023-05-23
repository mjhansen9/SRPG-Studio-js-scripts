/*this script checks for adjacent units while attacking, which allows for
 the building support btwn units when used in conjuction with 0support.js
*/
(function (){
	var alias1=BaseBattleTable.enterBattleStart
	BaseBattleTable.enterBattleStart = function(){
		var playerunit = null;
		if (this._battleObject.getAttackOrder().getActiveUnit().getUnitType()==0){
			playerunit=this._battleObject.getAttackOrder().getActiveUnit()
		};
		else if (this._battleObject.getAttackOrder().getPassiveUnit().getUnitType()==0){
			playerunit=this._battleObject.getAttackOrder().getPassiveUnit()
		};
		if (playerunit!= null){
			var X=playerunit.getMapX();
			var Y= playerunit.getMapY();
			var adj1=root.getCurrentSession().getUnitFromPos(X+1, Y);
			var adj2=root.getCurrentSession().getUnitFromPos(X-1, Y);
			var adj3=root.getCurrentSession().getUnitFromPos(X, Y+1);
			var adj4=root.getCurrentSession().getUnitFromPos(X, Y-1);
			var adjlist= new Array(adj1,adj2,adj3,adj4);
			var adjplayer=[];
			for (var i=0;i<adjlist.length;i++){
				if (adjlist[i]!=null){
					if (adjlist[i].getUnitType()==0){
						adjplayer.push(adjlist[i])
					}
				}
			};	
			for (i=0;i<adjplayer.length;i++){
				//root.log(adjplayer[i].getName())
				supportdatafun(playerunit,adjplayer[i],'battle');
				};
		
		};
		return alias1.call(this);
	}
	
}) ();
