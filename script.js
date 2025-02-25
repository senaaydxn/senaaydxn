// Mobil menü açma-kapama işlemi
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Navbar linkleri için smooth scroll ve aktif class ekleme
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfanın ani yukarı kaymasını engelle

            // Hedef section'a yumuşak kaydırma yap
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Header'dan dolayı biraz aşağıda başlasın
                behavior: "smooth"
            });

            // Aktif class'ını diğerlerinden kaldır
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
