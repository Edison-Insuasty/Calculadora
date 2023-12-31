/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/

// get the result element
let resultado = document.getElementById("resultado");

// Input numbers by key pressed
function input(num) {
    let number = resultado.value;
    resultado.value = number + num;
}

// Calculator logic
function calc() {
    if (resultado.value != "") {
        let result2 = resultado.value;
        resultado.value = eval(result2)
    } else {
        alert("Erro! Adicione valores válidos.")
    }
}

// Reset button
function reset() {
    resultado.value = "";
    resultado2.value = "";
}

// Del button
function del() {
    let result2 = resultado.value;
    resultado.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== TOGGLE THEME ===================
    ====================================================
*/

// All colors for differents themes
const theme = {
    defaul() {
        root.style.setProperty('--background', '#3a4764');
        root.style.setProperty('--background-dark', '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');

        root.style.setProperty('--key-color-top', '#ffffff');
        root.style.setProperty('--key-color-bottom', '#3a4764');
        root.style.setProperty('--key-background', '#eae3dc');
        root.style.setProperty('--key-background-dark', '#dfd9d2');
        root.style.setProperty('--key-shadow', '#b4a597');

        root.style.setProperty('--key-blue-background', '#637097');
        root.style.setProperty('--key-blue-shadow', '#404e72');

        root.style.setProperty('--key-red-background', '#d03f2f');
        root.style.setProperty('--key-red-shadow', '#93261a');
    },
    light() {
        root.style.setProperty('--background', '#e6e6e6');
        root.style.setProperty('--background-dark', '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');

        root.style.setProperty('--key-color-top', '#3d3d33');
        root.style.setProperty('--key-color-bottom', '#3d3d33');
        root.style.setProperty('--key-background', '#e5e4e0');
        root.style.setProperty('--key-background-dark', '#dfd9d2');
        root.style.setProperty('--key-shadow', '#b4a597');

        root.style.setProperty('--key-blue-background', '#388187');
        root.style.setProperty('--key-blue-shadow', '#1c6166');

        root.style.setProperty('--key-red-background', '#d03f2f');
        root.style.setProperty('--key-red-shadow', '#93261a');
    },
    dark() {
        root.style.setProperty('--background', '#17062a');
        root.style.setProperty('--background-dark', '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');

        root.style.setProperty('--key-color-top', '#f7de43');
        root.style.setProperty('--key-color-bottom', '#f7de43');
        root.style.setProperty('--key-background', '#331b4d');
        root.style.setProperty('--key-shadow', '#851c9c');

        root.style.setProperty('--key-blue-background', '#56077c');
        root.style.setProperty('--key-blue-shadow', '#851c9c');

        root.style.setProperty('--key-red-background', '#00decf');
        root.style.setProperty('--key-red-shadow', '#00decf');
    }
}

// Get the root element
var root = document.querySelector(':root');

// Checking the user themes preference
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// changing the theme with the results above
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if (lightThemeMq.matches) {
    document.getElementById('btnTheme').value = "2";
    theme.light();
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();
}

// Create a function for recive the value of range input
function myFunction_set(val) {
    // receiving the input type range value
    document.getElementById('btnTheme').value = val;

    // changing the theme with the results above
    if (val == 1) {
        theme.defaul();
    } else if (val == 2) {
        theme.light();
    } else {
        theme.dark();
    }

}

///////////

// let celsius = document.getElementById("celsius");
// let fahrenheit = document.getElementById("fahrenheit");

// function celToFar() {
//     let output = (parseFloat(celsius.value) * 9 / 5) + 32;
//     fahrenheit.value = parseFloat(output.toFixed(2));
// }

// function farToCel() {
//     let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
//     celsius.value = parseFloat(output.toFixed(2));
//     console.log(output);
// }


function convertir() {
    var celsius = document.getElementById("resultado").value;
    var fahrenheit = ((celsius * 9) / 5) + 32;
    resultado2.value = eval(fahrenheit)

    // alert(fahrenheit + "F");
}

function presion() {
    var pascal = document.getElementById("resultado").value;
    var bar = ((pascal) / 100000);
    resultado2.value = eval(bar)

    // alert(fahrenheit + "F");
}

function masa() {
    var kilo = document.getElementById("resultado").value;
    var gramo = ((kilo) * 1000);
    resultado2.value = eval(gramo)

    // alert(fahrenheit + "F");
}

function longitud() {
    var metro = document.getElementById("resultado").value;
    var centimetro = ((metro) * 100);
    resultado2.value = eval(centimetro)

    // alert(fahrenheit + "F");
}