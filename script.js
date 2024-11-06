let userResponse = prompt("Enter froyo flavors");

const froyo = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}

const orderArray = userResponse.split(",")

    
    for (let index = 1; index < orderArray.length; index++) {
        if (orderArray[index] == "vanilla") {
            froyo.vanilla ++
        }        
    }

    for (let index = 1; index < orderArray.length; index++) {
        if (orderArray[index] == "strawberry") {
            froyo.strawberry ++
        }        
    }

    for (let index = 1; index < orderArray.length; index++) {
        if (orderArray[index] == "coffee") {
            froyo.coffee ++
        }        
    }

    console.table(froyo);


