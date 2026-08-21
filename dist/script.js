const navItems = document.querySelectorAll(".navbar-list li");
const paginaAtual = window.location.pathname.split("/").pop();
navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link && link.getAttribute("href")?.includes(paginaAtual ?? "")) {
        item.classList.add("active");
    }
});
export {};
//# sourceMappingURL=script.js.map