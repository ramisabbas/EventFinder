// DOM Elements
const eventsContainer = document.getElementById('eventsContainer');
const eventSearch = document.getElementById('eventSearch');
const clearSearch = document.getElementById('clearSearch');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners
    setupEventListeners();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
});

// Filter events based on search input
function filterEvents() {
    const searchTerm = eventSearch.value.toLowerCase().trim();
    const eventCards = document.querySelectorAll('.event-card');
    
    if (searchTerm === '') {
        // Show all events
        eventCards.forEach(card => {
            card.style.display = 'block';
        });
        clearSearch.style.display = 'none';
        return;
    }
    
    clearSearch.style.display = 'flex';
    
    // Filter event cards
    eventCards.forEach(card => {
        // Get data attributes
        const eventName = card.getAttribute('data-name').toLowerCase();
        const eventCategory = card.getAttribute('data-category').toLowerCase();
        const eventLocation = card.getAttribute('data-location').toLowerCase();
       
        // Check if any of the fields contain the search term
        if (eventName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
   
}



// Setup event listeners
function setupEventListeners() {
    // Search functionality
    eventSearch.addEventListener('input', filterEvents);
    
    // Clear search button
    clearSearch.addEventListener('click', function() {
        eventSearch.value = '';
        
        // Show all events
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => {
            card.style.display = 'block';
        });
       
    });
    
   
}



// Initialize mobile menu functionality
function initMobileMenu() {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change icon based on menu state
        if (navLinks.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}