function solve() {
    //get references to elements of interest
    //configure event lesteners
    const fields = document.querySelectorAll(`#container input`);
    const addBtn = document.querySelector(`#container button`);
    const petList = document.querySelector(`#adoption ul`);
    const adoptedList = document.querySelector(`#adopted ul`);

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],   
    }

    addBtn.addEventListener(`click`, addPet);

    // # Add new pet
    // Read input fields
    // Vallidate values
    // Create new list item
    // Configure event listener for newly created element
    function addPet(event) {
        // Винаги когато работим с форма,
        // трябва да изключим презареждането на страницата
        event.preventDefault();

        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();
    
        if(name == `` || input.age.value.trim() == `` 
                    || Number.isNaN(age) 
                    || kind == `` 
                    || owner == ``) {
            return;
        }

        const contactBtn = e(`button`, {}, `Contact with owner`);

        const pet = e(`li`, {}, 
            e(`p`, {},
                e(`strong`, {}, name),
                ` is a `,
                e(`strong`, {}, age),
                ` year old `,
                e(`strong`, {}, kind)
            ),
            e(`span`, {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener(`click`, contact);

        petList.appendChild(pet);

        // Array.from(fields).forEach(f => f.value = ``); - Това или долното чистят полетата
        input.name.value = ``;
        input.age.value = ``;
        input.kind.value = ``;
        input.owner.value = ``;

        // # Contact owner
        //Create confirmation div
        //Configure event listener foe new button
        //Replace existing button with confirmation div
        function contact(){
            const confirmInput = e(`input`, {placeholder: `Enter your names`});
            const confirmBtn = e(`button`, {}, `Yes! I take it!`);
            const confirmDiv = e(`div`, {},
                confirmInput,
                confirmBtn
            );
                                                 // adopt(confirmInput, pet) - само така изпозлвано
                                                 // е грешка, или с bind или с анонимна функция подаваме
                                                 // параметри на event listener
                                                 // () => adopt(confirmInput, pet) - или долното
            confirmBtn.addEventListener(`click`, adopt.bind(null, confirmInput, pet));

            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }

    //# Adopt a pet
    //Read and validate input
    //Create new button for checking
    //Configure event listener for new button
    //Replace confirmation div with new button
    //Change text content of Owner span
    //Move element to other list
    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if(newOwner == ``) {
            return;
        }

        const checkBtn = e(`button`, {}, `Checked`);
        checkBtn.addEventListener(`click`, check.bind(null, pet));

        pet.querySelector(`div`).remove();
        pet.appendChild(checkBtn);

        pet.querySelector(`span`).textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);


    }

    // # Checking of adopted pet
    // Remove Element from Dom
    function check(pet) {
        pet.remove();
    }

    function e(type, attr, ...content){
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
            
        }

        for (let item of content) {
            if(typeof item == `string` || typeof item == `number`) {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}