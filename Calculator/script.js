console.log("heck yeah")
var buttonClickSound = new Audio('audios/buttonClickSound2.mp3');
let result = "";
let mixedArray = []

document.getElementById("btn7").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(7);
    displayNumber();
}
document.getElementById("btn8").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(8);
    displayNumber();
}
document.getElementById("btn9").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(9);
    displayNumber();
}
document.getElementById("btn÷").onclick = function(){
    buttonClickSound.play();
    mixedArray.push('÷');
    displayNumber();
}
document.getElementById("btn4").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(4);
    displayNumber();
}
document.getElementById("btn5").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(5);
    displayNumber();
}
document.getElementById("btn6").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(6);
    displayNumber();
}
document.getElementById("btnx").onclick = function(){
    buttonClickSound.play();
    mixedArray.push('x');
    displayNumber();
}
document.getElementById("btn1").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(1);
    displayNumber();
}
document.getElementById("btn2").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(2);
    displayNumber();
}
document.getElementById("btn3").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(3);
    displayNumber();
}
document.getElementById("btn-").onclick = function(){
    buttonClickSound.play();
    mixedArray.push('-');
    displayNumber();
}
document.getElementById("btn0").onclick = function(){
    buttonClickSound.play();
    mixedArray.push(0);
    displayNumber();
}
document.getElementById("btnC").onclick = function(){
    buttonClickSound.play();
    arrayClear();
    displayNumber();
}
document.getElementById("btn=").onclick = function(){
    buttonClickSound.play();
    solution();
}
document.getElementById("btn+").onclick = function(){
    buttonClickSound.play();
    mixedArray.push('+');
    displayNumber();
}

//--------------- FUNCTIONS ------------------
function displayNumber(){
    document.getElementById("numberDisplay").innerHTML = displayArray();
}
function displayArray(){
    result = '';
    console.log("Final:", mixedArray);
    for(let i=0;i<mixedArray.length;i++){
        result += mixedArray[i];
    }
    return result;
    // let wrapped = result.split("").map(char => `[${char}]`).join("");
    // return wrapped;
}
function arrayClear(){
    mixedArray.length = 0;
    console.log("This is my array", mixedArray);
}

// ------------------- Solution/Answer -------------------------
function solution(){
    // Works for single digit like this 2+2 
    //let sum = '';
    // for(let i=0;i<mixedArray.length;i++){
    //     console.log(mixedArray[i]=== ('x'));
    //     if(mixedArray[i] === ('+')){
    //         sum = mixedArray[i-1] + mixedArray[i+1];
    //     } else if(mixedArray[i] === ('-')){
    //         sum = mixedArray[i-1] - mixedArray[i+1];
    //     } else if(mixedArray[i] === ('x')){
    //        // console.log("Am I in?");  // debug
    //         sum = mixedArray[i-1] * mixedArray[i+1];
    //     } else if(mixedArray[i] === ('÷')){
    //        // console.log("Am I in?!"); // debug
    //         sum = mixedArray[i-1] / mixedArray[i+1];
    //     }
    // }

    // For single digits but multiple operators like 2+2+2 | no bodmas here
    let sum = mixedArray[0];
    for(let i=0; i<mixedArray.length-1;i++){
        if(mixedArray[i] === ('+')){
            sum += mixedArray[i+1];
            console.log("sum: ", sum); //debug
        } else if(mixedArray[i] === ('x')){
            sum *= mixedArray[i+1];
            console.log("sum: ", sum); //debug
        } else if(mixedArray[i] === ('-')){
            sum -= mixedArray[i+1];
            console.log("sum: ", sum); //debug
        } else if(mixedArray[i] === ('÷')){
            sum /= mixedArray[i+1];
            console.log("sum: ", sum); //debug
        }
    } 
    document.getElementById("numberDisplay").innerHTML = sum;
}


