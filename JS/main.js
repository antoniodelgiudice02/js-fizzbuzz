const row = document.getElementById('row')

//Genero numeri da 1 a 100
for(let i=1; i<=100; i++){
    console.log(i)

    let text= '';

    if(i % 15 == 0){

        text='FizzBuzz';

    } else if(i % 3 == 0){

        text='Fizz';

    } else if(i % 5 == 0){

        text='Buzz';
    
    } else {
    
    text=i;

    }

    
    row.innerHTML+=`

    <div class="col-3 g-3">
        <div class="card p-3 text-center">
            <h3>${text}</h3>
        </div>
    </div>

`

     
    
    
    




}

