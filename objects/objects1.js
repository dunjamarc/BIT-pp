var breakfast = {
    name : "Eggs with cheese",
    ingredients : ["eggs", "cheese", "salt"],
    energy : 1500,
    printInstructions : function(){
        return "Bake scrumbled eggs and add salt and cheese.";
    },
    JSCompilant : function(){
        if(breakfast.energy > 500){
            return true;
        } else {
            return false;
        }
    }
};

console.log(breakfast.JSCompilant());

// 2
var breakfast2 = {
    name : "Mac and cheese",
    ingredients : ["mac", "cheese", "salt", "boiling water"],
    energy : 600,
    printInstructions : function(){
        return "Cook macs. After that add cheese.";
    },
    JSCompilant : function(){
        if(breakfast2.energy > 500){
            return true;
        } else {
            return false;
        }
    }
};

breakfast2.energy = 400;
console.log(breakfast2);