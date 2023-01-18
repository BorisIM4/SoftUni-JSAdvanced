window.addEventListener('load', solve);

function solve() {
    //Взимам референции
    const productType = document.querySelector(`#type-product option`);
    const description = document.querySelector(`#description`);
    const clientName = document.querySelector(`#client-name`);
    const clientPhone = document.querySelector(`#client-phone`);

    const addBtn = document.querySelector(`#right form button`);
    
    const receivedOrders = document.querySelector(`#received-orders`);

    const completedOrders = document.querySelector(`#completed-orders`);


    addBtn.addEventListener(`click`, addOrder);

    //Добавям поръчка
    const startBtn = e(`button`, {class: `start-btn`}, `Start repair`);
    const finishBtn = e(`button`, {class: `finish-btn`}, `Finish repair`);
    function addOrder(event) {

        const typeOrder = productType.value;
        const descriptionOrder = description.value;
        const clientNameOrder = clientName.value;
        const clientPhoneOrder = clientPhone.value;

        const order = e(`div`, {class: `container`}, 
            e(`h2`, {}, `Product type for repair: ${typeOrder}`),
            e(`h3`, {}, `Client information: ${clientNameOrder}, ${clientPhoneOrder}`),
            e(`h4`, {}, `Description of the problem: ${descriptionOrder}`),
            startBtn,
            finishBtn
        );
    }

    startBtn.addEventListener(`click`, startRepair);


    receivedOrders.appendChild(order);


    function startRepair() {

    }

    ` -----------------------------`
    // let divEl = document.createElement('div');
    // divEl.classList.add('container');

    // let h2El = document.createElement('h2');
    // h2El.textContent = Product type for repair: ${productTypeEL.value};

    // let h3El = document.createElement('h3');
    // h3El.textContent = Clien information: ${clientNameEl.value}, ${clientPhoneEl.value}
    
    // let h4El = document.createElement('h4');
    // h4El.textContent = Description of problem: ${descriptionEl.value};

    // let startBtn = document.createElement('button');
    // let finishBtn = document.createElement('button');
    // startBtn.textContent = 'Start repair'
    // finishBtn.textContent = 'Finish repair'
    // startBtn.classList.add('start-btn');
    // finishBtn.classList.add('finish-btn');
    // finishBtn.disabled = true;


    // divEl.appendChild(h2El);
    // divEl.appendChild(h3El);
    // divEl.appendChild(h4El);
    // divEl.appendChild(startBtn);
    // divEl.appendChild(finishBtn);

    // recivedOrders.appendChild(divEl);
    ` -----------------------------`



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