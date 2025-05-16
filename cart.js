 // Produkte im localStorage speichern
         function addToCart(productName, price) {
         let cart = JSON.parse(localStorage.getItem("cart")) || [];

         cart.push({ name: productName, price: price });
         localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();
        alert(`🛒 ${productName} wurde dem Warenkorb hinzugefügt.`);
       }

         // Warenkorb-Zähler im Header aktualisieren
        function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cart-count").innerText = cart.length;
       }

         // Beim Laden der Seite: Zähler anzeigen
         updateCartCount();