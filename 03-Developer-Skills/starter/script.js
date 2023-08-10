// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';

const calcAge = birthYear => new Date().getFullYear() - birthYear;
console.log(calcAge(1989));
 */

const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		value: prompt('Degrees celsius'),
	};

	const kelvin = Number(measurement.value) + 273;
	return kelvin;
};
console.log(measureKelvin());
