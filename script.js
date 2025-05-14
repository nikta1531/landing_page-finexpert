document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const headerNav = document.querySelector('.header__nav');
    const headerPhone = document.querySelector('.header__phone');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        headerPhone.classList.toggle('active');
        
        // Toggle burger menu animation
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (burgerMenu.classList.contains('active')) {
                    burgerMenu.click();
                }
            }
        });
    });
    
    // Form submission
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For demonstration, we'll just show an alert
            const formData = new FormData(this);
            const name = formData.get('name');
            
            alert(`Спасибо, ${name}! Мы скоро с вами свяжемся.`);
            this.reset();
        });
    }
    
    // CTA button click
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to form
            const formSection = document.querySelector('.hero__form');
            if (formSection) {
                window.scrollTo({
                    top: formSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .advantage-card, .review-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.service-card, .advantage-card, .review-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // And then on scroll
    window.addEventListener('scroll', animateOnScroll);
});