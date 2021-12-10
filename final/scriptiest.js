document.addEventListener(onload, bye(), false);

function bye() {
    document.querySelector("#ms\\-download").checked = false;
    document.querySelector("#ms\\-container").style.display = "none";
}

function myMove() {
    let id = null;
    const elem = document.querySelector("#ms-container");
    let pos = 100;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            elem.style.display = "none";
            document.querySelector("#ms\\-download").checked = false;
        } else {
            pos--;
            elem.style.opacity = pos + '%';
        }
    }
}


function func1(event) {
    console.log("working");
    document.querySelector("#ms\\-download").checked = true;
    document.querySelector("#ms\\-container").style.display = "block";
    document.querySelector("#ms\\-container").style.opacity = "100%";
    console.log("downloaded file!");
    window.setTimeout(myMove, 3500);
}