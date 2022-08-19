function contact() {
    document.body.style.background = "url(img/background.jpg)"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "1920px 1080px"
    const content = document.querySelector(".content");
    const mainContent = document.createElement("div");
    content.innerHTML = "";
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    mainContent.appendChild(contact);

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.innerHTML = "📞 123 456 789";
    contact.appendChild(phone);

    const contactAdress = document.createElement("p");
    contactAdress.classList.add("contactAdress");
    contactAdress.innerHTML = "🏠 325 S Camino Del Rio Durango, Colorado 81303";
    contact.appendChild(contactAdress);

    const contactImg = document.createElement("img");
    contactImg.src = "img/loc.png"
    contact.appendChild(contactImg);

    const footerDate = document.querySelector(".footerDate")
    footerDate.innerHTML = new Date().getFullYear();
    
    const footer = document.querySelector("footer")
    footer.style.marginTop = "295px"
}

export default contact