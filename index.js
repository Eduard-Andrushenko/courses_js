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

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const colla = 0;
const nuggets = 2;


if (hamburger === 3 && colla || fries === 3 && nuggets) {
	console.log('Done!');
}


let hamburgerr;
const friess = NaN;
const colaa = 0;
const nuggetss = 2;


if (hamburgerr || colaa || friess === 3 || nuggetss) {
	console.log('Done!');
}

let hamburgger;
const friies = NaN;
const coola = 0;
const nuuggets = 2;


if (hamburgger && coola || friies === 3 && nuuggets) {
	console.log('Done!');
}


let numm = 50;
while (numm <= 55) {
	console.log(numm);
	numm++;
}


let buk = 50;
do {
	console.log(buk);
	buk++;
}
while (buk <= 60);

for (let i = 1; i < 10; i++){
	if(i === 6 ){
		break;
	}
	console.log(i);
}

for (let i = 1; i < 10; i++){
	if(i === 6 ){
		continue;
	}
	console.log(i);
}


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	result += '\n';
}

console.log(result);