$(document).ready(function() {
    $('.answer').hide();
    $('#f1').click(function() {
        $('#a1').slideToggle();
    });
    $('#f2').click(function() {
        $('#a2').slideToggle();
    });
    $('#f3').click(function() {
        $('#a3').slideToggle();
    });
    $('#f4').click(function() {
        $('#a4').slideToggle();
    });
    $('#f5').click(function() {
        $('#a5').slideToggle();
    });
});

$(document).ready(function(){
    $("form").on("submit, function(){
        $.ajax({url:(this), success:function(){
            var count = $('a[href]').size();
        });
        $('#count').html("Number of Links: " + count);
    });
});