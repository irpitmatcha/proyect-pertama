const tips = [
    "Tambahkan area canvas agar konsep game block bisa langsung dimainkan.",
    "Pisahkan data level, skor, dan status permainan ke objek JavaScript terpisah.",
    "Aktifkan GitHub Pages supaya repo ini bisa jadi demo publik dengan cepat.",
    "Tambahkan screenshot proyek ke README agar halaman repositori terlihat lebih kuat."
];

const tipButton = document.getElementById("tipButton");
const tipBox = document.getElementById("tipBox");
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (tipButton && tipBox) {
    tipButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipBox.textContent = tips[randomIndex];
    });
}