// function openDialog() {
//     console.log("opened");
//     $("#app-info-dialog").show();
// }

// // function closeDialog() {
// //     $("#app-info-dialog").close();
// // }


// function init() {
//     $("#info-btn").click(openDialog);
//     // #("#close-info").click(closeDialog);
// }

// window.addEventListener('DOMContentLoaded', init);

// $(document).ready(function() {

//     $("info-dialog").dialog({
//         autoOpen: false
//     });  

//     // $('#info-btn').click(function () {
//     //     $('#app-info-dialog').dialog('open');
//     //     return false;
//     // });

//     // $('close-info').click(function() {
//     //     $('#app-info-dialog').dialog('close');
//     // });

//     $("#info-btn").click(function(event) {
//         $("#info-dialog").dialog("open");
//         return false;
//     });

// });

$(document).ready(function() {

    $('#app-info-dialog').dialog({
        autoOpen: false,
        title: 'Pomm'
    });
    $('#info-btn').click(function() {
        $('#app-info-dialog').dialog('open');
//                  return false;
    });
});