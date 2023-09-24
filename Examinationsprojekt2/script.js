document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollButton');

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Add a click event listener to the button
    scrollButton.addEventListener('click', function () {
        scrollToSection('Home');
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton2 = document.getElementById('scrollButton2');

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    scrollButton2.addEventListener('click', function () {
        scrollToSection('Portfolio');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton3 = document.getElementById('scrollButton3');

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    scrollButton3.addEventListener('click', function () {
        scrollToSection('Contact');
    });
});

