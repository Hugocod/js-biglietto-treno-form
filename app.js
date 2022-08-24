/* Attacco un event listener al form. Quando il submit è cliccato i valori inseriti dall'utente vengono assegnati alle variabili precedentemente dichiarate. */
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    /* prendo i valori inseriti dall'utente */
    let nome = form.elements["nome"].value;
    let cognome = form.elements["cognome"].value;
    let anni = form.elements["anni"].value;
    let chilometri = form.elements["chilometri"].value;

    /* Calcolo del prezzo del biglietto */
    let prezzoPieno = 0.21 * chilometri;
    let prezzoFinale;

    /* Calcolo del nuovo prezzo scontato in base all'età dell'utente e lo mostro nell'html */
    if (anni < 18) {
        /*  under 18 */
        let prezzoScontato = (prezzoPieno / 100) * 80;
        prezzoFinale = prezzoScontato.toFixed(2);
    } else if (anni > 65) {
        /* over 65 */
        let prezzoScontato = (prezzoPieno / 100) * 60;
        prezzoFinale = prezzoScontato.toFixed(2);
    } else {
        /* 18-65 */
        prezzoFinale = prezzoPieno;
    }

    /* Stampo i valori ottenuti nell'html */
    document.getElementById("wrapper").innerHTML = `
    <div id="biglietto">
    
    <div>
    <h6>NOME</h6>
    <h3 >${nome}</h3>
    </div>

    <div>
    <h6>COGNOME</h6>
    <h3 >${cognome}</h3>
    </div>

    <div>
    <h6>PREZZO</h6>
    <h3 >${prezzoFinale}€</h3>
    </div>

    </div>

    `;
});
