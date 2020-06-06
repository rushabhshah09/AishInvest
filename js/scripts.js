$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();


    $("#buttonLogin").click(function(){
        $('#loginModal').modal('show');
    });

    $("#buttonReservation").click(function(){
        $('#ReserveModal').modal('show');
    });
});