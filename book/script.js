
// Menu navigasi mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

// Menutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });
});

// Pencarian buku
const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "Semua";

function filterBooks() {
    const keyword = searchInput.value.toLowerCase();
    let visibleBooks = 0;

    bookCards.forEach(book => {
        const title = book.dataset.title.toLowerCase();
        const category = book.dataset.category;

        const matchTitle = title.includes(keyword);
        const matchCategory =
            selectedCategory === "Semua" ||
            category === selectedCategory;

        if (matchTitle && matchCategory) {
            book.style.display = "block";
            visibleBooks++;
        } else {
            book.style.display = "none";
        }
    });

    emptyMessage.hidden = visibleBooks !== 0;
}

function searchBooks() {
    filterBooks();
}

searchInput.addEventListener("input", filterBooks);

// Filter kategori
document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelector(".category.active")
            .classList.remove("active");

        this.classList.add("active");

        selectedCategory = this.dataset.category;

        filterBooks();
    });
});

// Tombol peminjaman
function borrowBook(bookName) {
    const confirmation = confirm(
        "Apakah kamu ingin meminjam buku " + bookName + "?"
    );

    if (confirmation) {
        alert(
            "Permintaan peminjaman buku " +
            bookName +
            " berhasil dibuat! Silakan hubungi admin Turin Book."
        );
    }
}
