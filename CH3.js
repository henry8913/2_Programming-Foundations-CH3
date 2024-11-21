//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numeroa = 5;
let numerob = 19;

if (numeroa > numerob) {
    console.log("Il numero maggiore è:", numeroa);
}
if (numerob > numeroa) {
    console.log("Il numero maggiore è:", numerob);
}

//__________________//__________________//__________________//__________________//__________________//__________________//

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 4;

if (num < 5) {
  console.log("Tiny");
} 
if (num < 10) {
  console.log("Small");
} 
if (num < 15) {
  console.log("Medium");
} 
if (num < 20) {
  console.log("Large");
} 
if (num >= 20) {
  console.log("Huge");
}

//__________________//__________________//__________________//__________________//__________________//__________________//

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let f = 0; f <= 10; f++) {
  if (f === 3 || f === 8) {
    continue;
  }
  console.log(f);
}

//__________________//__________________//__________________//__________________//__________________//__________________//

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let numero = 0;

do {
    if (numero % 2 === 0) {
        console.log(numero + " è Pari");
    } else {
        console.log(numero + " è Dispari");
    }
    numero++;
} while (numero <= 15);

//__________________//__________________//__________________//__________________//__________________//__________________//

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let verificaa = 160
let verificab = 152

if (verificaa - verificab === 8 || verificab - verificaa === 8 || verificaa + verificab === 8 || verificab + verificaa === 8) {
    console.log("VERIFICATO")
  }
else console.log("Err")

//__________________//__________________//__________________//__________________//__________________//__________________//

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 16;
let spedizione = 10;
let spedizioneFree = "FREE";

if (totalShoppingCart <= 50)
  console.log("Costo spedizione è " + spedizione + "€")
else console.log("Costo spedizione è " + spedizioneFree);

//__________________//__________________//__________________//__________________//__________________//__________________//

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let prodotto = 51;
let BlackFriday = prodotto * 0.8;
let totalShoppingCartBF = 0 + BlackFriday;
let spedizioneBF = 10;
let spedizioneFreeBF = "FREE";

if (totalShoppingCartBF <= 50)
  console.log("Costo spedizione è " + spedizioneBF + "€")
else console.log("Costo spedizione è " + spedizioneFreeBF);

//__________________//__________________//__________________//__________________//__________________//__________________//

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let gender
let male = true
let female = false

if (gender = male)
  console.log(male)
else console.log(female)

//__________________//__________________//__________________//__________________//__________________//__________________//

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for ( let Multipli = 0; Multipli <= 100; Multipli++) {
  let elenco = Multipli
  let Multipli3 = Multipli % 3 === 0
  let Multipli5 = Multipli % 5 === 0
  if (Multipli3 && Multipli5) {
    elenco = "FizzBuzz"
  }
  else if (Multipli3) {
    elenco = "Fizz"
  }
  else if (Multipli5) {
    elenco = "Buzz"
  }
  console.log(elenco)
}

//__________________//__________________//__________________//__________________//__________________//__________________//