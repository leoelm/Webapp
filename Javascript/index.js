window.onload = function() {
    var dataText = ["We simplify. We streamline. We cheapen.", "The process for students.", "The process for real estate agents.", "We are Abode."];

    function typeWriter(text, i, fnCallback) {
        if (i<text.length) {
            document.getElementById("title").innerHTML = text.substring(0, i+1) + "<span aria-hidden='true'></span>";

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == "function") {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 2000);
        }

        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);

      // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
}

