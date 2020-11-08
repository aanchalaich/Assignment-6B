
//store orders in local storage
orders = JSON.parse(localStorage.getItem('all orders')) || [];
localStorage.setItem('all orders', JSON.stringify(orders));

//store wishlist in local storage
wishlist = JSON.parse(localStorage.getItem('all wishlist')) || [];
localStorage.setItem('all wishlist', JSON.stringify(wishlist));

//lists and function to obtain and store product titles in local storage
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

//lists and function to obtain and store product colors in local storage
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

//lists and function to obtain and store product materials in local storage
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

//lists and function to obtain and store product quantities in local storage
currentQuantity = 1;

function changeQuantity(value) {
    currentQuantity = value;
}

//Submit Button
previousQuantity = JSON.parse(localStorage.getItem("finalQuantity")) || 0;

function submitOrder() {
    var orders = [];
    currentProduct = getProduct();
    let currentOrder = {
        finalProduct: currentProduct,
        finalColor: currentColor,
        finalMaterial: currentMaterial,
        finalQuantity: currentQuantity,
    }

    orders = JSON.parse(localStorage.getItem('all orders')) || [];

    orders.push(currentOrder);
    localStorage.setItem('all orders', JSON.stringify(orders));


    if (previousQuantity === null) {
        previousQuantity = 0;
    }
    previousQuantity += 1;
    localStorage.setItem("finalQuantity", previousQuantity);
    window.location.href = 'shoppingCart.html';


}

//Add to Wishlist Button
wishlistQuantity = JSON.parse(localStorage.getItem("wishlistQuantity")) || 0;

function addToWishlist() {
    var wishlist = [];
    currentProduct = getProduct();
    let currentWishlist = {
        wishlistProduct: currentProduct,
        wishlistColor: currentColor,
        wishlistMaterial: currentMaterial,
        wishlistQuantity: currentQuantity,
    }

    wishlist = JSON.parse(localStorage.getItem('all wishlist')) || [];

    wishlist.push(currentWishlist);
    localStorage.setItem('all wishlist', JSON.stringify(wishlist));


    if (wishlistQuantity === null) {
        wishlistQuantity = 0;
    }
    wishlistQuantity += 1;
    localStorage.setItem("wishlistQuantity", wishlistQuantity);
    window.location.href = 'wishlist.html';


}


//Lists to store and retrieve images
color_images = ["images/after_school_special.png", "images/cozy_denim.png", "images/rainy_day.png", "images/morning_haze.png"];
material_images = ["images/hypo_poly_blend.png", "images/memory_foam.png", "images/duck_down.png"];
product_images = ["images/couch_pillow.png", "images/floor_pouf_pillows.png", "images/bed_pillows.png", "images/round_pillows.png"];


//Onload function
window.onload = function () {

    //Create shopping cart page
    if (document.title == 'Shopping Cart Page') {
        for (let i = 0; i < orders.length; i++) {

            let finalColorImage = '';
            let finalMaterialImage = '';
            let finalProductImage = '';

            //create section
            newSection = document.createElement("div");
            newSection.className = "Shopping_Cart_Section";
            document.body.appendChild(newSection);

            //update image
            newSectionImage = document.createElement("img");
            newSectionImage.className = "Shopping_Cart_Image_Div";

            for (let j = 0; j < products.length; j++) {
                if (orders[i].finalProduct == products[j]) {
                    finalProductImage = product_images[j];
                }
            }

            newSectionImage.src = finalProductImage;
            newSection.appendChild(newSectionImage);

            //create Title
            shoppingCartText = document.createElement("p");
            shoppingCartText.className = "Shopping_Cart_Text";
            newSection.appendChild(shoppingCartText);
            shoppingCartTextLink = document.createElement("a");
            //shoppingCartTextLink.href="couchPillow.html";
            shoppingCartTextLink.innerHTML = orders[i].finalProduct;
            shoppingCartText.appendChild(shoppingCartTextLink);

            //create Quantity Option
            quantityTitle = document.createElement("div");
            quantityTitle.className = "Quantity_Option_Shopping_Cart";
            quantityTitle.innerHTML = "Quantity";
            newSection.appendChild(quantityTitle);
            shoppingCartNumber = document.createElement("div");
            shoppingCartNumber.className = "shopping_cart_number";
            newSection.appendChild(shoppingCartNumber);
            shoppingCartInput = document.createElement("input");
            shoppingCartInput.type = "number";
            shoppingCartInput.value = orders[i].finalQuantity;
            shoppingCartNumber.appendChild(shoppingCartInput);

            //create Color Option
            colorTitle = document.createElement("div");
            colorTitle.className = "Color_Option";
            colorTitle.innerHTML = "Color";
            newSection.appendChild(colorTitle);
            dropDiv = document.createElement("div");
            dropDiv.className = "dropdown";
            dropbutton = document.createElement("button");
            dropbutton.className = "dropbtn";
            drpdownContent = document.createElement("div");
            drpdownContent.className = "dropdown-content";
            dropbutton.innerHTML = orders[i].finalColor;

            for (let j = 0; j < colors.length; j++) {
                newA = document.createElement("a");
                newA.innerHTML = colors[j];
                drpdownContent.appendChild(newA);
            }

            //colorSelected = document.createElement("p");
            //colorSelected.className = "Color_Selected";
            //colorSelected.innerHTML = orders[i].finalColor;
            //newSection.appendChild(colorSelected);
            dropbutton.appendChild(drpdownContent);
            dropDiv.appendChild(dropbutton);
            newSection.appendChild(dropDiv);
            colorImageDiv = document.createElement("div");
            colorImageDiv.className = "Final_Order_Color";
            newSection.appendChild(colorImageDiv);

            //change Color Image
            for (let j = 0; j < colors.length; j++) {
                if (orders[i].finalColor == colors[j]) {
                    finalColorImage = color_images[j];
                }
            }

            colorImage = document.createElement("img");
            colorImage.className = "Final_Order_Color_Image";
            colorImage.src = finalColorImage;
            colorImageDiv.appendChild(colorImage);
            //dropbutton.onclick=editColorAfterSubmission;

            //create Edit Option
            editOption = document.createElement("img");
            editOption.className = "Edit_Option";
            editOption.src = "images/edit_option.png";
            newSection.appendChild(editOption);

            //create Material Option
            materialTitle = document.createElement("div");
            materialTitle.className = "Material_Option";
            materialTitle.innerHTML = "Material";
            newSection.appendChild(materialTitle);
            dropDiv = document.createElement("div");
            dropDiv.className = "dropdown";
            dropDiv.id = "materialButton";
            dropbutton = document.createElement("button");
            dropbutton.className = "dropbtn";
            drpdownContent = document.createElement("div");
            drpdownContent.className = "dropdown-content";
            dropbutton.innerHTML = orders[i].finalMaterial;

            for (let j = 0; j < materials.length; j++) {
                newA = document.createElement("a");
                newA.innerHTML = materials[j];
                drpdownContent.appendChild(newA);
            }
            //newSection.appendChild(materialTitle);
            //materialSelected = document.createElement("p");
            //materialSelected.className = "Material_Selected";
            //materialSelected.innerHTML = orders[i].finalMaterial;
            dropbutton.appendChild(drpdownContent);
            dropDiv.appendChild(dropbutton);
            newSection.appendChild(dropDiv);
            //newSection.appendChild(materialSelected);
            materialImageDiv = document.createElement("div");
            materialImageDiv.className = "Final_Order_Material";
            newSection.appendChild(materialImageDiv);

            //change Material Image

            for (let j = 0; j < materials.length; j++) {
                if (orders[i].finalMaterial == materials[j]) {
                    finalMaterialImage = material_images[j];
                }
            }

            materialImage = document.createElement("img");
            materialImage.className = "Final_Order_Material_Image";
            materialImage.src = finalMaterialImage;
            materialImageDiv.appendChild(materialImage);


            //create Remove Option
            removeButton = document.createElement("button");
            removeButton.className = "Remove_Button";

            newSection.appendChild(removeButton);
            removeOption = document.createElement("img");
            removeOption.className = "Remove_Option";
            removeOption.src = "images/remove_option.png";
            removeButton.appendChild(removeOption);

            //add item number
            itemNumber = document.createElement("p");
            itemNumber.className = "item_number";
            itemNumber.innerHTML = i + 1;
            //alert(itemNumber.innerHTML)
            newSection.appendChild(itemNumber);
            index_to_remove = itemNumber.innerHTML - 1;
            //alert(index_to_remove);
            removeButton.onclick = removeItem;



        }
    }

    //Create Wishlist Page
    if (document.title == 'Wishlist Page') {
        for (let i = 0; i < wishlist.length; i++) {

            let finalColorImage = '';
            let finalMaterialImage = '';
            let finalProductImage = '';

            //create section
            newSection = document.createElement("div");
            newSection.className = "Shopping_Cart_Section";
            document.body.appendChild(newSection);

            //update image
            newSectionImage = document.createElement("img");
            newSectionImage.className = "Shopping_Cart_Image_Div";

            for (let j = 0; j < products.length; j++) {
                if (wishlist[i].wishlistProduct == products[j]) {
                    finalProductImage = product_images[j];
                }
            }

            newSectionImage.src = finalProductImage;
            newSection.appendChild(newSectionImage);

            //create Title
            shoppingCartText = document.createElement("p");
            shoppingCartText.className = "Shopping_Cart_Text";
            newSection.appendChild(shoppingCartText);
            shoppingCartTextLink = document.createElement("a");
            //shoppingCartTextLink.href="couchPillow.html";
            shoppingCartTextLink.innerHTML = wishlist[i].wishlistProduct;
            shoppingCartText.appendChild(shoppingCartTextLink);

            //create Quantity Option
            quantityTitle = document.createElement("div");
            quantityTitle.className = "Quantity_Option_Shopping_Cart";
            quantityTitle.innerHTML = "Quantity";
            newSection.appendChild(quantityTitle);
            shoppingCartNumber = document.createElement("div");
            shoppingCartNumber.className = "shopping_cart_number";
            newSection.appendChild(shoppingCartNumber);
            shoppingCartInput = document.createElement("input");
            shoppingCartInput.type = "number";
            shoppingCartInput.value = wishlist[i].wishlistQuantity;
            shoppingCartNumber.appendChild(shoppingCartInput);

            //create Color Option
            colorTitle = document.createElement("div");
            colorTitle.className = "Color_Option";
            colorTitle.innerHTML = "Color";
            newSection.appendChild(colorTitle);
            dropDiv = document.createElement("div");
            dropDiv.className = "dropdown";
            dropbutton = document.createElement("button");
            dropbutton.className = "dropbtn";
            drpdownContent = document.createElement("div");
            drpdownContent.className = "dropdown-content";
            dropbutton.innerHTML = wishlist[i].wishlistColor;

            for (let j = 0; j < colors.length; j++) {
                newA = document.createElement("a");
                newA.innerHTML = colors[j];
                drpdownContent.appendChild(newA);
            }

            //colorSelected = document.createElement("p");
            //colorSelected.className = "Color_Selected";
            //colorSelected.innerHTML = orders[i].finalColor;
            //newSection.appendChild(colorSelected);
            dropbutton.appendChild(drpdownContent);
            dropDiv.appendChild(dropbutton);
            newSection.appendChild(dropDiv);
            colorImageDiv = document.createElement("div");
            colorImageDiv.className = "Final_Order_Color";
            newSection.appendChild(colorImageDiv);

            //change Color Image
            for (let j = 0; j < colors.length; j++) {
                if (wishlist[i].wishlistColor == colors[j]) {
                    finalColorImage = color_images[j];
                }
            }

            colorImage = document.createElement("img");
            colorImage.className = "Final_Order_Color_Image";
            colorImage.src = finalColorImage;
            colorImageDiv.appendChild(colorImage);

            //create Edit Option
            editOption = document.createElement("img");
            editOption.className = "Edit_Option";
            editOption.src = "images/edit_option.png";
            newSection.appendChild(editOption);

            //create Material Option
            materialTitle = document.createElement("div");
            materialTitle.className = "Material_Option";
            materialTitle.innerHTML = "Material";
            newSection.appendChild(materialTitle);
            dropDiv = document.createElement("div");
            dropDiv.className = "dropdown";
            dropDiv.id = "materialButton";
            dropbutton = document.createElement("button");
            dropbutton.className = "dropbtn";
            drpdownContent = document.createElement("div");
            drpdownContent.className = "dropdown-content";
            dropbutton.innerHTML = wishlist[i].wishlistMaterial;

            for (let j = 0; j < materials.length; j++) {
                newA = document.createElement("a");
                newA.innerHTML = materials[j];
                drpdownContent.appendChild(newA);
            }
            //newSection.appendChild(materialTitle);
            //materialSelected = document.createElement("p");
            //materialSelected.className = "Material_Selected";
            //materialSelected.innerHTML = orders[i].finalMaterial;
            dropbutton.appendChild(drpdownContent);
            dropDiv.appendChild(dropbutton);
            newSection.appendChild(dropDiv);
            materialImageDiv = document.createElement("div");
            materialImageDiv.className = "Final_Order_Material";
            newSection.appendChild(materialImageDiv);

            //change Material Image

            for (let j = 0; j < materials.length; j++) {
                if (wishlist[i].wishlistMaterial == materials[j]) {
                    finalMaterialImage = material_images[j];
                }
            }

            materialImage = document.createElement("img");
            materialImage.className = "Final_Order_Material_Image";
            materialImage.src = finalMaterialImage;
            materialImageDiv.appendChild(materialImage);


            //create Remove Option
            removeButton = document.createElement("button");
            removeButton.className = "Remove_Button";

            newSection.appendChild(removeButton);
            removeOption = document.createElement("img");
            removeOption.className = "Remove_Option";
            removeOption.src = "images/remove_option.png";
            removeButton.appendChild(removeOption);

            //add item number
            itemNumber = document.createElement("p");
            itemNumber.className = "item_number";
            itemNumber.innerHTML = i + 1;
            //alert(itemNumber.innerHTML)
            newSection.appendChild(itemNumber);
            index_to_remove = itemNumber.innerHTML - 1;
            //alert(index_to_remove);
            removeButton.onclick = removeItem;



        }
    }


    //store count of items on Wishlist Page
    if (document.title == 'Shopping Cart Page') {
        document.getElementById('itemCount').innerHTML = JSON.stringify(previousQuantity);
    }

    //store count of items on Shopping Cart Page
    if (document.title == 'Wishlist Page') {
        document.getElementById('itemCount').innerHTML = JSON.stringify(wishlistQuantity);
    }

}


//function to remove items from Shopping Cart and Wishlist Pages
function removeItem(index_to_remove) {

    if (document.title == "Shopping Cart Page") {
        orders = JSON.parse(localStorage.getItem('all orders')) || [];
        orders.splice(index_to_remove, 1);
        localStorage.setItem('all orders', JSON.stringify(orders));
        previousQuantity -= 1;
        localStorage.setItem("finalQuantity", previousQuantity);
        location.reload();
        return false;
    }

    if (document.title == "Wishlist Page") {
        wishlist = JSON.parse(localStorage.getItem('all wishlist')) || [];
        wishlist.splice(index_to_remove, 1);
        localStorage.setItem('all wishlist', JSON.stringify(wishlist));
        wishlistQuantity -= 1;
        localStorage.setItem("wishlistQuantity", wishlistQuantity);
        location.reload();
        return false;
    }
}










