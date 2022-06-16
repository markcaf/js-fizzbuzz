// Dichiaro la variabile della row che sarà utilizzata come container 
// della funzione append per visualizzare gli elementi in html
const rowNumberWrapper = document.getElementById("row_number_wrapper");

// Creo un ciclo for per eseguire la stampa dei numeri da 1 a 100
for (let i = 1; i <= 100; i++ ){
    
    // Creo una variabile che crea un div vuoto
    const msBox = document.createElement("div");

    // Aggiungo al div vuoto le classi col-2 e ms_box
    msBox.classList.add("col-2", "ms_box");

    // Aggiungo le condizioni per multipli di 3 e 5
    if ((i % 3 == 0) && (i % 5 == 0)){
            console.log("FizzBuzz");
        } else if(i % 3 == 0){
                console.log("Fizz");
            } else if(i % 5 == 0){
                    console.log("Buzz");
                } else{
                        console.log(i);
                    }
}