let cancelMenu = document.getElementById("cancel");
let getBar = document.getElementById("bar");
let getHeader = document.getElementById("header")

function myBar(){
    if (getBar) {
        getHeader.style.display = "block";
        getBar.style.display = "none";
        cancelMenu.style.display="block"
    }
}

function myCancel() {
    if (cancelMenu) {
        getHeader.style.display = "none";
        cancelMenu.style.display = "none";
        getBar.style.display = "block";
    }
}