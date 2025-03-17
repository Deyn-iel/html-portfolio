function showLoading() {
    const buttons = document.querySelectorAll(".cta-button");
    buttons.forEach((button) => {
        button.innerHTML = "Loading...";
        button.disabled = true;
        setTimeout(() => {
            button.innerHTML = "Try AISU";
            button.disabled = false;
        }, 3000);
    });
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//toogle
document.querySelector(".menu-toggle").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});
