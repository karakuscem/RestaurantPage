function homePage() {
    document.body.style.background = "url(/img/background.jpg)"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "1920px 1080px"
    const content = document.querySelector(".content");
    const mainContent = document.createElement("div");
    content.innerHTML = "";
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent);
    
    const div = document.createElement("div");
    div.classList.add("home");
    mainContent.appendChild(div);

    const homeTitle = document.createElement("h2");
    homeTitle.classList.add("homeHeader");
    homeTitle.innerHTML = "Best burger in town!";
    div.appendChild(homeTitle);

    const homeSmallWriting = document.createElement("p");
    homeSmallWriting.classList.add("homeSmallWriting");
    homeSmallWriting.innerHTML = "Made with love and passion!"
    div.appendChild(homeSmallWriting);

    const homeOrder = document.createElement("button");
    homeOrder.classList.add("homeOrder");
    homeOrder.innerHTML = "Order Now!";
    div.appendChild(homeOrder);

    const homeAdress = document.createElement("div");
    homeAdress.classList.add("homeAdress");
    div.appendChild(homeAdress);

    const adressItem1 = document.createElement("div");
    adressItem1.classList.add("adressItem");
    homeAdress.appendChild(adressItem1);

    const adressImg1 = document.createElement("div");
    adressImg1.classList.add("adressImg");
    adressItem1.appendChild(adressImg1);

    const icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-location-pin", "fa-lg");
    icon1.style.color = "rgb(160, 18, 42";
    adressImg1.appendChild(icon1);

    const adress = document.createElement("p");
    adress.innerHTML = "325 S Camino Del Rio Durango, Colorado 81303";
    adressItem1.appendChild(adress);

    const adressItem2 = document.createElement("div");
    adressItem2.classList.add("hours", "adressItem");
    homeAdress.appendChild(adressItem2)

    const adressImg2 = document.createElement("div")
    adressImg2.classList.add("adressImg");
    adressItem2.appendChild(adressImg2)

    const icon2 = document.createElement("i");
    icon2.style.color = "rgb(160, 18, 42"
    icon2.classList.add("fa-solid", "fa-clock", "fa-lg");
    adressImg2.appendChild(icon2);

    const firstHour = document.createElement("p");
    firstHour.classList.add("firstHour");
    firstHour.innerHTML = "Mon-Thurs: 8am-8pm";
    adressItem2.appendChild(firstHour);

    const secondHour = document.createElement("p");
    secondHour.classList.add("secondHour");
    secondHour.innerHTML = "Fri-Sun: 8am-11pm";
    adressItem2.appendChild(secondHour);

    const footerDate = document.querySelector(".footerDate")
    footerDate.innerHTML = new Date().getFullYear();
    const footer = document.querySelector("footer")
    footer.style.marginTop = "150px"
}

export default homePage