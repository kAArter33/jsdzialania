let a1 = parseInt(prompt("wprowadz liczbe pierwszą"));
let a2 = parseInt(prompt("Wprowadź liczbe drugą"));

function dzialanie(num1,num2) {

    let sum = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;

    if (sum < 0 || sub < 0 || mult < 0) {
        console.log("Wynik nieprawidłowy")
    }
    else {
        console.log(`wynik dodawania to: ${sum}`);
        console.log(`wynik odejmowania to: ${sub}`);
        console.log(`wynik mnożenia to: ${mult}`);
    }

}
dzialanie(a1,a2)