function dzialanie() {
    let a1 = parseInt(prompt("wprowadz liczbe pierwszą"));
    let a2 = parseInt(prompt("Wprowadź liczbe drugą"));
    let a3 = a1 + a2;
    let a4 = a1 - a2;
    let a5 = a1 * a2;

    if (a3 < 0 || a4 < 0 || a5 < 0) {
        console.log("Wynik nieprawidłowy")
    }
    else {
        a3 = a1 + a2;
        console.log(`wynik dodawania to: ${a3}`);
        a4 = a1 - a2;
        console.log(`wynik odejmowania to: ${a4}`);
        a5 = a1 * a2;
        console.log(`wynik mnożenia to: ${a5}`);
    }


}
dzialanie()