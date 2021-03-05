{   
    var info = document.getElementById('info');
    // var info = $('#info');
}

function help(){
    alert("The red dot means your friend is in a pomm session. \r The green dot means your friend is not in a pomm session.");
}

function init(){
    info.addEventListener('click', help);
    // info.click(help);
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);