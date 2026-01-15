import weathertopImage from "./imgs/weathertop.jpg";
import ithilienImage from "./imgs/ithilien.jpg";
import mushroomsImage from "./imgs/mushrooms.jpg";
import carrotsImage from "./imgs/carrots.jpg";
import teaImage from "./imgs/tea.jpg";
import aleImage from "./imgs/ale.jpg";


function createSectionHeader(title) {
    const header = document.createElement("h2");
    header.textContent = title;
    return header;
}

function createMainsSection() {
    const mains = document.createElement("div");
    mains.classList.add("menu-section");

    mains.append(
        createMenuCard({
            title: "Weathertop Special",
            description: "Pan-fried tomatoes, sausages, and nice crisy bacon! Cooked over an open fire, and guaranteed ash-free.",
            img: weathertopImage,
            imgAlt: "A full English breakfast"
        }),
        createMenuCard({
            title: "Only in Ithilien",
            description: "Stewed rabbit with freshly foraged herbs. Comes with a side of taters to boil, mash, or stick in a stew.",
            img: ithilienImage,
            imgAlt: "A pot of simmering stew"
        })
    );
    return mains;
}

function createSidesSection() {
    const sides = document.createElement("div");
    sides.classList.add("menu-section");
    sides.append(
        createMenuCard({
            title: "Fried Mushrooms",
            description: "We don't take any shorcuts when preparing these delicious locally-sourced mushrooms!",
            img: mushroomsImage,
            imgAlt: "A pan of fried mushrooms"
        }),
        createMenuCard({
            title: "Discout Carrots",
            description: "They may have taken a bit of a tumble, but they're still the perfect snack for the hungry hiker.",
            img: carrotsImage,
            imgAlt: "A number of broken carrots"
        })
    );
    return sides;
}

function createBeveragesSection() {
    const sides = document.createElement("div");
    sides.classList.add("menu-section");
    sides.append(
        createMenuCard({
            title: "Just Tea",
            description: "For those who aren't in the mood for something a little stronger.",
            img: teaImage,
            imgAlt: "A cup of tea with milk"
        }),
        createMenuCard({
            title: "Ale",
            description: "Now comes in pints! Get your own today, even if you've already had a whole half.",
            img: aleImage,
            imgAlt: "A mug of ale"
        })
    );
    return sides;
}

function createMenuCard(info) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const description = document.createElement("div");
    description.classList.add("menu-card-description");

    const title = document.createElement("h3");
    title.textContent = info.title;

    const content = document.createElement("p");
    content.textContent = info.description;

    description.append(title, content);

    const image = document.createElement("img");
    image.src = info.img;
    image.alt = info.imgAlt;

    card.append(description, image);

    return card;
}


const menu = (() => {
    const menuNode = document.createElement("div");
    menuNode.classList.add("menu-content");

    menuNode.append(
        createSectionHeader("Mains"),
        createMainsSection(),

        createSectionHeader("Sides"),
        createSidesSection(),

        createSectionHeader("Beverages"),
        createBeveragesSection()
    );

    return menuNode;
})();

export default menu;

/* <div class="menu-content">
    <h1>Today's (Second) Breakfast Options</h1>
    <h2>Mains</h2>
    <div class="menu-section">
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Weathertop Special</h3>
                <p>Pan-fried tomatoes, sausages, and nice crisy bacon! Cooked over an open fire, and guaranteed ash-free.</p>
            </div>
            <img src="" alt="A full English breakfast">
        </div>
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Only in Ithilien</h3>
                <p>Stewed rabbit with freshly foraged herbs. Comes with a side of taters to boil, mash, or stick in a stew.</p>
            </div>
            <img src="" alt="A pot of simmering stew">
        </div>
    </div>

    <h2>Sides</h2>
    <div class="menu-section">
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Fried Mushrooms</h3>
                <p>We don't take any shorcuts when preparing these delicious locally-sourced mushrooms!</p>
            </div>
            <img src="" alt="A pan of fried mushrooms">
        </div>
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Discout Carrots</h3>
                <p>They may have taken a bit of a tumble, but they're still the perfect snack for the hungry hiker.</p>
            </div>
            <img src="" alt="A large carrot snapped in half">
        </div>
    </div>

    <h2>Beverages</h2>
    <div class="menu-section">
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Just Tea</h3>
                <p>For those who aren't in the mood for anything a little stronger.</p>
            </div>
            <img src="" alt="A cup of builders tea">
        </div>
        <div class="menu-card">
            <div class="menu-card-description">
                <h3>Ale</h3>
                <p>Now comes in pints! Get your own today, even if you've already had a whole half.</p>
            </div>
            <img src="" alt="A mug of ale">
        </div>
    </div>
</div> */