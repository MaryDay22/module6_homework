//Задача №3

const argument = (x) => {
	return (y) => {
		return x + y;
	};
};

const addNumber = argument(9);
const result = addNumber(6);
console.log(result);