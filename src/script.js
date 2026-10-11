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

const dividerBand = document.getElementById('divider');
const dividerLogo = document.getElementById('divider-logo');
const dividerStars = document.getElementById('divider-stars');

if (dividerBand && dividerLogo && dividerStars) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;

  const update = () => {
    const vh = window.innerHeight;
    const rect = dividerBand.getBoundingClientRect();

    // 0 = band entering at the bottom of the screen, 1 = band leaving at the top
    const t = reduceMotion
      ? 0.5
      : Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

    // Logo: drifts from above the band to below it
    const logoRange = (rect.height + dividerLogo.offsetHeight) / 2;
    const logoY = (t - 0.5) * 2 * logoRange;
    dividerLogo.style.transform = `translate(-50%, calc(-50% + ${logoY}px))`;

    // Stars: the layer is 160% of the band tall, so it can shift by up to 60% of the band height
    const starsY = -0.6 * rect.height * (1 - t);
    dividerStars.style.transform = `translateY(${starsY}px)`;

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}