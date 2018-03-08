// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     print() {
//         console.log(`(${this.x}, ${this.y})`);
//     }

//     description() {
//         console.log('I\'m point');
//     }
// }

// var p = new Point(3, 4);
// p.print();
// p.description();
// console.log(p.x);

// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         super(x, y);
//         this.color = color;
//     }

//     print() {
//         console.log('Color point');
//         super.print();
//         console.log(this.color);
//     }
// }

// var cp = new ColorPoint(5, 2, 'green');
// cp.print();
// cp.description();

// console.log(cp instanceof ColorPoint);
// console.log(cp instanceof Point);


class Person {

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    printPersonData(){
        return `${this.name} ${this.surname}`;
    }
}

class Programmer extends Person {

    constructor(name, surname, ...languages){
        super(name, surname);
        this.languages = languages;
    }

    printProgrammerData(){
        return `${super.printPersonData()}, ${this.languages}`;
    }

    learnedNewLanguage(...lan){
        this.languages.push(...lan);
    }
}

let pr1 = new Programmer('Pera', 'Peric', 'JS', 'Python', 'PHP');
let pr2 = new Programmer('Zika', 'Zikic', 'Java', 'C#');
pr1.learnedNewLanguage('C++', 'C#');
console.log(pr1.printProgrammerData());