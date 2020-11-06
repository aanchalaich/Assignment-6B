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
    sessionStorage.setItem('all orders', JSON.stringify(orders));

    
    if (previousQuantity === null) {
        previousQuantity = 0;
    }
    previousQuantity += 1;
    sessionStorage.setItem("finalQuantity", previousQuantity);
    window.location.href = 'shoppingCart.html';


}
color_images=["images/after_school_special.png","images/cozy_denim.png","images/rainy_day.png","images/morning_haze.png"];
material_images=["images/hypo_poly_blend.png","images/memory_foam.png","images/duck_down.png"];
product_images=["images/couch_pillow.png","images/floor_pouf_pillows.png","images/bed_pillows.png","images/round_pillows.png"];
window.onload = function() {

    if (document.title == 'Shopping Cart Page') {
        for (let i = 0; i < orders.length; i++) {

            let finalColorImage='';
            let finalMaterialImage='';
            let finalProductImage='';

            //create section
            newSection=document.createElement("div");
            newSection.className="Shopping_Cart_Section";
            document.body.appendChild(newSection);

            //update image
            newSectionImage=document.createElement("img");
            newSectionImage.className="Shopping_Cart_Image_Div";

            for (let j = 0; j < products.length; j++) {
                if (orders[i].finalProduct==products[j]){
                    finalProductImage=product_images[j];
                }
            }

            newSectionImage.src=finalProductImage;
            newSection.appendChild(newSectionImage);

            //create Title
            shoppingCartText=document.createElement("p");
            shoppingCartText.className="Shopping_Cart_Text";
            newSection.appendChild(shoppingCartText);
            shoppingCartTextLink=document.createElement("a");
            shoppingCartTextLink.href="couchPillow.html";
            shoppingCartTextLink.innerHTML=orders[i].finalProduct;
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
            shoppingCartInput.value=orders[i].finalQuantity;
            shoppingCartNumber.appendChild(shoppingCartInput);

            //create Color Option
            colorTitle=document.createElement("div");
            colorTitle.className="Color_Option";
            colorTitle.innerHTML="Color";
            newSection.appendChild(colorTitle);
            colorSelected=document.createElement("p");
            colorSelected.className="Color_Selected";
            colorSelected.innerHTML=orders[i].finalColor;
            newSection.appendChild(colorSelected);
            colorImageDiv=document.createElement("div");
            colorImageDiv.className="Final_Order_Color";
            newSection.appendChild(colorImageDiv);

            //change Color Image
            for (let j = 0; j < materials.length; j++) {
                if (orders[i].finalColor==colors[j]){
                    finalColorImage=color_images[j];
                }
            }

            colorImage=document.createElement("img");
            colorImage.className="Final_Order_Color_Image";
            colorImage.src=finalColorImage;
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
            materialSelected.innerHTML=orders[i].finalMaterial;
            newSection.appendChild(materialSelected);
            materialImageDiv=document.createElement("div");
            materialImageDiv.className="Final_Order_Material";
            newSection.appendChild(materialImageDiv);

            //change Material Image

            for (let j = 0; j < colors.length; j++) {
                if (orders[i].finalMaterial==materials[j]){
                    finalMaterialImage=material_images[j];
                }
            }

            materialImage=document.createElement("img");
            materialImage.className="Final_Order_Material_Image";
            materialImage.src=finalMaterialImage;
            materialImageDiv.appendChild(materialImage);
            

            //create Remove Option
            removeButton=document.createElement("button");
            removeButton.className="Remove_Button";
         
            newSection.appendChild(removeButton);
            removeOption=document.createElement("img");
            removeOption.className="Remove_Option";
            removeOption.src="images/remove_option.png";
            removeButton.appendChild(removeOption);

            //add item number
            itemNumber=document.createElement("p");
            itemNumber.className="item_number";
            itemNumber.innerHTML=i+1;
            //alert(itemNumber.innerHTML)
            newSection.appendChild(itemNumber);
            index_to_remove=itemNumber.innerHTML-1;
            //alert(index_to_remove);
            removeButton.onclick=removeItem;



    }
}


    
    if (document.title == 'Shopping Cart Page') { 
        document.getElementById('itemCount').innerHTML = JSON.stringify(previousQuantity);
    }
}



function removeItem(index_to_remove) {
    //alert(index_to_remove);
    orders=JSON.parse(sessionStorage.getItem('all orders')) || [];
    orders.splice(index_to_remove,1);
    sessionStorage.setItem('all orders', JSON.stringify(orders));
    previousQuantity-=1;
    sessionStorage.setItem("finalQuantity", previousQuantity);
    location.reload();
    return false;
}








