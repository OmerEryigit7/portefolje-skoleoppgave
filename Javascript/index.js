options = ["stein", "saks", "papir"]
function user_choice_stein() {
    userchoice = "stein"
}

function user_choice_saks() {
    userchoice = "saks"
}

function user_choice_papir() {
    userchoice = "papir"
}

function steinSaksPapir() {
    let computerchoice = options[Math.floor(Math.random()*options.length)]

    if (userchoice == computerchoice){
        document.getElementById("resultat").innerHTML = "Uavgjort"
    }

    else if (userchoice == "stein" && computerchoice == "saks" || userchoice == "saks" && computerchoice == "papir" || userchoice == "papir" && computerchoice == "stein"){
        document.getElementById("resultat").innerHTML = "Du vant! Maskinen valgte " + computerchoice
    }

    else {
        document.getElementById("resultat").innerHTML = "Du tapte! Maskinen valgte " + computerchoice
    }
}
