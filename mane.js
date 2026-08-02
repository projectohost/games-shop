
// Масив товарів
const cart = [];

// Елементи
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

const cartPanel = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const cartBtn = document.querySelector(".cart-btn");
const closeBtn = document.querySelector(".close-cart");
const clearBtn = document.querySelector(".clear-cart");

// =========================
// Відкриття / закриття кошика
// =========================

cartBtn.addEventListener("click", () => {
    cartPanel.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
});

// =========================
// Оновлення кошика
// =========================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Кошик порожній</p>";
        totalPrice.textContent = "0 грн";
        return;
    }

    cart.forEach((game, index) => {

        total += game.price;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div class="cart-info">
                <h4>${game.name}</h4>
                <p>${game.price} грн</p>
            </div>

            <button class="remove" data-index="${index}">✖</button>
        `;

        cartItems.appendChild(item);

    });

    totalPrice.textContent = total + " грн";

    document.querySelectorAll(".remove").forEach(button => {

        button.addEventListener("click", () => {

            const index = button.dataset.index;

            cart.splice(index, 1);

            updateCart();

        });

    });

}

// =========================
// Додавання товару
// =========================

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        cart.push({

            name: button.dataset.name,
            price: Number(button.dataset.price)

        });

        updateCart();

    });

});

// =========================
// Очистити кошик
// =========================

clearBtn.addEventListener("click", () => {

    cart.length = 0;

    updateCart();

});

// Показати порожній кошик при запуску
updateCart();