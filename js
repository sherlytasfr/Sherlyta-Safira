// Interaktivitas untuk tombol "Daftar Sekarang"
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
    ctaButton.addEventListener('click', function() {
    alert('Terima kasih telah mendaftar! Kami akan segera
    menghubungi Anda.');
    });
    }
    // --- Opsional: Scroll-Spy untuk Navigasi ---
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('main section');
    window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) { // Offset for
    better UX
    current = section.getAttribute('id');
    }
    });
    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(current)) {
    link.classList.add('active');
    }
    });
    });
    // Menangani klik pada tautan navigasi untuk smooth scroll
    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default tautan
    const targetId = this.getAttribute('href').substring(1);
    // Ambil ID target tanpa '#'
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
    window.scrollTo({
    top: targetSection.offsetTop -
    document.querySelector('header').offsetHeight, // Kurangi tinggi
    header
    behavior: 'smooth'
    });
    }
    });
    });
    });