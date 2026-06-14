// =========================================================================
// DATABASE TEMPLATE IMERSFOW
// Posisi: Sejajar dengan index.html di GitHub
// Kumpulan template siap pakai untuk ditampilkan di Modal Gallery
// =========================================================================

const dbTemplates = {

    // =========================================
    // TEMPLATE 1: KONSULTASI GRATIS
    // =========================================
    'konsultasi_gratis': {
        name: 'Form Konsultasi Gratis',
        category: 'Layanan',
        icon: 'ph-chat-circle-dots',
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        
        config: {
            title: 'Konsultasi Gratis 30 Menit',
            waNumber: '', 
            waIntro: 'Halo, saya ingin booking jadwal Konsultasi:',
            waFooter: 'Mohon info ketersediaan jadwalnya ya.',
            btnText: '💬 Booking Konsultasi',
            headerBg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
            ctaBg: 'linear-gradient(135deg, #10B981, #047857)',
            displayMode: 'popup',
            trustBadge: true,
            trustMessage: 'Semua data dan cerita bisnis Anda aman bersama kami.'
        },

        fields: [
            { id: 'f1', type: 'text', label: 'Nama Lengkap', required: true, placeholder: 'Sesuai KTP/Panggilan' },
            { id: 'f2', type: 'tel', label: 'No WhatsApp', required: true, placeholder: 'Contoh: 0812...' },
            { id: 'f3', type: 'email', label: 'Email', required: true, placeholder: 'Untuk pengiriman link meeting' },
            { id: 'f4', type: 'select', label: 'Bidang Usaha', required: true, placeholder: '', options: 'Fashion, FnB, Skincare, Digital Product, Jasa' },
            { id: 'f5', type: 'textarea', label: 'Kendala Bisnis', required: true, placeholder: 'Ceritakan singkat masalah yang sedang dihadapi...' },
            { id: 'f6', type: 'date', label: 'Pilih Tanggal', required: true, placeholder: '' },
            { id: 'f7', type: 'time', label: 'Pilih Jam', required: true, placeholder: '' }
        ]
    },

    // =========================================
    // TEMPLATE 2: ORDER PRODUK FISIK (COD)
    // =========================================
    'order_cod': {
        name: 'Form Order Produk (COD)',
        category: 'E-Commerce',
        icon: 'ph-shopping-cart',
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        
        config: {
            title: 'Formulir Pemesanan Produk',
            waNumber: '', 
            waIntro: 'Halo Admin, saya mau order produk ini dengan metode COD:',
            waFooter: 'Tolong totalin harganya ya plus ongkir. Terima kasih!',
            btnText: '🛒 Proses Order Sekarang',
            headerBg: 'linear-gradient(135deg, #F43F5E, #BE123C)',
            ctaBg: 'linear-gradient(135deg, #F59E0B, #B45309)',
            displayMode: 'embed',
            trustBadge: true,
            trustMessage: 'Bayar Aman di Tempat (COD) Setelah Barang Sampai.'
        },

        fields: [
            { id: 'o1', type: 'text', label: 'Nama Penerima', required: true, placeholder: 'Nama yang akan tertera di paket' },
            { id: 'o2', type: 'tel', label: 'No HP / WhatsApp Aktif', required: true, placeholder: 'Pastikan nomor bisa dihubungi kurir' },
            { id: 'o3', type: 'select', label: 'Pilih Paket / Varian', required: true, placeholder: '', options: 'Paket Hemat (1 Pcs), Paket Spesial (2 Pcs - Diskon 10%), Paket Reseller (5 Pcs)' },
            { id: 'o4', type: 'select', label: 'Jumlah Beli', required: true, placeholder: '', options: '1, 2, 3, 4, 5, Lebih dari 5' },
            { id: 'o5', type: 'textarea', label: 'Alamat Lengkap', required: true, placeholder: 'Nama Jalan, RT/RW, Desa/Kelurahan, Kecamatan, Kota/Kabupaten, Kode Pos' }
        ]
    },

    // =========================================
    // TEMPLATE 3: PENDAFTARAN WEBINAR
    // =========================================
    'daftar_webinar': {
        name: 'Pendaftaran Webinar',
        category: 'Event',
        icon: 'ph-laptop',
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        
        config: {
            title: 'Registrasi Event & Webinar',
            waNumber: '', 
            waIntro: 'Halo, saya ingin mendaftar untuk mengikuti Webinar:',
            waFooter: 'Mohon info link Zoom dan grup pesertanya ya.',
            btnText: '🎟️ Amankan Tiket Saya',
            headerBg: 'linear-gradient(135deg, #6366F1, #4338CA)',
            ctaBg: 'linear-gradient(135deg, #14B8A6, #0F766E)',
            displayMode: 'popup',
            trustBadge: true,
            trustMessage: 'Kuota Terbatas! E-Tiket akan dikirimkan via WhatsApp.'
        },

        fields: [
            { id: 'w1', type: 'text', label: 'Nama Lengkap', required: true, placeholder: 'Sesuai identitas untuk E-Certificate' },
            { id: 'w2', type: 'tel', label: 'Nomor WhatsApp', required: true, placeholder: 'Untuk dimasukkan ke grup peserta' },
            { id: 'w3', type: 'email', label: 'Alamat Email', required: true, placeholder: 'Untuk pengiriman E-Tiket' },
            { id: 'w4', type: 'text', label: 'Asal Instansi / Perusahaan', required: false, placeholder: 'Boleh dikosongkan jika personal' },
            { id: 'w5', type: 'textarea', label: 'Apa yang paling ingin Anda pelajari di sesi ini?', required: true, placeholder: 'Tuliskan harapan atau pertanyaan Anda...' }
        ]
    },

    // =========================================
    // TEMPLATE 4: BOOKING LAYANAN / SALON
    // =========================================
    'booking_layanan': {
        name: 'Booking Salon / Klinik',
        category: 'Layanan',
        icon: 'ph-calendar-check',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        
        config: {
            title: 'Reservasi Jadwal Layanan',
            waNumber: '', 
            waIntro: 'Halo Admin, saya mau reservasi jadwal perawatan:',
            waFooter: '',
            btnText: '📅 Konfirmasi Jadwal',
            headerBg: 'linear-gradient(135deg, #10B981, #047857)',
            ctaBg: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
            displayMode: 'embed',
            trustBadge: false,
            trustMessage: ''
        },

        fields: [
            { id: 's1', type: 'text', label: 'Nama Pelanggan', required: true, placeholder: 'Nama Anda' },
            { id: 's2', type: 'tel', label: 'Nomor HP (Bisa Dihubungi)', required: true, placeholder: '08xxxx' },
            { id: 's3', type: 'checkbox', label: 'Layanan yang Dipilih (Bisa pilih lebih dari satu)', required: true, placeholder: '', options: 'Hair Spa, Creambath, Facial Glow, Manicure & Pedicure, Pijat Refleksi' },
            { id: 's4', type: 'date', label: 'Pilih Tanggal Kedatangan', required: true, placeholder: '' },
            { id: 's5', type: 'time', label: 'Pilih Jam Kedatangan', required: true, placeholder: '' },
            { id: 's6', type: 'textarea', label: 'Catatan Tambahan', required: false, placeholder: 'Misal: Tolong siapkan terapis wanita...' }
        ]
    },

    // =========================================
    // TEMPLATE 5: KUESIONER / SURVEI
    // =========================================
    'survei_kepuasan': {
        name: 'Survei Kepuasan Pelanggan',
        category: 'Survei',
        icon: 'ph-list-dashes',
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        
        config: {
            title: 'Penilaian Kepuasan Layanan Kami',
            waNumber: '', 
            waIntro: 'Halo Admin, berikut adalah hasil penilaian dari pengalaman saya:',
            waFooter: 'Terima kasih atas pelayanannya.',
            btnText: 'Kirim Penilaian',
            headerBg: 'linear-gradient(135deg, #A855F7, #7E22CE)',
            ctaBg: 'linear-gradient(135deg, #EC4899, #BE185D)',
            displayMode: 'popup',
            trustBadge: true,
            trustMessage: 'Masukan Anda sangat berarti bagi peningkatan kualitas kami.'
        },

        fields: [
            { id: 'v1', type: 'text', label: 'Nama Anda', required: true, placeholder: 'Nama Lengkap atau Panggilan' },
            { id: 'v2', type: 'tel', label: 'Nomor WhatsApp / HP', required: false, placeholder: 'Opsional, jika ingin kami hubungi kembali' },
            { id: 'v3', type: 'radio', label: 'Bagaimana penilaian Anda terhadap kualitas produk/layanan kami?', required: true, placeholder: '', options: '⭐⭐⭐⭐⭐ Sangat Puas, ⭐⭐⭐⭐ Puas, ⭐⭐⭐ Cukup, ⭐⭐ Kurang, ⭐ Kecewa' },
            { id: 'v4', type: 'radio', label: 'Apakah Anda merekomendasikan kami kepada orang lain?', required: true, placeholder: '', options: 'Pasti, Mungkin, Tidak' },
            { id: 'v5', type: 'textarea', label: 'Kritik & Saran', required: true, placeholder: 'Mohon tuliskan apa yang perlu kami tingkatkan...' }
        ]
    }

};
