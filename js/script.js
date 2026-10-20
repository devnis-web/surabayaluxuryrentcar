/* =========================================
   KONFIGURASI
========================================= */

const WHATSAPP_NUMBER = "6287701355888";

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
   DATA ARMADA
========================================= */

const armada = [
  // wedding 7 data
  {
    id: 1,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (1).jpeg",
  },
  {
    id: 2,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (2).jpeg",
  },
  {
    id: 3,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (3).jpeg",
  },
  {
    id: 4,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (4).jpeg",
  },
  {
    id: 5,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (5).jpeg",
  },
  {
    id: 6,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (6).jpeg",
  },
  {
    id: 7,
    nama: "Wedding Package",
    kategori: "wedding",
    label: "Wedding",
    deskripsi: "Kendaraan untuk pernikahan dan momen spesial Anda.",
    fasilitas: "Paket khusus",
    icon: "fa-solid fa-car",
    gambar: "img/wedding/car (7).jpeg",
  },
  // mobil mewah 14 data
  {
    id: 8,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (1).jpeg",
  },
  {
    id: 9,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (2).jpeg",
  },
  {
    id: 10,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (3).jpeg",
  },
  {
    id: 11,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (4).jpeg",
  },
  {
    id: 12,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (5).jpeg",
  },
  {
    id: 13,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (6).jpeg",
  },
  {
    id: 14,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (7).jpeg",
  },
  {
    id: 15,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (8).jpeg",
  },
  {
    id: 16,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (9).jpeg",
  },
  {
    id: 17,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (10).jpeg",
  },
  {
    id: 18,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (11).jpeg",
  },
  {
    id: 19,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (12).jpeg",
  },
  {
    id: 20,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (13).jpeg",
  },
  {
    id: 21,
    nama: "Mobil Mewah",
    kategori: "mewah",
    label: "Premium",
    deskripsi: "Pilihan kendaraan premium untuk bisnis dan acara eksklusif.",
    fasilitas: "Premium",
    icon: "fa-solid fa-star",
    gambar: "img/mewah/car (14).jpeg",
  },
  // regular 16 data
  {
    id: 22,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (1).jpeg",
  },
  {
    id: 23,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (2).jpeg",
  },
  {
    id: 24,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (3).jpeg",
  },
  {
    id: 25,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (4).jpeg",
  },
  {
    id: 26,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (5).jpeg",
  },
  {
    id: 27,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (6).jpeg",
  },
  {
    id: 28,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (7).jpeg",
  },
  {
    id: 29,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (8).jpeg",
  },
  {
    id: 30,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (9).jpeg",
  },
  {
    id: 31,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (10).jpeg",
  },
  {
    id: 32,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (11).jpeg",
  },
  {
    id: 33,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (12).jpeg",
  },
  {
    id: 34,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (13).jpeg",
  },
  {
    id: 35,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (14).jpeg",
  },
  {
    id: 36,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (15).jpeg",
  },
  {
    id: 37,
    nama: "Mobil Reguler",
    kategori: "reguler",
    label: "Reguler",
    deskripsi: "Kendaraan nyaman untuk keperluan harian dan perjalanan keluarga.",
    fasilitas: "Perjalanan harian",
    icon: "fa-solid fa-users",
    gambar: "img/reguler/car (16).jpeg",
  },
  // minibus 3 data
  {
    id: 38,
    nama: "Minibus",
    kategori: "minibus",
    label: "Minibus",
    deskripsi: "Cocok untuk rombongan keluarga, wisata, dan perjalanan kantor.",
    fasilitas: "Rombongan",
    icon: "fa-solid fa-people-group",
    gambar: "img/minibus/car (1).jpeg",
  },
  {
    id: 39,
    nama: "Minibus",
    kategori: "minibus",
    label: "Minibus",
    deskripsi: "Cocok untuk rombongan keluarga, wisata, dan perjalanan kantor.",
    fasilitas: "Rombongan",
    icon: "fa-solid fa-people-group",
    gambar: "img/minibus/car (2).jpeg",
  },
  {
    id: 40,
    nama: "Minibus",
    kategori: "minibus",
    label: "Minibus",
    deskripsi: "Cocok untuk rombongan keluarga, wisata, dan perjalanan kantor.",
    fasilitas: "Rombongan",
    icon: "fa-solid fa-people-group",
    gambar: "img/minibus/car (3).jpeg",
  },
  // big bus 2 data
  {
    id: 41,
    nama: "Big Bus",
    kategori: "big-bus",
    label: "Big Bus",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan besar.",
    fasilitas: "Rombongan besar",
    icon: "fa-solid fa-bus",
    gambar: "img/big-bus/car (1).jpeg",
  },
  {
    id: 42,
    nama: "Big Bus",
    kategori: "big-bus",
    label: "Big Bus",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan besar.",
    fasilitas: "Rombongan besar",
    icon: "fa-solid fa-bus",
    gambar: "img/big-bus/car (2).jpeg",
  },
  // medium bus 2 data
  {
    id: 43,
    nama: "Medium Bus",
    kategori: "medium-bus",
    label: "Medium Bus",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan sedang.",
    fasilitas: "Rombongan sedang",
    icon: "fa-solid fa-bus",
    gambar: "img/medium-bus/car (1).jpeg",
  },
  {
    id: 44,
    nama: "Medium Bus",
    kategori: "medium-bus",
    label: "Medium Bus",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan sedang.",
    fasilitas: "Rombongan sedang",
    icon: "fa-solid fa-bus",
    gambar: "img/medium-bus/car (2).jpeg",
  },
  // elf 2 data
  {
    id: 45,
    nama: "Elf",
    kategori: "elf",
    label: "Elf",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan kecil.",
    fasilitas: "Rombongan kecil",
    icon: "fa-solid fa-truck",
    gambar: "img/elf/car (1).jpeg",
  },
  {
    id: 46,
    nama: "Elf",
    kategori: "elf",
    label: "Elf",
    deskripsi: "Solusi transportasi untuk wisata, ziarah, acara, dan rombongan kecil.",
    fasilitas: "Rombongan kecil",
    icon: "fa-solid fa-truck",
    gambar: "img/elf/car (2).jpeg",
  },
];

/* =========================================
   STYLE KATEGORI
========================================= */

// Class ditulis lengkap agar mudah dikenali Tailwind.
const warnaKategori = {
  wedding: "bg-red-500",
  mewah: "bg-gray-900",
  reguler: "bg-blue-600",
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

            <p class="mt-2 text-sm leading-6 text-gray-600">
              ${mobil.deskripsi}
            </p>

            <div
              class="mt-4 flex items-center justify-between gap-3
                     border-t border-gray-100 pt-4"
            >
              <span class="text-sm text-gray-500">
                <i class="${mobil.icon} mr-1 text-red-500"></i>
                ${mobil.fasilitas}
              </span>

              <button
                type="button"
                data-rent-id="${mobil.id}"
                class="shrink-0 rounded-lg bg-red-500 px-4 py-2.5
                       text-sm font-semibold text-white
                       transition hover:bg-red-600"
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

      filter.classList.toggle("bg-red-500", aktif);
      filter.classList.toggle("text-white", aktif);
      filter.classList.toggle("border-red-500", aktif);

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

renderArmada(armada);
