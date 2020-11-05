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

window.onload = function() {

    if (document.title == 'Shopping Cart Page') {
        for (let i = 0; i < JSON.parse(sessionStorage.getItem('all orders')).length; i++) {

            //create section
            newSection=document.createElement("div");
            newSection.className="Shopping_Cart_Section";
            document.body.appendChild(newSection);

            //create image
            newSectionImage=document.createElement("img");
            newSectionImage.className="Shopping_Cart_Image_Div";
            newSectionImage.src="images/couch_pillow.png";
            newSection.appendChild(newSectionImage);

            //create Title
            shoppingCartText=document.createElement("p");
            shoppingCartText.className="Shopping_Cart_Text";
            newSection.appendChild(shoppingCartText);
            shoppingCartTextLink=document.createElement("a");
            shoppingCartTextLink.href="couchPillow.html";
            shoppingCartTextLink.innerHTML="Couch Pillows";
            shoppingCartText.appendChild(shoppingCartTextLink);

            //create Quantity Option
            quantityTitle=document.createElement("div");
            quantityTitle.className="Quantity_Option_Shopping_Cart";
            quantityTitle.innerHTML="Quantity";
            newSection.appendChild(quantityTitle);
            shoppingCartNumber=document.createElement("div");
            shoppingCartNumber.className="shopping_cart_number";
            newSection.appendChild(shoppingCartNumber);
            shoppingCartInput=document.createElement("input");
            shoppingCartInput.type="number";
            shoppingCartInput.value="0";
            shoppingCartNumber.appendChild(shoppingCartInput);

            //create Color Option
            colorTitle=document.createElement("div");
            colorTitle.className="Color_Option";
            colorTitle.innerHTML="Color";
            newSection.appendChild(colorTitle);
            colorSelected=document.createElement("p");
            colorSelected.className="Color_Selected";
            colorSelected.innerHTML="After-School Special";
            newSection.appendChild(colorSelected);
            colorImageDiv=document.createElement("div");
            colorImageDiv.className="Final_Order_Color";
            newSection.appendChild(colorImageDiv);
            colorImage=document.createElement("img");
            colorImage.className="Final_Order_Color_Image";
            colorImage.src="images/after_school_special.png";
            colorImageDiv.appendChild(colorImage);

            //create Edit Option
            editOption=document.createElement("img");
            editOption.className="Edit_Option";
            editOption.src="images/edit_option.png";
            newSection.appendChild(editOption);

            //create Material Option
            materialTitle=document.createElement("div");
            materialTitle.className="Material_Option";
            materialTitle.innerHTML="Material";
            newSection.appendChild(materialTitle);
            materialSelected=document.createElement("p");
            materialSelected.className="Material_Selected";
            materialSelected.innerHTML="Hypoallergenic Poly Blend";
            newSection.appendChild(materialSelected);
            materialImageDiv=document.createElement("div");
            materialImageDiv.className="Final_Order_Material";
            newSection.appendChild(materialImageDiv);
            materialImage=document.createElement("img");
            materialImage.className="Final_Order_Material_Image";
            materialImage.src="images/hypo_poly_blend.png";
            materialImageDiv.appendChild(materialImage);

            //create Remove Option
            removeOption=document.createElement("img");
            removeOption.className="Remove_Option";
            removeOption.src="images/remove_option.png";
            newSection.appendChild(removeOption);

    }
}


    
    if (document.title == 'Shopping Cart Page') { 
        document.getElementById('itemCount').innerHTML = JSON.stringify(previousQuantity);
    }
}








