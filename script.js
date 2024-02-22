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

// Bonus 1

const containerQ = document.getElementById('container-q');

for(let i = 1; i <= 100; i++) {
    containerQ.innerHTML += `<div class="box"> ${i} </div>`
    
       
}


// Bonus 2
const containerQC = document.getElementById('container-qc');
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        containerQC.innerHTML += `
            <div class="box mix">${i}</div>
        `
    } else if (i % 3 === 0){
        containerQC.innerHTML += `
            <div class="box tre">${i}</div> 
        `
    } else if (i % 5 === 0){
        containerQC.innerHTML += `
            <div class="box cinque">${i}</div> 
        `
    } else {
        containerQC.innerHTML += `
    <div class="box"> ${i} </div>
    `
    }

       
}