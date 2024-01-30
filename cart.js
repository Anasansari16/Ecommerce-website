//Add this line to include the cart.js file 
<script src="cart.js"></script>
// cart.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle removing an item from the cart
    function removeItem(event) {
        event.preventDefault();
        let row = event.target.closest('tr');
        row.remove();
        updateCartTotal();
    }

    // Function to handle applying a coupon
    function applyCoupon() {
        // Get the value entered in the coupon input
        let couponInput = document.getElementById('coupon-input');
        let couponValue = couponInput.value;

        // Perform coupon validation or processing as needed

        // For now, just show an alert with the entered coupon value
        alert('Coupon Applied: ' + couponValue);
    }

    // Function to handle updating the cart total
    function updateCartTotal() {
        // Calculate the new cart total based on the item subtotals
        let subtotals = document.querySelectorAll('#cart tbody tr td:nth-child(6)');
        let cartTotal = 0;

        subtotals.forEach(subtotal => {
            cartTotal += parseFloat(subtotal.textContent.replace('Rs.', '').replace(',', ''));
        });

        // Update the displayed cart total
        document.getElementById('cart-total').textContent = 'Rs.' + cartTotal.toFixed(2);
    }

    // Attach event listeners
    document.getElementById('cart').addEventListener('click', function (event) {
        // Check if the clicked element has the class 'remove-item'
        if (event.target.classList.contains('remove-item')) {
            removeItem(event);
        }
    });

    // Attach event listener for the 'Apply Coupon' button
    document.getElementById('apply-coupon-btn').addEventListener('click', applyCoupon);

    // Attach event listener for the 'Proceed to Checkout' button
    document.getElementById('proceed-to-checkout-btn').addEventListener('click', function () {
        alert('Proceeding to Checkout. Implement your checkout logic here.');
    });
});
