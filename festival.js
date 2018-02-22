"use strict";

(function(){
    console.log("Hi!");

    function Genre(name){
        this.name = name;
        this.getData = function(){
            var shortName = this.name[0] + this.name[this.name.length - 1];
            return shortName.toUpperCase();
        }
    }

    function Movie(title, genre, length){
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;

        this.getData = function(){
            return this.title + ', ' + this.length + ', ' + this.genre.getData();
        }
    }

    var titanic = new Movie("Titanic", "Drama", "180min"); 
    var anaconda = new Movie("Anaconda", "Horror", "95min"); 
    var iJones = new Movie("Indiana Jones", "Action", "120min"); 
    var bigGetsby = new Movie("Big Getsby", "Drama", "155min");
    var lajanjeNaZvezde = new Movie("Lajanje na zvezde", "Comedy", "125min");
    var saw = new Movie("Saw", "Horror", "120min");
    var tombRider = new Movie("Tomb Rider", "Action", "130min");


    function Program(date){
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNo = this.listOfMovies.length; 

        this.addMovie = function(movie){
            this.listOfMovies.push(movie);
            this.totalNo = this.listOfMovies.length;
        };
        
        //  Program data string
        this.getData = function(){
            var totalLength = 0;
            for(var i = 0; i < this.totalNo; i++){
                totalLength += parseInt(this.listOfMovies[i].length);
            }
            
            var allData = this.date + ', ' + totalLength + '\n'; 
            
            var line = "";
            for(var j = 0; j < this.totalNo; j++){
                line += "\t" + this.listOfMovies[j].getData() + "\n";
            }
            return allData + line;
        };
            
    }
    

    function Festival(name){
        this.name = name;
        this.listOfPrograms = [];
        //this.allMovies = ;

        this.addProgram = function(p){
            this.listOfPrograms.push(p);
        };

        this.getData = function(){         // unfinished
            var noAllMovies = 0;
            for(var i = 0; i < this.listOfPrograms.length; i++){
                noAllMovies += this.listOfPrograms[i].totalNo;  
                return noAllMovies;
            }
        }
    }


    var p1 = new Program("2018 2 25");
    p1.addMovie(titanic);
    p1.addMovie(anaconda);
    p1.addMovie(iJones);
    var p2 = new Program("2018 2 26");
    p2.addMovie(bigGetsby);
    p2.addMovie(lajanjeNaZvezde);
    p2.addMovie(saw);
    p2.addMovie(tombRider);
    var festival = new Festival("FEST");
    festival.addProgram(p1);
    festival.addProgram(p2);

    console.log(festival);
    console.log(p1.getData());
    
    
})();