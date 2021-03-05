function infoPopUp(){
    $("#infoDialog").show();
}

function infoClose(){
    $("#infoDialog").css("display", "none");
}

function init(){
    $("#infoBtn").click(infoPopUp);
    $("#infoDialogButton").click(infoClose);
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);