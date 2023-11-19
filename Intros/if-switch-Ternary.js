// Template.
/*
    if (condition){
        codeblock
    }else if(condition){
        codeblock
    }else{codeblock
    }
*/

let x = 1, y = 2;
let variable;

if (x > y){
    variable = "sup";
}else if (x < y){
    variable = "top";
}else{
    variable = "peace";
}

//Templste.
/*
    switch(variable){
        case 1:
            console.log("action");
        break

        case 2:
            console.log("action2");
        break

        default:
            console.log("done");
    }
*/

switch(variable){
    case ("sup"):
        console.log("action");
    break

    case ("top"):
        console.log("action2");
    break

    case ("peace"):
        console.log("action2");
    break

    default:
        console.log("done");
}

// Template.
/*
let variable = (condition) ? output1 : output2
*/

let peace = (variable == "top") ? 300:700;
console.log(peace);

// break - ends the program
// continue - starts the program from beginning