
(function () {
    window.onscroll = function() {myFunction()};

    let navbar = document.getElementById('navbar')
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add('position-fixed','top-0','start-0','end-0');
          navbar.firstElementChild.classList.add('pt-3')
        } else {
          navbar.classList.remove('position-fixed','top-0','start-0','end-0');
        }
      }
})()