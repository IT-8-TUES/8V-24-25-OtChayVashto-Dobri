/*Tsveta*/ function costItem(totalCost, count){
    if(count === 0){
        return 0;
    }
    const priceOne = totalCost / count;
    return{
        count: count,
        priceOne: priceOne.toFixed(2)
    };
}



/*Tsveta*/