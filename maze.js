window.onload = function() {
    document.getElementById("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
   document.getElementById("boundary1").style.backgroundColor = "red";
   document.getElementById("status").textContent = "You lose";
}