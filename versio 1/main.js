function KysyKaverit() {
    let kaverit = []; 

    for (let i = 0; i < 10; i++) {
        let nimi = prompt("Anna kaverin nimi(" + (i+1) + "/10):");
        if (nimi !== null && nimi.trim() !== "") {
            kaverit.push(nimi);
        }
    }

    kaverit.sort();

    let lista = document.getElementById("kaverilista");
    lista.innerHTML = "";

    for (let i = 0; i < kaverit.length; i++) {
        lista.innerHTML += "<li>" + kaverit[i] + "</li>";
    }
}