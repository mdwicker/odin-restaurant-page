import heroImage from "./imgs/hero-image.jpg";

function em(text) {
    const emNode = document.createElement("em");
    emNode.textContent = text;
    return emNode;
}

function createHeader() {
    const headerNode = document.createElement("h1");
    headerNode.append(
        document.createTextNode("What about "),
        em("second"),
        document.createTextNode(" breakfast?")
    );
    return headerNode;
};

function createHeroImage() {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.classList.add("hero-image");
    img.alt = "An image of a full English breakfast";
    img.src = heroImage;

    const caption = document.createElement("figcaption");
    caption.append(
        document.createTextNode("You'll never find any ash on "),
        em("our"),
        document.createTextNode(" tomatoes!")
    );

    figure.append(img, caption);
    return figure;
}

function createCopytext() {
    const copy = document.createElement("p");
    copy.textContent = "You've had one, yes, but what about a second? Come grab something to tide you over between breakfast and elevensies. Whether you prefer mushrooms, taters, or nice crispy bacon, we've got it all!";
    return copy;
}

const home = (() => {
    const homeNode = document.createElement("div");
    homeNode.classList.add("home-content");

    homeNode.append(
        createHeader(),
        createHeroImage(),
        createCopytext(),
    );

    return homeNode;
})();

export default home;