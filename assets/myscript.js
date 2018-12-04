function openCart() {
    document.getElementById("viewCart").style.width = "375px";
}

function closeCart() {
    document.getElementById("viewCart").style.width = "0";
}

//

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();