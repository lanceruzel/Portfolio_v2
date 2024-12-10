let links = $('.nav-item');
let sections = $('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    //Navbar Item Select
    let viewportHeight = window.innerHeight;

    sections.each(function () {
        let section = this;
        let top = window.scrollY;
        let offset = section.offsetTop - (viewportHeight / 2.5);
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.removeClass("border-b-4 font-bold");

            let targetLink = $('.nav-item a[href="#' + id + '"]');

            if (targetLink.length > 0) {
                targetLink.each(function () {
                    let parentElement = $(this).parent();

                    if (parentElement.length > 0) {
                        parentElement.addClass("border-b-4 font-bold");
                    }
                });
            }
        }
    });

    //Navbar shadow effect when scrolled down
    if (scrollY > 1) {
        $('#navbar').addClass('shadow-lg');
    } else {
        $('#navbar').removeClass('shadow-lg');
    }
});