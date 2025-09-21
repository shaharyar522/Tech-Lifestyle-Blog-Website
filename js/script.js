 // Toggle Mobile Menu
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

        // Theme Toggle
        const themeToggle = document.getElementById("themeToggle");
        themeToggle.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");
        });

        // Back to Top Button
        const backToTopButton = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add("visible");
            } else {
                backToTopButton.classList.remove("visible");
            }
        });

        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Search Modal
        const searchToggle = document.getElementById("searchToggle");
        const searchModal = document.getElementById("searchModal");
        const closeSearch = document.getElementById("closeSearch");

        searchToggle.addEventListener("click", () => {
            searchModal.style.display = "flex";
        });

        closeSearch.addEventListener("click", () => {
            searchModal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === searchModal) {
                searchModal.style.display = "none";
            }
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll(".fade-in");

        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", fadeInOnScroll);
        window.addEventListener("load", fadeInOnScroll);

        // News Ticker Animation
        const tickerContent = document.querySelector(".ticker-content");
        const tickerItems = document.querySelectorAll(".ticker-item");
        
        // Duplicate items for seamless animation
        tickerItems.forEach(item => {
            const clone = item.cloneNode(true);
            tickerContent.appendChild(clone);
        });