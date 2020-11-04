// 1. Get the Product

//var orders = [];
orders=JSON.parse(sessionStorage.getItem('all orders')) || [];
sessionStorage.setItem('all orders',JSON.stringify(orders));

//final_order_list=sessionStorage.setItem("all orders", JSON.stringify(orders));

product_ids = ["Couch Pillow Page", "Floor Pouf Pillow Page", "Bed Pillow Page", "Round Pillow Page"];
products = ["Couch Pillow", "Floor Pouf Pillow", "Bed Pillow", "Round Pillow"];
currentProduct = "";

function getProduct() {
    for (let i = 0; i < product_ids.length; i++) {
        if (product_ids[i] == document.title) {
            currentProduct = products[i];
        }
    }
    return currentProduct;
}

// 2. Change the Color

color_ids = ['Customization_Option_One', 'Customization_Option_Two', 'Customization_Option_Three', 'Customization_Option_Four'];
colors = ["After-School Special", "Cozy Denim", "Rainy Day", "Morning Haze"];
currentColorSelection = 'Customization_Option_One';
currentColor = "After-School Special";

function changeColor(id) {

    let button = document.getElementById(id);

    button.style.background = "#99cccc";

    if (document.getElementById(currentColorSelection) != button) {

        document.getElementById(currentColorSelection).style.background = "white";

    }

    currentColorSelection = id;

    for (let i = 0; i < color_ids.length; i++) {
        if (color_ids[i] == id) {
            currentColor = colors[i];
        }
    }


}

// 3. Change the Material

material_ids = ['Customization_Option_Five', 'Customization_Option_Six', 'Customization_Option_Seven'];
materials = ["Hypoallergenic Poly Blend", "Memory Foam", "Duck Down"];
currentMaterialSelection = 'Customization_Option_Five';
currentMaterial = "Hypoallergenic Poly Blend";

function changeMaterial(id) {

    let button = document.getElementById(id);

    button.style.background = "#99cccc";

    if (document.getElementById(currentMaterialSelection) != button) {

        document.getElementById(currentMaterialSelection).style.background = "white";

    }

    currentMaterialSelection = id;

    for (let i = 0; i < material_ids.length; i++) {
        if (material_ids[i] == id) {
            currentMaterial = materials[i];
        }
    }

}

// 4. Change the Quantity
currentQuantity = 1;

function changeQuantity(value) {
    currentQuantity = value;
}

// 5. Submit Button

previousQuantity = JSON.parse(sessionStorage.getItem("finalQuantity")) || 0;

function submitOrder() {
    var orders = [];
    currentProduct = getProduct();
    let currentOrder = {
        finalProduct: currentProduct,
        finalColor: currentColor,
        finalMaterial: currentMaterial,
        finalQuantity: currentQuantity,
    }

    orders=JSON.parse(sessionStorage.getItem('all orders')) || [];
    
    orders.push(currentOrder);
    alert(orders);
    sessionStorage.setItem('all orders', JSON.stringify(orders));

    
    if (previousQuantity === null) {
        previousQuantity = 0;
    }
    previousQuantity += 1;
    sessionStorage.setItem("finalQuantity", previousQuantity);
    window.location.href = 'shoppingCart.html';

}

window.onload = function () {
    if (document.title == 'Shopping Cart Page') {
        document.getElementById('itemCount').innerHTML = JSON.stringify(previousQuantity);
    }
}





