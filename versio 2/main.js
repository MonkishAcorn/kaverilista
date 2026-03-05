let kaverit = [];

function paivitalista() {
    const lista = document.getElementById("kaverilista");
    lista.innerHTML = "";

    for (let i = 0; i < kaverit.length; i++) {
        const li = document.createElement("li");
        li.textContent = kaverit[i];
        lista.appendChild(li);
    }
}

function KysyKaverit() {
    const input = document.getElementById("kaveriInput");
    const kaveri = input.value.trim();

    if (kaveri !== "") {
        kaverit.push(kaveri);
        input.value = "";
        paivitalista();
    }
}

function PoistaKaveri() {
    if (kaverit.length > 0) {
        kaverit.splice(kaverit.length - 1, 1);
        paivitalista();
    }
}

function JärjestäKaverit() {
    kaverit.sort();
    paivitalista();
}