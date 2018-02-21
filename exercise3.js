// mix array randomly

function random(arr) {
    var mixedArr = [];
    var len = arr.length;

    for (var i = 0; i < len; i++) {

        var n = Math.floor(len * Math.random());
        mixedArr[i] = arr[n];
        arr.splice(n, 1);

    }
    return mixedArr;

}

console.log(random([1, 2, 3, 4]));

// ------------------------SHOPPING-------------------

'use strict';

(function () {
    console.log("Hi");

    function Product(name, price, expDate) {
        this.id = (function () {
            var productId;
            productId = Math.floor(89999 * Math.random() + 10000);
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expDate = new Date(expDate);
        this.getInfo = function () {
            var productCode = this.name[0] + (this.name[this.name.length - 1]).toUpperCase() + this.id;
            return productCode + ", " + this.name + ", " + this.price.toFixed(2);
        }
    }

    var coffee = new Product("Grand", 102.45, '2018, 7, 12'); //august
    var milk = new Product("Kravica", 97.598, '2018, 8, 25');
    var apples = new Product("Green Smit", 50.485, '2018, 9, 1');

    console.log(milk.getInfo());

    function ShoppingBag() {

        this.list = [];

        this.calculateTotalPrice = function () {
            var total = 0;
            for (var j = 0; j < this.list.length; j++) {
                total += this.list[j].price;
            }
            return total;
        }

        /* this.averagePrice = function(){
            var total = 0;
            var average = 0;
            for(var j = 0; j < this.list.length; j++){
                total += this.list[j].price;
            }
            average = total / this.list.length;
            return average.toFixed(3);
        } */

        this.averagePrice = function () {
            var average = 0;
            var total = this.calculateTotalPrice();
            average = total / this.list.length;
            return average.toFixed(3);
        }

        this.getMostExpensive = function () {
            var mostExpencive = this.list[0];
            var highestPrice = this.list[0].price;
            for (var i = 1; i < this.list.length; i++) {
                if (this.list[i].price > highestPrice) {
                    highestPrice = this.list[i].price;
                    mostExpencive = this.list[i];
                }
            }
            return mostExpencive.getInfo();
        }

        this.addProduct = function (p) {
            if(p.expDate > new Date()){
                this.list.push(p);   //valid expiration date ????
            }
        }


    }

    var shoppinglist = new ShoppingBag();
    shoppinglist.addProduct(coffee);
    shoppinglist.addProduct(milk);
    shoppinglist.addProduct(apples);
    console.log(shoppinglist.calculateTotalPrice());
    console.log(shoppinglist.averagePrice());


    function PaymentCard(accountBalance, status, date) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.date = date;
    }

    var account = new PaymentCard (213.32, "active", new Date('2025 8 17'));

    var checkoutAndBuy = function(shoppinglist, account) {
        var totalShopingPrice = shoppinglist.calculateTotalPrice();
        if (account.accountBalance >= totalShopingPrice) {
            return 'Purchase succsessful!';
        }
        else {
            return "Add " + (totalShopingPrice - account.accountBalance) + " RSD";
        }
    }

    console.log(checkoutAndBuy(shoppinglist, account));
})();


