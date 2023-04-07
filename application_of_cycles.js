'use scrict';
const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
const personslMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреных фильмов?',''),
          b = prompt('На сколько оцените его?','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personslMovieDB.movies[a] = b;
            console.log('WE DONE!!!');
        } else {
            console.log('ERROR');
            i--;
        }
}
if (personslMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
}else if (personslMovieDB.count >= 10 && personslMovieDB < 30 ){
        console.log('Просмотрено достаточно фильмов');
 } else if(personslMovieDB.count >= 30){
            console.log('Вы киноман!');
        } else {
            console.log('ERROR');
        }
    
console.log(personslMovieDB);
