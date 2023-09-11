const toggle_header = document.querySelector("#toggle_header");
toggle_header.onclick = switchClassRedGreen;

function switchClassRedGreen() {
    var element = document.getElementsByTagName("header")[0];
    element.classList.toggle("red")
    element.classList.toggle("green")
}
