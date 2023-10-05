/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  if (typeof l1 === "number" && typeof l2 === "number") {
    return l1 * l2;
  } else {
    console.log(
      "Controlla meglio! Uno dei due o entrambi numeri non è un numero"
    );
  }
}

console.log("Area: " + area(9, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) return (num1 + num2) * 3;
    else return num1 + num2;
  } else {
    console.log(
      "Controlla meglio! Uno dei due o entrambi numeri non è un numero"
    );
  }
}

console.log("crazySum: " + crazySum("yooo", 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numDiff) {
  if (typeof numDiff === "number") {
    if (numDiff <= 19) return Math.abs(numDiff - 19);
    else return Math.abs(numDiff - 19) * 3;
  }
  console.log(
    "Controlla meglio! Il numero che hai messo come parametro non è un numero"
  );
}
console.log("crazyDiff: " + crazyDiff(29));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if (typeof n === "number") {
    if ((n >= 20 && n <= 100) || n === 400) return true;
    else return false;
  } else {
    console.log(
      "Controlla meglio! Il numero che hai messo come parametro non è un numero"
    );
  }
}
console.log("boundary: " + boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(phrase) {
  let str = phrase.toLowerCase();
  if (str.startsWith("epicode")) {
    let words;
    words = str.split(" ");
    words[0] = words[0].toUpperCase();
    phrase = words.join(" ");
    console.log(words);
    return phrase;
  } else {
    return phrase;
  }
}

console.log("epify: " + epify("epIcoDE ci sta!"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num1) {
  if (typeof num1 === "number") {
    if (num1 % 3 === 0 || num1 % 7 === 0) return true;
    else return false;
  } else {
    console.log(
      "Controlla meglio! Il numero che hai messo come parametro non è un numero"
    );
  }
}
console.log("check3and7: " + check3and7(15));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  let words = str.split("");
  console.log(words);
  let reversedWords = [];
  for (let i = 0; i <= words.length; i++) {
    if (words[i] !== undefined) {
      reversedWords[i] = words[words.length - 1 - i];
    }
  }
  //   console.log(reversedWords);
  //   console.log(reversedWords.toString().length);
  reversedWords = reversedWords.join("");
  return reversedWords;
}

console.log("reverseString:" + reverseString("123456.78953"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(phrase) {
  let words = phrase.split(" ");
  console.log(words);
  for (let i = 0; i <= words.length; i++) {
    if (words[i] !== undefined) {
      // words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      //   console.log(words[i].charAt(0).toUpperCase());
      let capWord = words[i].charAt(0).toUpperCase();
      //   console.log(capWord);
      words[i] = capWord + words[i].slice(1);
    }
  }
  return words.join(" ");
}
console.log("upperFirst: " + upperFirst("Ciao come ti chiami?"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
  let cuttedString = str.slice(1, str.length - 1);
  return cuttedString;
}

console.log("cutString: " + cutString("Ciao come va?"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let array = [];
  if (typeof n === "number") {
    for (let i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * 10);
    }
    return array;
  } else return;
}
array = giveMeRandom(5);
console.log("giveMeRandom: " + array);
