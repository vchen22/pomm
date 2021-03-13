function infoPopUp(){
    $("#infoDialog").show();
}

function infoClose(){
    $("#infoDialog").css("display", "none");
}

function init(){
    $("#info-btn").click(infoPopUp);
    $("#info-close").click(infoClose);
}

window.addEventListener('DOMContentLoaded', init);