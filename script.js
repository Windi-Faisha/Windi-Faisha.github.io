function bukaUndangan() {
    // Mulai musik jawa
    const bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {
        bgMusic.volume = 0.25;
        bgMusic.play().catch(function(error) {
            console.log("Musik tidak dapat diputar:", error);
        });
    }

    const cover = document.querySelector(".cover");
    const mainContent = document.querySelector("#main-content");

    cover.classList.add("fade-out");

    setTimeout(function() {
        cover.style.display = "none";
        mainContent.style.display = "block";

        mainContent.classList.remove("fade-in");
        void mainContent.offsetWidth;
        mainContent.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1300);
}
function kirimRSVP() {
    const nama= document.getElementById("nama-tamu").value;
    const kehadiran= document.getElementById("kehadiran").value;

    if (nama === "" || kehadiran === "") {
        alert("Mohon isi nama dan konfirmasi kehadiran terlebih dahulu ❤️");
        return;
    }
    const url ="https://script.google.com/macros/s/AKfycbwhstGMRQ55b9t2L5xo01Nl5DPRn6BR1wsghn7XyxNCJ5wMtsLX0-GjJ-fcsG-kEOySig/exec";

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nama: nama,
            kehadiran: kehadiran
        })
    })
    .then(response=> response.json())
    .then(data =>{
        if (data.status === "succes"){
            alert(
                "Terima kasih, " + nama +
                "! Konfirmasi kehadiran Anda telah diterima ❤️"
            );
            document.getElementById("nama-tamu").value = "";
            document.getElementById("kehadiran").value = "";
        }
    })
    .catch(error => {
        alert("Maaf, terjadi kesalahan. Silahkan coba lagi");
        console.error(error);
    });
}

function kirimUcapan() {
    const nama = document.getElementById("nama-ucapan").value;
    const pesan = document.getElementById("pesan-ucapan").value;

    if (nama === "" || pesan === "") {
        alert(
            "Mohon isi nama dan ucapan terlebih dahulu ❤️"
        );
        return;
    }
    const url = "https://script.google.com/macros/s/AKfycbwhstGMRQ55b9t2L5xo01Nl5DPRn6BR1wsghn7XyxNCJ5wMtsLX0-GjJ-fcsG-kEOySig/exec";
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            jenis: "ucapan",
            nama: nama,
            pesan: pesan
        })
    })
    .then(response => response.json())

    .then(data => {
        if (data.status === "success") {
            alert(
                "Terima kasih atas ucapan dan do'anya ❤️"
            );

            document.getElementById("nama-ucapan").value = "";
            document.getElementById("pesan-ucapan").value = "";
        }
    })

    .catch(error => {
        alert(
            "Maaf ucapan belum berhasil dikirim."
        );

        console.error(error);
    });
}
function tampilkanUcapan() {

    const url = "https://script.google.com/macros/s/AKfycbwhstGMRQ55b9t2L5xo01Nl5DPRn6BR1wsghn7XyxNCJ5wMtsLX0-GjJ-fcsG-kEOySig/exec";

    fetch(url)
        .then(response => response.json())
        .then(result => {

            const daftar = document.getElementById("daftar-ucapan");

            daftar.innerHTML = "";

            result.reverse().forEach(function(ucapan) {

                const card = document.createElement("div");

                card.className = "ucapan-card";

                card.innerHTML = `
                    <h4>${ucapan.nama}</h4>
                    <p>${ucapan.pesan}</p>
                `;

                daftar.appendChild(card);

            });

        })
        .catch(error => {
            console.error("Gagal mengambil ucapan:", error);
        });
        }
document.addEventListener("DOMContentLoaded", function () {
    tampilkanUcapan();
});
      // ========================================
// KIRIM HADIAH
// ========================================

function bukaGift() {
    const detail = document.getElementById("gift-detail");

    if(detail) {
        detail.classList.add("active");
    }
}
function tutupGift() {
    const detail = document.getElementById("gift-detail");

    if (detail) {
        detail.classList.remove("active");
    }
}

function salinRekening() {
    const nomorRekening = "014901065685504";

    navigator.clipboard.writeText(nomorRekening)
        .then(() => {
            alert("Nomor rekening berhasil disalin.");
        })
        .catch(() => {
            alert("Nomor rekening: " + nomorRekening);
        });
}  

function toggleMusic() {
    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (!bgMusic || !musicButton) return;

    if (bgMusic.paused) {
        bgMusic.play().then(function() {
            musicButton.classList.add("playing");
        }).catch(function(error) {
            console.log("Musik tidak dapat diputar:", error);
        });
    } else {
        bgMusic.pause();
        musicButton.classList.remove("playing");
    }
}


        


