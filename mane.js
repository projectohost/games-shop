
const cart = [];
const list = document.getElementById("cart-items");
const total = document.getElementById("total");

function updateCart(){

    list.innerHTML = "";

    let sum = 0;

    cart.forEach((game,index)=>{

        sum += game.price;

        const li = document.createElement("li");

        li.innerHTML = `
            ${game.name} - ${game.price} грн
            <button onclick="removeItem(${index})">✖</button>
        `;

        list.appendChild(li);

    });

    total.textContent = sum;
}

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

document.querySelectorAll(".add-cart").forEach(button=>{

    button.addEventListener("click",()=>{

        cart.push({
            name:button.dataset.name,
            price:Number(button.dataset.price)
        });

        updateCart();

    });

});

document.getElementById("clear-cart").addEventListener("click",()=>{

    cart.length = 0;
    updateCart();

});