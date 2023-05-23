/* this function ] searches for common custom parameters between units and if it exists adds to a variable representing their support data
to set up copy the following into a units custom parameters:
{
	supportdata:[]
}
within the brackets, place numbers that correspond with the index of the variable that represents 2 units' support data
thus, if 2 unit's both have that number in their custom parameters within supportdata, this function will add to that variable
*/
function supportdatafun(unit1,unit2,typeaction){
	//check if two units have shared support variable
	var unit1supports=unit1.custom.supportdata;
	var unit2supports=unit2.custom.supportdata;
	var sharedsupport = null
	//root.log(unit1supports[0]);
	for (var i1=0;i1<unit1supports.length;i1++){
		
		for (var i2=0;i2<unit2supports.length;i2++){
			
			if (unit1supports[i1]==unit2supports[i2]){
				sharedsupport=unit1supports[i1];
				//root.log(sharedsupport);
				break;
			};
		};
		if (sharedsupport!=null){
			break;
		};
	};
	if (sharedsupport==null){
		
		return;
	};
	var supportvalue = root.getMetaSession().getVariableTable(0).getVariable(sharedsupport);

	var incrvalue=0;
	if (typeaction=='battle'){
		//Change in case I let the player rename Aniel
		//if either unit = aniel gains less points
		if (unit1.getName()=='Aniel'||unit2.getName()=='Aniel'){
			incrvalue=3
		};
		else {
			incrvalue=6
		}
		
	};
	else if (typeaction=='dance'){
		if (unit1.getName()=='Aniel'||unit2.getName()=='Aniel'){
			incrvalue=1
		};
		else {
			incrvalue=3
		}
		
	};
	else if (typeaction=='staffuse'){
		if (unit1.getName()=='Aniel'||unit2.getName()=='Aniel'){
			incrvalue=1
		};
		else {
			incrvalue=3
		}
		
	};
	root.getMetaSession().getVariableTable(0).setVariable(sharedsupport,supportvalue+incrvalue)
}