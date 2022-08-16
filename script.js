/*
document.addEventListener("DOMContentLoaded", beverages);



function beverages() {
    const snaps = document.querySelector("#snaps");
    snaps.addEventListener("click", AlkoholCheck);
    const tuborg = document.querySelector("#tuborg");
    tuborg.addEventListener("click", AlkoholCheck);
    const faxe = document.querySelector("#faxe");
    faxe.addEventListener("click", AlkoholCheck);
    const ramune = document.querySelector("#ramune");
    ramune.addEventListener("click", AlkoholCheck);
}




function AlkoholCheck() {
    console.log(this.alt);

    if (this.alt == "tuborg") {
        console.log("Indeholder alkohol");
    } else if (this.alt == "snaps") {
        console.log("Indeholder alkohol");
    } else {
        console.log("Alkoholfri");
    }

}
*/

document.addEventListener("DOMContentLoaded", timeADay)



function timeADay() {
    timer = new Date().getHours();

    if (timer >= 5 && timer <= 10) {
        console.log("Godmorgen");
    } else if (timer >= 10 && timer <= 18) {
        console.log("Goddag");
    } else if (timer >= 18 && timer <= 24) {
        console.log("Godaften")
    } else {
        console.log("Godnat");
    }
}

