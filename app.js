// Funzione per ottenere parametri dall'URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Funzione per inizializzare la pagina
function initPage() {
    // Ottieni l'ID della location dall'URL (es: ?location=bar-centrale)
    const locationId = getURLParameter('location') || 'bar-centrale';
    
    // Recupera i dati della location o usa default
    const location = LOCATIONS[locationId] || LOCATIONS['bar-centrale'];
    
    // Aggiorna tutti gli elementi della pagina
    updatePageContent(location);
    
    // Genera particelle animate di sfondo
    createBackgroundParticles();
    
    // Aggiungi effetto parallax al video
    addParallaxEffect();
}

// Aggiorna il contenuto della pagina
function updatePageContent(location) {
    document.getElementById('heroTitle').textContent = `Benvenuto da ${location.name}`;
    document.getElementById('locationBadge').textContent = `📍 ${location.name}`;
    document.getElementById('locationIcon').textContent = location.emoji;
    document.getElementById('locationName').textContent = location.name;
    document.getElementById('promoText').textContent = location.promoText;
    document.getElementById('discountBox').textContent = location.discount;
    
    // Aggiorna il titolo della pagina
    document.title = `${location.name} - Offerta Speciale`;
}

// Crea particelle animate di sfondo
function createBackgroundParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posizione casuale
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Animazione casuale
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Dimensione casuale
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
    }
}

// Aggiungi effetto parallax al video hero
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const video = document.querySelector('.hero-video');
        if (video) {
            const scrolled = window.pageYOffset;
            video.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
}

// Animazione smooth scroll per link interni (opzionale)
function smoothScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Traccia il click sui bottoni social (opzionale per analytics)
function trackSocialClick(platform) {
    console.log(`Utente ha cliccato su: ${platform}`);
    // Qui puoi aggiungere codice per Google Analytics o altri tracker
    // ga('send', 'event', 'Social', 'Click', platform);
}

// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initPage);

// Gestione responsive del video
window.addEventListener('resize', () => {
    const video = document.querySelector('.hero-video');
    if (video && window.innerWidth < 768) {
        video.style.height = '50vh';
    }
});
