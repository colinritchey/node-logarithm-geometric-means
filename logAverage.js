var _ = require("underscore");

module.exports = function( arrayInput){

	var baseExponent = 10;
	var arrayToSum = [];

	function validateArguements(){

		if (Array.isArray(arrayInput)){
			arrayToSum = arrayInput;
		} else {
			throw new Error("Input is not a valid array");
		}

	}

	function geometricMeans (base, array){

		var sumOfLogs = _.reduce(array, function(memo, item){
			return memo + customLogBase(base, item);
		}, 0);

		return Math.pow(base, sumOfLogs/array.length);

	}

	function customLogBase(desireBase, input){
		
		if(input === 0){
			return 1/Math.log(desireBase);
		}

		return (Math.log(input)/Math.log(desireBase));
		
	}

	
	validateArguements();

	var result = geometricMeans(baseExponent, arrayToSum)

	return parseFloat(result).toFixed(2);

}