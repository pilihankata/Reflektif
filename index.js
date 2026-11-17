<script>
    const tombolKategori = document.querySelector('.punya-submenu > a');
    const daftarSubmenu = document.querySelector('.sub-menu');

    tombolKategori.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah halaman melompat ke atas
        const sedangTerbuka = daftarSubmenu.style.display === 'block';
        daftarSubmenu.style.display = sedangTerbuka ? 'none' : 'block';
    });

    // Menutup sub-menu jika klik di luar area menu
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.punya-submenu')) {
            daftarSubmenu.style.display = 'none';
        }
    });
</script>