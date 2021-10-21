//Jquery kod
//Metoden ready kör JavaScript-koden så snart sidans Document Object Model (DOM) blir säkert att manipulera
$(document).ready(function(){ 
  
    for(var i =0; i<6; i++){ // En for-loop som går igenom de 6 första bilderna på index.html och skapar en animeringseffekter på bilderna. Opacity från 0 till 1 inom 1500 millisekunder
        $("figure:eq(" + i +")").animate({'opacity':'1'}, 1500);
    }
});

$(window).scroll(function(){ //scroll animering

    // hämtar bilder från index.html med ID och berkänar höjden på vart dem befinner sig 
    var top_of_object9 = $('#figure9').offset().top;
    var top_of_object7 =  $('#figure7').offset().top;
    var bottom_of_object10 =  $('#figure10').offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if( bottom_of_window > top_of_object9){ //När botten av fönstret passerar toppen av bilden

        $('#figure9').animate({'opacity':'1'},3000);  //Animerar bildens egenskap; opacity från 0 till 1 inom 3000 millisekunder när bilden visas på vyn
        
    }

    if( bottom_of_window > top_of_object7){

        $('#figure7').animate(  //roterings animation som roterar bilden ett varv (360 °) inom 2500 millisekunder när bilden visas på vyn
            { deg: 360 },
            {
              duration: 2500,
              step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
          );
        
    }

    if( bottom_of_window > bottom_of_object10){

        $("#figure11").slideDown( {duration: 3000} ); //Metoden ser till att bildens nedre del glider ner inom 3000 millisekunder när bilden visas på vyn
            
    }
    
});