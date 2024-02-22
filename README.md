FizzBuzz
===
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()` oppure concatenando un template literal con innerHTML) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

## Svolgimento
con js utilizzo ciclo for impostando <br> for(let i=1; i<=100; i++) <br> in questo modo parte da 1 fin quando non arriva a 100 mi incrementa di uno. Poi faccio console log<br>
Devo assegnare delle condizioni <br>
if multipli di 3 e multiplo di 5 vero entrambe utilizzando and allora stampa Fizzbuzz, se invece else if multiplo di 3 con modulo di 3 uguale a zero allora stampa Fizz, se invece else if multiplo di 5 con modulo di 5 uguale a zero allora stampa Buzz, altrimenti else stampa numero ovvero i.

