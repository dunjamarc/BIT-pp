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
                number = Math.floor(number);
            }
            return number;
        })(number);

        this.category = (function (category) {
            if (category == undefined) {
                category = "e";
            }
            return category;
        })(category);

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }

    }

    function Passenger(person, seat) {

        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }

    function Flight(relation, date) {

        this.relation = relation;
        this.date = new Date(date);  // only date ???
        this.listOfPass = [];

        this.addPassenger = function(p){
            this.listOfPass.push(p);
        }

        this.getData = function () {
            var flData = this.date + ", " + this.relation + "\n";
            for (var i = 0; i < this.listOfPass.length; i++){
                flData += "\t" + this.listOfPass[i].getData() + "\n";
            }
            return flData;
        }
    }

    function Airport() {

        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function(fl){
            this.listOfFlights.push(fl);
        }

        this.getData = function(){
            var totalPass = 0;
            for(var i = 0; i < this.listOfFlights.length; i++){
                totalPass += this.listOfFlights[i].listOfPass.length;
            }
            var allData = "Airport: " + this.name + ", total passengers: " + totalPass + "\n";
            for(var j = 0; j < this.listOfFlights.length; j++){
                allData += "\t" + this.listOfFlights[j].getData();
            }
            return allData;
        }
    }

    function createFlight(relation, date){
        return new Flight(relation, date);
    }

    function createPassenger(n, s, no, c){
        var person = new Person(n, s);
        var seat = new Seat(no, c);
        return new Passenger(person, seat);
    }


    var pass1 = createPassenger("John", "Snow", 55, "b"); 
    var pass2 = createPassenger("Cersei", "Lannister", 13, "e");
    var pass3 = createPassenger("Daenerys", "Targaryen", 14);
    var pass4 = createPassenger("Tyrion", "Lannister");

    var fl1 = createFlight("Belgrade - New York", "Oct 25 2018");
    fl1.addPassenger(pass1);
    fl1.addPassenger(pass2);
    var fl2 = createFlight("Barcelona - Belgrade", "Nov 11 2018");
    fl2.addPassenger(pass3);
    fl2.addPassenger(pass4);

    var nikolaTesla = new Airport();
    nikolaTesla.addFlight(fl1);
    nikolaTesla.addFlight(fl2);

    console.log(nikolaTesla.getData());

})();