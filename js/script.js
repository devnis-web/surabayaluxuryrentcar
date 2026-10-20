/* =========================================
   KONFIGURASI
========================================= */

const WHATSAPP_NUMBER = "628822566888";

/* =========================================
   NAVBAR MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isHidden = navMenu.classList.toggle("hidden");

    menuButton.setAttribute("aria-expanded", String(!isHidden));
    menuButton.innerHTML = isHidden ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* =========================================
   STYLE KATEGORI
========================================= */

// Class ditulis lengkap agar mudah dikenali Tailwind.
const warnaKategori = {
  wedding: "bg-blue-500",
  mewah: "bg-gray-900",
  reguler: "bg-green-600",
  minibus: "bg-emerald-600",
  "big-bus": "bg-purple-600",
  "medium-bus": "bg-indigo-600",
  elf: "bg-amber-600",
};

/* =========================================
   RENDER KARTU ARMADA
========================================= */

const fleetGrid = document.getElementById("fleetGrid");
const fleetEmpty = document.getElementById("fleetEmpty");

function renderArmada(data) {
  if (!fleetGrid) return;

  fleetGrid.innerHTML = data
    .map(
      (mobil) => `
      <article
        class="fleet-card overflow-hidden rounded-xl bg-white shadow-md
               transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="relative overflow-hidden">
          <img
            src="${mobil.gambar}"
            alt="${mobil.nama}"
            loading="lazy"
            data-lightbox="${mobil.gambar}"
            class="fleet-image h-56 w-full cursor-zoom-in object-cover
                   transition duration-500 hover:scale-105"
          />

          <span
            class="absolute left-4 top-4 rounded-full
                   ${warnaKategori[mobil.kategori]}
                   px-3 py-1 text-xs font-bold text-white"
          >
            ${mobil.label}
          </span>
        </div>

        <div class="p-5">
          <h3 class="text-lg font-bold text-gray-900">
            ${mobil.nama}
          </h3>

          <p class="mt-1 text-sm font-medium text-gray-500">
            ${mobil.kendaraan}
          </p>

          <p class="mt-2 text-sm leading-6 text-gray-600">
            ${mobil.deskripsi}
          </p>

          <div
            class="mt-4 flex items-center justify-between gap-3
                   border-t border-gray-100 pt-4"
          >
            <span class="text-sm text-gray-500">
              <i class="${mobil.icon} mr-1 text-blue-600"></i>
              ${mobil.fasilitas}
            </span>

            <button
              type="button"
              data-rent-id="${mobil.id}"
              class="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5
                     text-sm font-semibold text-white
                     transition hover:bg-blue-700"
            >
              Sewa Sekarang
            </button>
          </div>
        </div>
      </article>
    `,
    )
    .join("");

  if (fleetEmpty) {
    fleetEmpty.classList.toggle("hidden", data.length > 0);
  }
}

/* =========================================
   FILTER KATEGORI ARMADA
========================================= */

const fleetFilters = document.querySelectorAll(".fleet-filter");

function filterArmada(kategori) {
  let hasil;

  if (kategori === "all") {
    // Acak data armada
    hasil = [...armada].sort(() => Math.random() - 0.5);

    // Ambil maksimal 6 data
    hasil = hasil.slice(0, 6);
  } else {
    // Tampilkan semua data sesuai kategori
    hasil = armada.filter((mobil) => mobil.kategori === kategori);
  }

  renderArmada(hasil);
}

fleetFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const kategori = button.dataset.filter;

    // Ubah tampilan tombol aktif.
    fleetFilters.forEach((filter) => {
      const aktif = filter === button;

      filter.classList.toggle("bg-blue-500", aktif);
      filter.classList.toggle("text-white", aktif);
      filter.classList.toggle("border-blue-500", aktif);

      filter.classList.toggle("bg-white", !aktif);
      filter.classList.toggle("text-gray-700", !aktif);
      filter.classList.toggle("border-gray-300", !aktif);
    });

    filterArmada(kategori);
  });
});

/* =========================================
   LINK WHATSAPP
========================================= */

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================================
   TOMBOL SEWA ARMADA
========================================= */

// Event delegation: tetap berfungsi setelah filter berubah.
if (fleetGrid) {
  fleetGrid.addEventListener("click", (event) => {
    const tombol = event.target.closest("[data-rent-id]");

    if (!tombol) return;

    const id = Number(tombol.dataset.rentId);
    const mobil = armada.find((item) => item.id === id);

    if (!mobil) return;

    const pesan =
      `Halo Surabaya Luxury Trans, saya ingin menyewa kendaraan.\n\n` +
      `Nama kendaraan: ${mobil.kendaraan}\n` +
      `Kategori: ${mobil.label}\n` +
      `Tanggal sewa: (mohon info)\n` +
      `Durasi sewa: (mohon info)\n\n` +
      `Mohon informasi harga dan ketersediaan kendaraan. Terima kasih.`;

    window.open(createWhatsAppLink(pesan), "_blank", "noopener,noreferrer");
  });
}

/* =========================================
   LIGHTBOX GAMBAR ARMADA
========================================= */

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

function openLightbox(imageSrc, imageAlt) {
  if (!imageLightbox || !lightboxImage) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightboxCaption.textContent = imageAlt;

  imageLightbox.classList.remove("hidden");
  imageLightbox.classList.add("flex");

  document.body.classList.add("overflow-hidden");
  closeLightbox.focus();
}

function hideLightbox() {
  if (!imageLightbox) return;

  imageLightbox.classList.add("hidden");
  imageLightbox.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");

  lightboxImage.src = "";
}

// Event delegation: berfungsi untuk semua gambar hasil render.
if (fleetGrid) {
  fleetGrid.addEventListener("click", (event) => {
    const image = event.target.closest("[data-lightbox]");

    if (!image) return;

    openLightbox(image.dataset.lightbox, image.alt);
  });
}

// Tutup melalui tombol X.
closeLightbox?.addEventListener("click", hideLightbox);

// Tutup ketika area luar gambar diklik.
imageLightbox?.addEventListener("click", (event) => {
  if (event.target === imageLightbox || event.target === lightboxCaption) {
    hideLightbox();
  }
});

// Tutup dengan tombol Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox && !imageLightbox.classList.contains("hidden")) {
    hideLightbox();
  }
});

/* =========================================
   TOMBOL KONSULTASI WHATSAPP
========================================= */

const fleetConsult = document.getElementById("fleetConsult");

if (fleetConsult) {
  const pesanKonsultasi = "Halo Surabaya Luxury Trans, saya ingin konsultasi mengenai pilihan armada dan harga sewa.";

  fleetConsult.href = createWhatsAppLink(pesanKonsultasi);
}

/* =========================================
   TAHUN OTOMATIS DI FOOTER
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   TAMPILKAN SEMUA ARMADA
========================================= */

renderArmada(armada.slice(0, 6)); // Tampilkan 6 armada pertama secara acak
