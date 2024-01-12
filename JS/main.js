const row = document.getElementById('row')

//Genero numeri da 1 a 100
for(let i=1; i<=100; i++){
    console.log(i)

    let text='';

    if(i % 15 == 0){

        text='FizzBuzz';
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${text}</h3>
            </div>
        </div>
    
    `

    } else if(i % 3 == 0){

        text='Fizz';
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${text}</h3>
            </div>
        </div>
    
    `
    } else if(i % 5 == 0){

        text='Buzz';
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${text}</h3>
            </div>
        </div>
    
    `
    } else {
        
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${i}</h3>
            </div>
        </div>
    
    `
    }

     
    
    
    




}

