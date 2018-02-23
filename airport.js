"use strict";

(function () {

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = (function (number) {
            if (number == undefined) {
                var max = 100;
                var min = 10;
                number = ((max - min) * Math.random()) + min;
                return Math.floor(number);
            }
            return number;
        })(number);

        this.category = (function (category) {
            if (category == undefined) {
                return category = "e";
            }
            return category;
        })(category);

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }

    }
    //new Person(n, s);
    //new Seat(num, cat);

    function Passenger(person, seat) {

        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }

    function Flight(relation, date) {

        this.relation = relation;
        this.date = new Date(date);
        this.listOfPass = [];
        this.getData = function () {
            return this.date + " - " + this.relation;
        }
    }

    function Airports() {

        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }

    var p1 = new Person("John", "Snow");
    var s1 = new Seat(55,"b"); // ???
    var pass1 = new Passenger(p1, s1); //prvo pravimo person i seat pa tek onda passenger zato sto passenger ocekuje person i seat kao parametre
    console.log(s1.getData());
    console.log(pass1.getData());


})();