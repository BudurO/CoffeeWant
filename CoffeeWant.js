

//------------------------------Capuccino-----------------------------------//
function AnimationCoffeeb() {
    let cupCoffeeb = document.getElementById("cupCoffeeMailk");
    cupCoffeeb
    cupCoffeeb.innerText = "Mailk!"
    cupCoffeeb.style.backgroundColor = "#F8ECD1"
    cupCoffeeb.style.color = "black"
    cupCoffeeb.style.borderRadius = "0 0 0 0"
    cupCoffeeb.style.justifyContent = "center" 
}
function AnimationCoffeef() {
    let cupCoffeef = document.getElementById("cupCoffeeb");
    cupCoffeef.innerText = "Coffee!"
    cupCoffeef.style.color = "#FFFFFF"
    cupCoffeef.style.justifyContent = "center" 
    cupCoffeef.style.backgroundColor = "#3F2305"
    cupCoffeef.style.borderRadius = "0 0 11px 11px"
}

function Capuccino() {
    AnimationCoffeeb()
    AnimationCoffeef()
    console.log("Capuccino!");

}

//------------------------------Latte-----------------------------------//
function BlackCoffeeb() {
    let cupCoffeeb = document.getElementById("cupCoffeeb");
    cupCoffeeb.style.backgroundColor = "#EAC696"
    cupCoffeeb.innerText = "Steamed milk!"
    cupCoffeeb.style.color = "black"
    cupCoffeeb.style.borderRadius = "0 0 0 0"
    cupCoffeeb.style.justifyContent = "center" 



}
function MailkCoffeef() {
    let cupCoffeef = document.getElementById("cupCoffeeMailk");
    cupCoffeef.innerText = "Coffee!"
    cupCoffeef.style.color = "#FFFFFF"
    cupCoffeef.style.justifyContent = "center" 
    cupCoffeef.style.backgroundColor = "#3F2305"
    
    cupCoffeef.style.borderRadius = "0 0 11px 11px"


}

function SteamedMilk() {
    let cupCoffeesn = document.getElementById("SteamedMilk");
    cupCoffeesn.innerText = "Milk foam!"
    cupCoffeesn.style.color = "black"
    cupCoffeesn.style.justifyContent = "center" 
    cupCoffeesn.style.backgroundColor = "#F8ECD1"
    
    cupCoffeesn.style.borderRadius = "0 0 0 0"
}
function Latte() {
    BlackCoffeeb()
    MailkCoffeef()
    SteamedMilk()
    console.log("Latte!");

}

//------------------------------Arabic-----------------------------------//
function AnimationCoffeebar() {
    let cupCoffeeb = document.getElementById("cupCoffeeArabic");
    cupCoffeeb.style.backgroundColor = "#bd8a26"
    cupCoffeeb.innerText = "Coffee!"
    cupCoffeeb.style.color = "#FFFFFF"
    cupCoffeeb.style.borderRadius = "0 0 11px 11px"
    cupCoffeeb.style.justifyContent = "center" 
    console.log("Arabic coffee!");

}

//------------------------------Hot-----------------------------------//

function Hot() {
    let cupCoffeef = document.getElementById("cupCoffeeb");
    let hotC = document.getElementById("hot")
        if(hotC <= 90){
            cupCoffeef.innerText = "Hot!"
            cupCoffeef.style.justifyContent = "center" 
            cupCoffeef.style.borderRadius = "0 0 11px 11px"
            cupCoffeef.href = "./yourCoffee.html"


            console.log("hot!");
}else{
    console.log("m")
}

}

//------------------------------Middle-----------------------------------//

function Middle() {
    let cupCoffeef = document.getElementById("cupCoffeeb");
    let middleC = document.getElementById("middle")
    if(middleC <= 40){
            cupCoffeef.innerText = "Middle!"
            cupCoffeef.style.justifyContent = "center" 
            cupCoffeef.style.borderRadius = "0 0 11px 11px"
            cupCoffeef.href = "./yourCoffee.html"


            console.log("Middle!");
}else{
    console.log("m")
}

}
//------------------------------Cold-----------------------------------//

function Cold() {
    let cupCoffeef = document.getElementById("cupCoffeeb");
    let coldC = document.getElementById("cold")
    if(coldC <= 0){
            cupCoffeef.innerText = "Cold!"
            cupCoffeef.style.justifyContent = "center" 
            cupCoffeef.style.borderRadius = "0 0 11px 11px"
            cupCoffeef.href = "./yourCoffee.html"


            console.log("Cold!");
}else{
    console.log("m")
}

}

//------------------------------Continue-----------------------------------//

function Continue() {
    let continueC = document.getElementById("continue")
    
    continueC = 40
    if(continueC == 90){
        document.getElementById("continue").href = "yourCoffeeHot.html";
    }
        else if(continueC == 40){
        document.getElementById("continue").href = "yourCoffeeMiddle.html";

    }
    else if (continueC == 0){
        document.getElementById("continue").href = "yourCoffeeCold.html";
    }else{
        console.log("err");
    }
    
}