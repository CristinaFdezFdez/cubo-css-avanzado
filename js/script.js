window.onscroll = function () {
    let box = document.getElementById("box");
    box.style.transform = "rotateY(" + window.scrollY / 4 + "deg) rotateX(" + window.scrollY / 4 + "deg)";
}

document.querySelectorAll('.cube-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let face = this.getAttribute('data-face');
        let box = document.getElementById("box");

        switch (face) {
            case "1":
                box.style.transform = "rotateY(0deg) rotateX(0deg)";
                break;
            case "2":
                box.style.transform = "rotateY(180deg) rotateX(0deg)";
                break;
            case "3":
                box.style.transform = "rotateY(-90deg) rotateX(0deg)";
                break;
            case "4":
                box.style.transform = "rotateY(90deg) rotateX(0deg)";
                break;
            case "5":
                box.style.transform = "rotateX(-90deg) rotateY(0deg)";
                break;
            case "6":
                box.style.transform = "rotateX(90deg) rotateY(0deg)";
                break;
        }
    });
});