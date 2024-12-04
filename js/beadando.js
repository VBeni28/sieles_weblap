//hamburger menü
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click',aktival)
function aktival() {
    menu.classList.toggle('active'); // Menü megjelenítése/elrejtése
};

//hutte

const adottKaloria = {
    germknödel: 450, // Example calorie value for Germknödel
    kaiserschmarrn: 300, // Add other meals if needed
    wienerschnitzel: 600,
    apfelstrudel: 400,
    laberknödel: 500,
    kasnocken: 700
};

const adottÁr = {
    germknödel: 6.50,
    kaiserschmarrn: 7.00,
    wienerschnitzel: 13.00,
    apfelstrudel: 4.50,
    laberknödel: 6.00,
    kasnocken: 9.00
}

function kérdez(event) {
    const button = event.target; // Identify the button clicked
    const parentDiv = button.parentElement; // Get the parent element
    const mealName = parentDiv.querySelector('h2').innerText.toLowerCase(); // Identify the meal

    console.log(button);
    console.log(parentDiv);
    console.log(mealName);

    const kaloriaErtek = adottKaloria[mealName] || 0; // Find the calorie value
    console.log(kaloriaErtek);
    let mennyiseg = parseInt(prompt(`Hány adagot szeretnél a(z) ${mealName} ételből?`));

    if (isNaN(mennyiseg) || mennyiseg <= 0) {
        alert("Kérlek, adj meg egy érvényes mennyiséget!");
    } else {
        const osszKaloria = mennyiseg * kaloriaErtek;
        const osszÁr = mennyiseg * adottÁr[mealName] || 0;

        alert(`A(z) ${mealName} összesen ${osszÁr} euroba kerül ${mennyiseg} adag esetén.`);
        alert(`A(z) ${mealName} összesen ${osszKaloria} kalóriát tartalmaz ${mennyiseg} adag esetén.`);
    }
}

// Attach event listener to each button
document.querySelectorAll('input[type="button"]').forEach((button) => {
    button.addEventListener('click', kérdez);
});



//siszabályok kérdöiv
document.getElementById("myButton").addEventListener
("click", feldolgoz)
function feldolgoz() {
    console.log("meg sikerült hivni a függvényt")
    let pont = 0
    const a = document.getElementById("koteles").checked
    const c = document.getElementById("sebesseg").selectedIndex
    const d = document.getElementById("ki").value
    const e = document.getElementById("segits").checked
    const f = document.getElementById("stop").checked
    const g = document.getElementById("korulnez").checked
    console.log(g)
    const h = document.getElementById("fontossag").value

    if (a) {
        pont = pont + 1
        console.log("1.pont")
    }
    if (c == 0) {
        pont = pont + 1
        console.log("2.pont")
    }
    if (d == "senki" || d == "Senki") {
        pont = pont + 1
        console.log("3.pont")
    }
    if (e) {
        pont = pont + 1
        console.log("4.pont")
    }
    if (f) {
        pont = pont - 1
        console.log("4b. minusz pont")
    }
    if (g) {
        pont = pont + 1
        console.log("5.pont")
    }
    if (h == 5) {
        pont = pont + 1
        console.log("6.pont")
    }
    
    alert("A pontod: " + pont)
    if (pont == 6) {
        alert("Gratulálunk, ismered a síszabályokat!")
    }
}