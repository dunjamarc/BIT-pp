"use strict";

(function () {

    // class Genre
    class Genre {
        constructor (name){
            this.name = name;
        }

        getData() {
            let shortName = `${this.name[0]}${this.name[this.name.length - 1]}`;
            return shortName.toUpperCase();
        }
    }

    // class Movie
    function Movie(title, genre, length) {
    this.title = title;
    this.genre = new Genre(genre);
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.length + ', ' + this.genre.getData();
}


function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNo = this.listOfMovies.length;
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNo = this.listOfMovies.length;
};
Program.prototype.getData = function () {
    var totalLength = 0;
    for (var i = 0; i < this.totalNo; i++) {
        totalLength += parseInt(this.listOfMovies[i].length);
    }

    var allData = this.date + ', program duration ' + totalLength + 'min \n';

    var line = "";
    for (var j = 0; j < this.totalNo; j++) {
        line += "\t \t" + this.listOfMovies[j].getData() + "\n";
    }
    return allData + line;
};


function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
}

Festival.prototype.allMovies = function () {
    var noAllMovies = 0;
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        noAllMovies += this.listOfPrograms[i].totalNo;
    }
    return noAllMovies;
}
Festival.prototype.addProgram = function (p) {
    this.listOfPrograms.push(p);
};
Festival.prototype.getData = function () {
    var festInfo = this.name + " festival has " + this.allMovies() + " movie titles \n";
    for (var j = 0; j < this.listOfPrograms.length; j++) {
        festInfo += "\t" + this.listOfPrograms[j].getData() + "\n";
    }
    return festInfo;
}


function createMovie(title, genre, length) {
    return new Movie(title, genre, length);
}

function createProgram(date) {
    return new Program(date);
}

var titanic = createMovie("Titanic", "Drama", "180min");
var anaconda = createMovie("Anaconda", "Horror", "95min");
var iJones = createMovie("Indiana Jones", "Action", "120min");
var bigGetsby = createMovie("Big Getsby", "Drama", "155min");
var lajanjeNaZvezde = createMovie("Lajanje na zvezde", "Comedy", "125min");
var saw = createMovie("Saw", "Horror", "120min");
var tombRider = createMovie("Tomb Rider", "Action", "130min");

var p1 = createProgram("2018 2 25");
p1.addMovie(titanic);
p1.addMovie(anaconda);
p1.addMovie(iJones);

var p2 = createProgram("2018 2 26");
p2.addMovie(bigGetsby);
p2.addMovie(lajanjeNaZvezde);
p2.addMovie(saw);
p2.addMovie(tombRider);

var festival = new Festival("FEST");
festival.addProgram(p1);
festival.addProgram(p2);


console.log(festival.getData());
    
}) ();