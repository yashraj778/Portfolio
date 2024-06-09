document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            console.log(entry.target, entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    var sections = document.querySelectorAll('.about, .projects');
    sections.forEach(function(section) {
        observer.observe(section);
    });
});
