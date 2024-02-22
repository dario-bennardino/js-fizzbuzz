// stampa numeri da 1 a 100 in console

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');

    } else if (i % 3 === 0) {
        console.log('Fizz');

    } else if (i % 5 === 0) {
        console.log('Buzz');

    } else {
        console.log(i);
    }
    
}

// Bonus

const containerQ = document.getElementById('container-q');

for(let i = 1; i <= 100; i++) {
    containerQ.innerHTML += `<div class="box"> ${i} </div>`
       
}