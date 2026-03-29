// Generate random stars
function generateStars() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 100; // Adjust number of stars
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        
        // Random animation delay for staggered blinking
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    generateStars();
    showPage('home');
    setupTabSwitching();
    setupBackArrows();
    setupGrimoireToggle();
    setupAngelsToggle();
    setupTriangleClick();
    setupPortalAudio();
});

// Back Arrow listeners - goes HOME
function setupBackArrows() {
    const backArrows = document.querySelectorAll('.back-arrow');
    backArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            showPage('home');
            return false;
        });
    });
}

// Tab switching functionality
function setupTabSwitching() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            const currentPage = document.querySelector('.page-content.active');
            const currentPageId = currentPage ? currentPage.id : null;
            
            // Only switch if clicking on a different tab
            if (currentPageId !== 'content-' + pageName) {
                showPage(pageName);
            }
        });
    });
}

// Show a specific page
function showPage(pageName) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page-content');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active from all tab buttons
    const allTabs = document.querySelectorAll('.tab-btn');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById('content-' + pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Add active to clicked tab
    const activeTab = document.querySelector('[data-page="' + pageName + '"]');
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Add portal entrance animation
    if (pageName === 'portal') {
        const portalPage = document.querySelector('.portal-page');
        if (portalPage) {
            portalPage.classList.remove('entering');
            // Trigger reflow to restart animation
            void portalPage.offsetWidth;
            portalPage.classList.add('entering');
        }
    }
    
    // Hide stars on grimoire, angels, and portal pages, show on all others
    const starsContainer = document.getElementById('starsContainer');
    if (pageName === 'grimoire' || pageName === 'angels' || pageName === 'portal') {
        starsContainer.classList.add('hidden');
    } else {
        starsContainer.classList.remove('hidden');
    }
    
    // Reset grimoire view if switching away from grimoire
    if (pageName !== 'grimoire') {
        const grimoireGifView = document.getElementById('grimoire-gif-view');
        const grimourePaperView = document.getElementById('grimoire-paper-view');
        if (grimoireGifView && grimourePaperView) {
            grimoireGifView.classList.remove('active');
            grimourePaperView.classList.add('active');
        }
    }
    
    // Reset angels view if switching away from angels
    if (pageName !== 'angels') {
        const angelsGifView = document.getElementById('angels-gif-view');
        const angelsSplitView = document.getElementById('angels-split-view');
        if (angelsGifView && angelsSplitView) {
            angelsGifView.classList.remove('active');
            angelsSplitView.classList.add('active');
        }
    }
}

// Grimoire toggle - click to toggle between views (back arrow handled separately)
function setupGrimoireToggle() {
    const grimoireToggles = document.querySelectorAll('.grimoire-toggle:not(.back-arrow)');
    grimoireToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const grimoireGifView = document.getElementById('grimoire-gif-view');
            const grimourePaperView = document.getElementById('grimoire-paper-view');
            
            if (grimoireGifView.classList.contains('active')) {
                grimoireGifView.classList.remove('active');
                grimourePaperView.classList.add('active');
            } else {
                grimoireGifView.classList.add('active');
                grimourePaperView.classList.remove('active');
            }
        });
    });
}

// Angels/Demons toggle - click to toggle between views (back arrow handled separately)
function setupAngelsToggle() {
    const angelsToggles = document.querySelectorAll('.angels-toggle:not(.back-arrow)');
    angelsToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const angelsGifView = document.getElementById('angels-gif-view');
            const angelsSplitView = document.getElementById('angels-split-view');
            
            if (angelsGifView.classList.contains('active')) {
                angelsGifView.classList.remove('active');
                angelsSplitView.classList.add('active');
            } else {
                angelsGifView.classList.add('active');
                angelsSplitView.classList.remove('active');
            }
        });
    });
}

// Triangle click - navigate to portal
function setupTriangleClick() {
    const clickableTriangle = document.querySelector('.clickable-triangle');
    if (clickableTriangle) {
        clickableTriangle.addEventListener('click', function(e) {
            e.stopPropagation();
            showPage('portal');
        });
    }
}

// Portal audio - play when clicked
function setupPortalAudio() {
    const portalPage = document.querySelector('.portal-page');
    const portalAudio = document.getElementById('portal-audio');
    
    if (portalPage && portalAudio) {
        portalPage.addEventListener('click', function(e) {
            e.stopPropagation();
            // Play audio if source is set
            if (portalAudio.src) {
                portalAudio.play();
            }
        });
    }
}

// Regenerate stars on window resize
window.addEventListener('resize', function() {
    const starsContainer = document.getElementById('starsContainer');
    starsContainer.innerHTML = '';
    generateStars();
});
