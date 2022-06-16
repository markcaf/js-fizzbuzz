// Creo un ciclo for per eseguire la stampa dei numeri da 1 a 100
for (let i = 1; i <= 100; i++ ){
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