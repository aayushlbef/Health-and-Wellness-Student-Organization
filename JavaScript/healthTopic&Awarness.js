function click(id, location){
    id.addEventListener("click", ()=>{
    window.location.href = location;
})
}

let mha = document.getElementById("MHA")
click(mha, "/HTML/mentalHealthAwarness.html")

let ph = document.getElementById("PF")
click(ph, "/HTML/physicalHealth.html")

let nhe = document.getElementById("NHE")
click(nhe, "/HTML/nutrition&HealthyEating.html")

let sm = document.getElementById("SM")
click(sm, "/HTML/stressManagement.html")

let sh = document.getElementById("SH")
click(sh, "/HTML/sleepHygiene.html")

let aa = document.getElementById("AA")
click(aa, "/HTML/adictionAwarness.html")