document.addEventListener('DOMContentLoaded', function () {
    // Mise à jour du prix total
    function updateTotal() {
        const totalPriceEl = document.getElementById('total-price');
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(function (item) {
            const price = parseFloat(item.querySelector('.item-price').textContent);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceEl.textContent = total;
    }

    // Gérer l'augmentation et la diminution des quantités
    document.querySelectorAll('.increase-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const quantityEl = this.previousElementSibling;
            let quantity = parseInt(quantityEl.textContent);
            quantityEl.textContent = ++quantity;
            updateTotal();
        });
    });

    document.querySelectorAll('.decrease-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const quantityEl = this.nextElementSibling;
            let quantity = parseInt(quantityEl.textContent);
            if (quantity > 1) {
                quantityEl.textContent = --quantity;
                updateTotal();
            }
        });
    });

    // Supprimer un article
    document.querySelectorAll('.delete-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateTotal();
        });
    });

    // Aimer un article
    document.querySelectorAll('.like-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    });

    // Initialiser le prix total
    updateTotal();
});
