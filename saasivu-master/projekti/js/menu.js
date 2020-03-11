'use strict';

document.getElementById('logo').addEventListener('click', function () {
    // scroll etusivulle
    window.scrollTo(0, 0);
});

document.getElementById('box1').addEventListener('click', function () {
    //scroll sää
    window.scrollTo(0, 85);
});

document.getElementById('box2').addEventListener('click', function () {
    //scroll videoon
    window.scrollTo(0, 1500);
});

document.getElementById('box3').addEventListener('click', function () {
    //url kansioon missä kuvat
    location.assign('http://users.metropolia.fi/~123123123/');
});