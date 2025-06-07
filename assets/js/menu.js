function toggleMenu() {
    const menu = document.getElementById("sidenav");
    const overlay = document.getElementById("overlay");
    const hamburger = document.getElementById("hamburger");

    const isOpen = menu.style.left === "0px";

    if (isOpen) {
        menu.style.left = "-250px";
        overlay.style.display = "none";
        hamburger.classList.remove("active");
    } else {
        menu.style.left = "0px";
        overlay.style.display = "block";
        hamburger.classList.add("active");
    }
}

function closeMenu() {
    document.getElementById("sidenav").style.left = "-250px";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("hamburger").classList.remove("active");
}