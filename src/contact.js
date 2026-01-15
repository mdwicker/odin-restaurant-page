function createSection(header, content) {
    const sectionNode = document.createElement("div");
    sectionNode.classList.add("contact-section");

    const headerNode = document.createElement("h2");
    headerNode.textContent = header;

    const contentNode = document.createElement("p");
    contentNode.textContent = content;

    sectionNode.append(headerNode, contentNode);

    return sectionNode;
}

function createPostscript(content) {
    const psNode = document.createElement("p");
    psNode.classList.add("postscript");
    psNode.textContent = content;
    return psNode;
}

const contact = (() => {
    const contactNode = document.createElement("div");
    contactNode.classList.add("contact-content");

    contactNode.append(
        createSection(
            "Where to find us",
            "Around the corner, a little ways down the new road and just past the secret gate. If all else fails, you can always try following your nose!"
        ),
        createSection(
            "How to reach us",
            "Just stop in and ask for us at the counter. If we're not around, leave a message with your local inkeeper."
        ),
        createSection(
            "When to visit",
            "Come on over any day between breakfast and elevensies."
        ),
        createPostscript("Return transportation by wheelbarrow available upon request.")
    );

    return contactNode;
})();

export default contact;