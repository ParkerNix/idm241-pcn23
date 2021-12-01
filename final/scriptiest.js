document.addEventListener(onload, uncheck(), false);

function uncheck() {
    document.querySelector("#ms\\-download").checked = false;
    document.querySelector("#ms\\-container").style.display = "none";
}

function func1(event) {
    console.log("working");
    document.querySelector("#ms\\-download").checked = true;
    document.querySelector("#ms\\-container").style.display = "block";
    console.log("downloaded file!");
}