import "./reset.css";
import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const container = document.getElementById("content");
const tabs = { home, menu, contact }

const NavController = ((container, tabs) => {
    const nav = document.querySelector("nav");
    const btns = document.querySelectorAll(".nav-btn");
    let activeTab = "home";

    refresh();

    function refresh() {
        for (const btn of btns) {
            if (activeTab == btn.id) {
                btn.classList.add("nav-btn-active");
                btn.classList.remove("nav-btn-inactive");
            } else {
                btn.classList.add("nav-btn-inactive");
                btn.classList.remove("nav-btn-active");
            }
        }

        container.replaceChildren(tabs[activeTab]);
    }

    nav.addEventListener("click", (e) => {
        if (!e.target.classList.contains("nav-btn")) return;
        if (e.target.id === activeTab) return;

        activeTab = e.target.id;
        refresh();
    });
})(container, tabs);
