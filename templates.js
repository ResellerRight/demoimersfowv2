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
        category: 'Layanan / Booking',
        icon: 'ph-chat-circle-dots',
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        
        config: {
            title: 'Konsultasi Gratis 30 Menit',
            waNumber: '', 
            waIntro: 'Halo, saya ingin booking jadwal Konsultasi:',
            waFooter: 'Mohon info ketersediaan jadwalnya ya.',
            btnText: '💬 Booking Konsultasi',
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
            ctaBg: 'linear-gradient(135deg, #10B981, #047857)',
            displayMode: 'popup',
            trustBadge: true,
            trustTitle: 'Aman & Terpercaya',
            trustDesc: 'Semua data dan cerita bisnis Anda aman bersama kami.'
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
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #F43F5E, #BE123C)',
            ctaBg: 'linear-gradient(135deg, #F59E0B, #B45309)',
            displayMode: 'embed',
            trustBadge: true,
            trustTitle: 'Pasti Aman',
            trustDesc: 'Bayar Aman di Tempat (COD) Setelah Barang Sampai.'
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
        category: 'Event & Webinar',
        icon: 'ph-laptop',
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        
        config: {
            title: 'Registrasi Event & Webinar',
            waNumber: '', 
            waIntro: 'Halo, saya ingin mendaftar untuk mengikuti Webinar:',
            waFooter: 'Mohon info link Zoom dan grup pesertanya ya.',
            btnText: '🎟️ Amankan Tiket Saya',
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #6366F1, #4338CA)',
            ctaBg: 'linear-gradient(135deg, #14B8A6, #0F766E)',
            displayMode: 'popup',
            trustBadge: true,
            trustTitle: 'Kuota Terbatas',
            trustDesc: 'E-Tiket akan dikirimkan via WhatsApp setelah mendaftar.'
        },

        fields: [
            { id: 'w1', type: 'text', label: 'Nama Lengkap', required: true, placeholder: 'Sesuai identitas untuk E-Certificate' },
            { id: 'w2', type: 'tel', label: 'Nomor WhatsApp', required: true, placeholder: 'Untuk dimasukkan ke grup peserta' },
            { id: 'w3', type: 'email', label: 'Alamat Email', required: true, placeholder: 'Untuk pengiriman E-Tiket' },
            { id: 'w4', type: 'text', label: 'Asal Instansi / Perusahaan', required: false, placeholder: 'Boleh dikosongkan jika personal' },
            { id: 'w5', type: 'textarea', label: 'Apa yang paling ingin Anda pelajari?', required: true, placeholder: 'Tuliskan harapan atau pertanyaan Anda...' }
        ]
    },

    // =========================================
    // TEMPLATE 4: BOOKING LAYANAN / SALON
    // =========================================
    'booking_layanan': {
        name: 'Booking Salon / Klinik',
        category: 'Layanan / Booking',
        icon: 'ph-calendar-check',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        
        config: {
            title: 'Reservasi Jadwal Layanan',
            waNumber: '', 
            waIntro: 'Halo Admin, saya mau reservasi jadwal perawatan:',
            waFooter: '',
            btnText: '📅 Konfirmasi Jadwal',
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #10B981, #047857)',
            ctaBg: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
            displayMode: 'embed',
            trustBadge: false,
            trustTitle: '',
            trustDesc: ''
        },

        fields: [
            { id: 's1', type: 'text', label: 'Nama Pelanggan', required: true, placeholder: 'Nama Anda' },
            { id: 's2', type: 'tel', label: 'Nomor HP (Bisa Dihubungi)', required: true, placeholder: '08xxxx' },
            { id: 's3', type: 'checkbox', label: 'Layanan yang Dipilih', required: true, placeholder: '', options: 'Hair Spa, Creambath, Facial Glow, Manicure & Pedicure, Pijat Refleksi' },
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
        category: 'Survey & Feedback',
        icon: 'ph-list-dashes',
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        
        config: {
            title: 'Penilaian Kepuasan Layanan Kami',
            waNumber: '', 
            waIntro: 'Halo Admin, berikut adalah hasil penilaian dari pengalaman saya:',
            waFooter: 'Terima kasih atas pelayanannya.',
            btnText: 'Kirim Penilaian',
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #A855F7, #7E22CE)',
            ctaBg: 'linear-gradient(135deg, #EC4899, #BE185D)',
            displayMode: 'popup',
            trustBadge: true,
            trustTitle: 'Privasi Terjaga',
            trustDesc: 'Masukan Anda sangat berarti bagi peningkatan kualitas kami.'
        },

        fields: [
            { id: 'v1', type: 'text', label: 'Nama Anda', required: true, placeholder: 'Nama Lengkap atau Panggilan' },
            { id: 'v2', type: 'tel', label: 'Nomor WhatsApp / HP', required: false, placeholder: 'Opsional, jika ingin kami hubungi kembali' },
            { id: 'v3', type: 'radio', label: 'Kualitas Produk/Layanan kami?', required: true, placeholder: '', options: '⭐⭐⭐⭐⭐ Sangat Puas, ⭐⭐⭐⭐ Puas, ⭐⭐⭐ Cukup, ⭐⭐ Kurang, ⭐ Kecewa' },
            { id: 'v4', type: 'radio', label: 'Merekomendasikan kami kepada orang lain?', required: true, placeholder: '', options: 'Pasti, Mungkin, Tidak' },
            { id: 'v5', type: 'textarea', label: 'Kritik & Saran', required: true, placeholder: 'Mohon tuliskan apa yang perlu kami tingkatkan...' }
        ]
    },

    // =========================================
    // TEMPLATE 6: E-COMMERCE FASHION (HARGA FLAT)
    // =========================================
    'ecommerce_fashion_1': {
        name: 'Order Kaos Premium (1 Harga)',
        category: 'E-Commerce',
        icon: 'ph-storefront', 
        color: 'text-rose-500', 
        bg: 'bg-rose-50',
        
        config: {
            title: 'Order Kaos Polos Premium', 
            waNumber: '6281234567890', 
            waIntro: 'Halo Admin, saya mau order kaos polos premium:', 
            waFooter: 'Tolong hitungkan ongkirnya ya.',
            btnText: 'Beli Sekarang', 
            basePrice: 125000, 
            headerBg: 'linear-gradient(135deg, #be123c, #f43f5e)', 
            ctaBg: 'linear-gradient(135deg, #059669, #10b981)',
            logoUrl: '', 
            displayMode: 'embed', 
            trustBadge: true, 
            trustTitle: 'Pasti Dikirim', 
            trustDesc: 'Garansi uang kembali 100% jika barang tidak sampai atau cacat.'
        },
        fields: [
            { id: 'f_1', type: 'text', label: 'Nama Lengkap', required: true, placeholder: 'Nama sesuai KTP/Penerima' },
            { id: 'f_2', type: 'tel', label: 'No. WhatsApp', required: true, placeholder: 'Contoh: 081234...' },
            { id: 'f_3', type: 'textarea', label: 'Alamat Lengkap', required: true, placeholder: 'Jalan, RT/RW, Kec, Kab/Kota' },
            { id: 'f_4', type: 'select', label: 'Warna Kaos', required: true, placeholder: '', options: 'Hitam, Putih, Navy, Maroon, Sage Green' },
            { id: 'f_5', type: 'select', label: 'Ukuran', required: true, placeholder: '', options: 'M, L, XL, XXL' },
            { id: 'f_6', type: 'number', label: 'Jumlah Kaos (Qty)', required: true, placeholder: '1' }
        ]
    },

    // =========================================
    // TEMPLATE 7: E-COMMERCE SKINCARE (3 VARIAN)
    // =========================================
    'ecommerce_skincare_3': {
        name: 'Paket Skincare Glowing',
        category: 'E-Commerce',
        icon: 'ph-gift', 
        color: 'text-teal-500', 
        bg: 'bg-teal-50',
        
        config: {
            title: 'Order Paket Glowing Skincare', 
            waNumber: '6281234567890', 
            waIntro: 'Halo Mimin Skincare, saya mau pesan paket ini:', 
            waFooter: 'Ditunggu totalan dan resinya ya!',
            btnText: 'Pesan Paket Glowing', 
            basePrice: 0, 
            headerBg: 'linear-gradient(135deg, #0f766e, #14b8a6)', 
            ctaBg: 'linear-gradient(135deg, #be123c, #f43f5e)',
            logoUrl: '', 
            displayMode: 'embed', 
            trustBadge: true, 
            trustTitle: 'BPOM & Aman', 
            trustDesc: 'Produk 100% Original, Halal, dan sudah teruji klinis.'
        },
        fields: [
            { id: 'f_1', type: 'text', label: 'Nama Penerima', required: true, placeholder: 'Nama lengkap' },
            { id: 'f_2', type: 'tel', label: 'No. WhatsApp', required: true, placeholder: '08xx' },
            { id: 'f_3', type: 'textarea', label: 'Alamat Pengiriman', required: true, placeholder: 'Sertakan patokan rumah jika ada' },
            // Varian harga dimasukkan menggunakan format "Nama Varian = Angka"
            { id: 'f_4', type: 'radio', label: 'Pilih Paket Skincare', required: true, placeholder: '', options: 'Paket Basic = 150000, Paket Acne Breakout = 225000, Paket Ultimate Glowing = 350000' },
            { id: 'f_5', type: 'number', label: 'Jumlah Paket (Qty)', required: true, placeholder: '1' },
            // Ekstra juga bisa dihitung otomatis dengan metode yang sama
            { id: 'f_6', type: 'checkbox', label: 'Ekstra (Opsional)', required: false, placeholder: '', options: 'Bubble Wrap Ekstra = 5000, Box Kado Ribbon = 15000' }
        ]
    },

    // =========================================
    // TEMPLATE 8: MOISTURIZER PREMIUM
    // =========================================
    'moisturizer_premium': {
        name: 'Order Moisturizer Premium',
        category: 'E-Commerce',
        icon: 'ph-drop',
        color: 'text-pink-500',
        bg: 'bg-pink-50',

        config: {
            title: 'Form Pemesanan Moisturizer Premium',
            waNumber: '',
            waIntro: 'Halo Admin Lumora Beauty, saya ingin memesan Moisturizer Premium dengan detail berikut:',
            waFooter: 'Mohon dicek dan diproses. Terima kasih 🙏',
            btnText: '✨ Pesan Moisturizer Sekarang',
            basePrice: 0,
            headerBg: 'linear-gradient(135deg, #EC4899, #BE185D)',
            ctaBg: 'linear-gradient(135deg, #F97316, #EA580C)',
            logoUrl: '',
            displayMode: 'embed',
            trustBadge: true,
            trustTitle: 'BPOM & Aman Digunakan',
            trustDesc: 'Mengandung bahan pilihan yang lembut di kulit dan nyaman digunakan setiap hari.'
        },

        fields: [
            {
                id: 'm1',
                type: 'text',
                label: 'Nama Lengkap',
                required: true,
                placeholder: 'Nama penerima paket'
            },
            {
                id: 'm2',
                type: 'tel',
                label: 'No. WhatsApp Aktif',
                required: true,
                placeholder: 'Contoh: 08123456789'
            },
            {
                id: 'm3',
                type: 'textarea',
                label: 'Alamat Lengkap Pengiriman',
                required: true,
                placeholder: 'Jalan, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi'
            },
            {
                id: 'm4',
                type: 'radio',
                label: 'Pilih Paket Moisturizer',
                required: true,
                placeholder: '',
                options: 'Paket Trial (1 Pcs) = 89000, Paket Hemat (2 Pcs) = 159000, Paket Glowing (4 Pcs) = 299000'
            },
            {
                id: 'm5',
                type: 'select',
                label: 'Jenis Kulit',
                required: true,
                placeholder: '',
                options: 'Normal, Berminyak, Kombinasi, Kering, Sensitif'
            },
            {
                id: 'm6',
                type: 'number',
                label: 'Jumlah Paket (Qty)',
                required: true,
                placeholder: '1'
            },
            {
                id: 'm7',
                type: 'checkbox',
                label: 'Tambahan (Opsional)',
                required: false,
                placeholder: '',
                options: 'Bubble Wrap Extra = 5000, Gift Box Premium = 15000'
            }
        ]
    }

};
