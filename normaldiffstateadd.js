function difficultystateadd(){
	var x = root.getCurrentSession().getEnemyList();
	var i =0
	for (i; i<x.getCount();i++){
		//root.log('hihere')
		var unit = x.getData(i);
		if (unit.getLv()>=10){
			incrmov=Math.floor(unit.getLv()/10);
			var currentmov =unit.getParamValue(8);
			unit.setParamValue(8, currentmov+incrmov);
		};
		if (root.getMetaSession().getDifficulty().getName()=='Normal'){
			var state = root.getBaseData().getStateList().getDataFromId(0);
			StateControl.arrangeState(unit, state, IncreaseType.INCREASE);
			var mhp = ParamBonus.getMhp(unit);
			unit.setHp(mhp);
		};	
		else if (root.getMetaSession().getDifficulty().getName()=='Intense'){
			var state = root.getBaseData().getStateList().getDataFromId(1);
			StateControl.arrangeState(unit, state, IncreaseType.INCREASE);
			var mhp = ParamBonus.getMhp(unit);
			unit.setHp(mhp);
		};			
	};
}