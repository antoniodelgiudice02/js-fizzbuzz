const row = document.getElementById('row')

//Genero numeri da 1 a 100
for(let i=1; i<=100; i++){
    console.log(i)

    let fizz='';

    if(i % 3 == 0){
        fizz='fizz';
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${fizz}</h3>
            </div>
        </div>
    
    `
    } else {
        row.innerHTML+=`

        <div class="col-3 g-3">
            <div class="card p-3 text-center">
                <h3>${i} ${fizz}</h3>
            </div>
        </div>
    
    `

    }
    




}

