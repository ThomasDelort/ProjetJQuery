$(function(){

    var speed = 250,

        fermer = function(who){
            // On ferme le li.
            who.children().children(".color").animate({left:"140px"},speed);
            who.animate({width:"140px"},speed);  
            who.removeClass("open");
        },

        ouvrir = function(who){
            // On ferme le frère ouvert.
            fermer(who.siblings(".open"));

            // On ouvre le li à ouvrir.
            who.children().children(".color").animate({left:"0px"},speed);
            who.animate({width:"420px"},speed);
            who.addClass("open");
        };

    // Ouverture initiale du li numero 2.
    var liOuvertAuLancement = $("#main-menu ul li").eq(2);
    ouvrir(liOuvertAuLancement);

    // Action lorsqu'on clique sur un li.
    $("#main-menu ul li").click(function(){
        $(this).hasClass("open") ? fermer($(this)) : ouvrir($(this));
    });

    // Action lorsqu'on clique sur un bouton.
    $('.button').click(function(){
        var liCorrespondant = $("#main-menu ul li").eq($(this).index());   
        liCorrespondant.hasClass("open") ? fermer(liCorrespondant) : ouvrir(liCorrespondant);
    });
});