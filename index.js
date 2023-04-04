'use script';

const category = 'toys';

console.log(`http://someurl.com/${category}/10`);

let x = 5;

console.log(x++);

const Edik = true,
	Alexander = false;

console.log(Edik && Alexander);

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personslMovieDB = {
	count:numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat: false
};
const a = prompt('Один из просмотреных последних фильмов?', ''),
	b = prompt('На сколько оцениет его', '');

personslMovieDB.movies[a] = b;
console.log(personslMovieDB);

if (4 == 9) {
	console.log('Ok!');
} else {
	console.log(false);
}

const num = 50;
if (num < 49) {
	console.log('Error');
} else if (num > 100){
	console.log('VeryBig');
} else {
	console.log('VeryGood');
}

(num === 50) ? console.log('VeryGood') : console.log('Error');

const numb = 50;
switch (numb){
case 49:
	console.log('Неверно');
	break;
case 100:
	console.log('Неверно');
	break;
case 50:
	console.log('Верно');
	break;
default:
	console.log('Не в этот раз!');
	break;
}


const humburger =  2,
	frie = 1,
	cola = 0;

if (humburger === 3 && cola === 1 && frie){
	console.log('URAAAAAA!');
} else {
	console.log('We are ready!');
}