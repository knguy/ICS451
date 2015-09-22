/**
 * Created by Smile on 9/22/2015.
 */
function getClasses (elem) {
    var classes;
    classes = elem.classList;
    return classes;
}

function addClass (elem, className) {
    if (elem.classList.length == 0) {
        elem.classList.add(className);
    }
    else if (!elem.classList.contains(className)) {
        elem.classList.add(className);
    }
}

function validateForm () {
    var us = document.getElementById("username").value;
    var em = document.getElementById("email").value;
    var pa = document.getElementById("password").value;
    var co = document.getElementById("confirm").value;
    var message = "";
    if (us == "") {
        document.getElementById("username").style.borderColor = "red";
        message = message + "Please enter a username<br>"
    }
    else {
        document.getElementById("username").style.borderColor = "black";
    }
    if (em == "") {
        document.getElementById("email").style.borderColor = "red";
        message = message + "Please enter an email<br>"
    }
    else {
        document.getElementById("email").style.borderColor = "black";
    }
    if (pa == "") {
        document.getElementById("password").style.borderColor = "red";
        message = message + "Please enter a password<br>"
    }
    else {
        document.getElementById("password").style.borderColor = "black";
    }
    if (co == "") {
        document.getElementById("confirm").style.borderColor = "red";
        message = message + "Please confirm your password<br>"
    }
    else {
        document.getElementById("confirm").style.borderColor = "black";
    }
    if (pa != "" && co != "" && pa != co) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm").style.borderColor = "red";
        message = message + "Your passwords do not match. Please reenter.<br>"
    }
    else if (pa != "" && co != "" && pa == co) {
        document.getElementById("password").style.borderColor = "black";
        document.getElementById("confirm").style.borderColor = "black";
    }
    document.getElementById("message").innerHTML = message;
    return false;
}