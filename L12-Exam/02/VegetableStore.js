class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        /*
        {
            type: string,
            quantity: Number,
            price: Number
        }
        */
       this._price = 0;
       this._quantity = 0;

    }

    

    loadingVegetables(vegetables) {
        let template = {
            type: string,
            quantity: Number,
            price: Number
        }

        for (let vegetable = 0; vegetable < vegetables.length; vegetable++) {
            const currentVegetable = vegetables[vegetable];

            const currVegFields = {
                type: currentVegetable.split(` `)[0],
                quantity: currentVegetable.split(` `)[1],
                price: currentVegetable.split(` `)[2]
            }

            let flag = true;

            for (let vege = 0; vege < availableProducts.length; vege++) {
                const element = availableProduct[vege];
                
                if (currVegFields.type == element.type) {
                    flag = false;

                    element.quantity += currVegFields.quantity;

                    if (currVegFields.price > element.price) {
                        element.price = currVegFields.price;
                    }
                }

                
            }

            if(flag) {
                availableProducts.push(currVegFields);
            }
        }


    }

    buyingVegetables(selectedProduct) {

    }

    rottingVegetable(type, quantity) {

    }

    revision() {

    }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
