document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuCloseButton = document.getElementById("mobile-menu-close-button");
  const mobileMenuOuterBG = document.getElementById("mobile-menu-outer-bg");

  const languageDropdownButton = document.getElementById("language-dropdown-button");
  const languageDropdownMenu = document.getElementById("language-dropdown-menu");

  const mobileLanguageDropdownButton = document.querySelector("#mobile-menu button[aria-controls='mobile-language-dropdown']");
  const mobileLanguageDropdown = document.getElementById("mobile-language-dropdown");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenuCloseButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenuOuterBG.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden");
  })

  languageDropdownButton.addEventListener("click", function () {
    languageDropdownMenu.classList.toggle("hidden");
  });

  mobileLanguageDropdownButton.addEventListener("click", function () {
    const isExpanded = mobileLanguageDropdownButton.getAttribute("aria-expanded") === "true";
    mobileLanguageDropdownButton.setAttribute("aria-expanded", !isExpanded);
    mobileLanguageDropdown.classList.toggle("hidden");
  });

  const buttons = document.querySelectorAll('button');
            const cards = document.querySelectorAll('[data-category]');
            const allButton = document.querySelector('button[onclick="filterSelection(\'all\')"]');

            function filterSelection(category) {
                cards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            function setActiveButton(activeButton) {
                buttons.forEach(button => {
                    if (button === activeButton) {
                        button.classList.add('bg-gradient-to-r', 'from-sky-500', 'to-blue-500', 'text-white');
                    } else {
                        button.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-blue-500', 'text-white');
                    }
                });
            }

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('onclick').match(/filterSelection\('(.+)'\)/)[1];
                    filterSelection(category);
                    setActiveButton(this);
                });
            });

            // Initialize
            filterSelection('all');
            setActiveButton(allButton);
});