// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// firstTask();


function secondTask() {
	for(let i = 20; i > 9; i--){
		if(i === 13){
			break;
		}
		console.log(i);
	}
}
secondTask();

function thirdTask() {
	for(let i = 2; i < 11; i++) {
		if(i % 2 === 0) {
			console.log(i);
		}
	}
}
thirdTask();

function fourthTask() {
	let i = 2;
	while (i < 17) {
		if (i % 2 === 0){
			i++;
			continue;
		} else{
			console.log(i);
		}
		i++;    
	}
}
fourthTask();


function fifthTask() {
	const arrayOfNumbers = [];
	for (i = 5; i < 11; i++) {
		arrayOfNumbers [i -5] = i;
	}
	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}
fifthTask();


function firstTask() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];
	for (let i = 0; i < arr.length; i++) { 
		result[i] = arr[i];
	}
	console.log(result);
	return result;
}
firstTask();


function secondTassk() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	for (let i = 0; i < data.length; i++) { 
		if(typeof(data[i]) === 'number') {
			data[i] = data[i] * 2;
		} else if (typeof(data[i]) === 'string') {
			data[i] = `${data[i]} - done`;
		}
	}
	console.log(data);
	return data;
}
secondTassk();

function thirdTaask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// Пишем решение вот тут
	for (let i = 1; i <= data.length; i++) {
		result [i - 1] = data[data.length - i];
	}
	console.log(result);
	// Не трогаем
	return result;
}
thirdTaask();

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++){
		result += '';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);