function mango(quantity, price){
    let freeMangoes = Math.floor(quantity / 3);
    let paidMangos = quantity - freeMangoes;
    return paidMangos * price; 
    }