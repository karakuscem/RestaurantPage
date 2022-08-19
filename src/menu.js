function menu() {
    document.body.style.background = "var(--bg-color)";
    const content = document.querySelector(".content");
    const mainContent = document.createElement("div");
    content.innerHTML = "";
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent);
    const menu = document.createElement("div");
    menu.classList.add("menu");
    mainContent.appendChild(menu);
    const footerDate = document.querySelector(".footerDate")
    footerDate.innerHTML = new Date().getFullYear();
    const footer = document.querySelector("footer")
    footer.style.marginTop = "150px"

    const menuHeaders = ["Steakhouse Burger Menu", "Double Texas Smokehouse Burger Menu",
     "Chicken Barbecue Deluxe Burger Menu", "Texas Smokehouse Burger Menu", 
     "Triple Whopper Menu", "Whopper Menu"]

    const menuPrices = ["$3.50", "$4.50", "$2.50", "$4.50", "$5.50", "$3"]

    const menuDescs = [
        "Huge Steakhouse meat, special sauce, cheddar cheese, tomatoes, mayonnaise, lettuce and crispy coated onions are a flavor that will challenge your patience. Enjoy the BK Steakhouse Burger® Menu as you wish, with delicious fries and a drink!",
        "A delicious choice with 2 layers of Whopper® meat, smoked meat, barbecue sauce, cheddar cheese and crispy coated onions. Enjoy the Double Texas Smokehouse Burger® Menu with delicious fries and a drink the way you want!",
        "Enjoy the flavor alternative of Burger King with chicken burger meat, small sesame sandwich bread, cheddar cheese, barbecue sauce and crispy coated onions, along with delicious french fries and a drink as you wish!",
        "A delicious choice with Whopper® meat, smoked meat, cheddar cheese, barbecue sauce and crispy coated onions. delicious potatoes Enjoy the Texas Smokehouse Burger® Menu with fries and a drink the way you want!",
        "A delicious selection of 3 Whopper® meats, large sesame sandwich buns, pickled cucumbers, ketchup, mayonnaise, cucumber salad, tomatoes and onions. Enjoy the Triple Whopper® Menu with delicious fries and a drink your way!",
        "A Burger King® classic with whopper® meat, large sesame buns, pickled cucumbers, ketchup, mayonnaise, chopped lettuce, tomato and onion. Enjoy the Whopper® Menu with delicious fries and a drink the way you want!"
    ]

    for (let i = 0; i < 6; i++) {
        
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem", `${i}`);
        menu.appendChild(menuItem);

        const img = document.createElement("div");
        img.classList.add("img");
        menuItem.appendChild(img);

        const image = document.createElement("img");
        image.src = `../img/${i}.png`;
        img.appendChild(image);

        const menuContent = document.createElement("div")
        menuContent.classList.add("menuContent")
        menuItem.appendChild(menuContent);

        const menuTop = document.createElement("div");
        menuTop.classList.add("menuTop");
        menuContent.appendChild(menuTop);

        const menuHeader = document.createElement("h3");
        menuHeader.classList.add("menuHeader");
        menuHeader.innerHTML = menuHeaders[i];
        menuTop.appendChild(menuHeader);

        const menuPrice = document.createElement("h3");
        menuPrice.classList.add("menuPrice");
        menuPrice.innerHTML = menuPrices[i];
        menuTop.appendChild(menuPrice);

        const menuBot = document.createElement("div");
        menuBot.classList.add("menuBot");
        menuContent.appendChild(menuBot);

        const menuDesc = document.createElement("p");
        menuDesc.classList.add("menuDesc");
        menuDesc.innerHTML = menuDescs[i];
        menuBot.appendChild(menuDesc);
    }
}

export default menu