const CONFIG = {
    // Foto background untuk layar awal (Gate Screen)
    gateBackground: "png/10.jpeg",
    
    // Foto background untuk tampilan desktop (opsional, berada di belakang layar HP)
    desktopBackground: "png/10.jpeg",

    // Daftar lagu dan foto-fotonya
    tracks: {
        1: {
            title: "A Thousand Years", // Judul (sudah dihilangkan di tampilan, tapi tetap bisa disimpan datanya)
            artist: "Christina Perri", // Artis
            bg: "png/10.jpeg",
            // Isi dengan Video ID YouTube resmi. Contoh: https://www.youtube.com/watch?v=rtOvBOTyX00 -> "rtOvBOTyX00"
            youtubeId: "rtOvBOTyX00",
            // Detik berapa video mulai diputar (posisi reff). Sesuaikan dengan lagu aslinya.
            startSeconds: 50,
            // Tiap baris muncul di detik ke-berapa SEJAK startSeconds (bukan detik absolut video).
            // Atur "time" supaya pas dengan mood/ketukan reff di detik tsb.
            lines: [
                { time: 0, text: "Aku masih inget waktu pertama kali kita ngobrol." },
                { time: 4, text: "Nggak ada yang istimewa sebenarnya, cuma basa-basi yang kadang garing," },
                { time: 8, text: "tapi entah kenapa rasanya beda — kayak ada yang namanya kamu lagi, pelan-pelan nggeser hari-hariku." },
                { time: 14, text: "Dan sekarang aku ngerti kenapa lagu ini selalu kerasa pas buat kita." },
                { time: 19, text: "Cinta yang paling nyata itu nggak buru-buru, dia tumbuh pelan-pelan," },
                { time: 24, text: "sampai akhirnya jadi bagian yang nggak bisa aku lepas." },
                { time: 29, text: "I have loved you for a thousand years, and I'll love you for a thousand more." }
            ]
        },
        2: {
            title: "Yellow",
            artist: "Coldplay",
            bg: "png/10.jpeg",
            // Isi dengan Video ID YouTube resmi
            youtubeId: "yKNxeF4KMsY",
            // Detik berapa video mulai diputar (posisi reff). Sesuaikan dengan lagu aslinya.
            startSeconds: 55,
            // Tiap baris muncul di detik ke-berapa SEJAK startSeconds (bukan detik absolut video).
            lines: [
                { time: 0, text: "Kalau kamu tanya aku soal warna kesukaan," },
                { time: 4, text: "jawabanku nggak bakal biru atau abu-abu." },
                { time: 8, text: "Warna yang paling aku suka itu kamu pas lagi ketawa kecil," },
                { time: 13, text: "pas lagi bingung mau makan apa, pas lagi nggak sadar lagi difoto." },
                { time: 19, text: "Semua hal biasa jadi kerasa istimewa gara-gara kamu." },
                { time: 24, text: "Look at the stars, look how they shine for you." },
                { time: 29, text: "Itu aku, setiap malam, bersyukur kamu masih milih aku." }
            ]
        },
        3: {
            title: "Perfect",
            artist: "Ed Sheeran",
            bg: "png/10.jpeg",
            // Isi dengan Video ID YouTube resmi
            youtubeId: "2Vv-BfVoq4g",
            // Detik berapa video mulai diputar (posisi reff). Sesuaikan dengan lagu aslinya.
            startSeconds: 52,
            // Tiap baris muncul di detik ke-berapa SEJAK startSeconds (bukan detik absolut video).
            lines: [
                { time: 0, text: "Kalau ada satu hal yang nggak pernah aku ragukan," },
                { time: 4, text: "itu masa depan yang di dalamnya selalu ada kamu." },
                { time: 9, text: "Aku nggak butuh kita sempurna, aku cuma butuh kita —" },
                { time: 14, text: "dengan semua ketidaksempurnaan yang bikin cerita kita terasa nyata." },
                { time: 20, text: "Suatu hari nanti aku mau ngedance pelan-pelan sama kamu di dapur," },
                { time: 26, text: "cukup ketawa dan cerita-cerita kecil yang nggak penting." },
                { time: 31, text: "Darling, you look perfect tonight — tapi bukan cuma malam ini, setiap hari yang kamu ada di dalamnya." }
            ]
        }
    }
};
