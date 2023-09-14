/* Za otvaranje ukusa krofne, waffle i palacinki, JQUERY padajuci meni */
$(document).ready(function(){
    $("#krofne").click(function(){
      $("#krofne_vrste").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#waffle").click(function(){
      $("#waffle_vrste").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#palacinke").click(function(){
      $("#palacinke_vrste").slideToggle("slow");
    });
  });

/*slideshow na katalogu*/
var slideIndex = 0;

function showSlides() {

    var i;
  
    var slides = document.getElementsByClassName("mySlides");
  
    var dots = document.getElementsByClassName("tackica");
  
    for (i = 0; i < slides.length; i++) {
  
      slides[i].style.display = "none";  
  
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {slideIndex = 1}    
  
    for (i = 0; i < dots.length; i++) {
  
      dots[i].className = dots[i].className.replace("active", "");
  
    }
  
    slides[slideIndex-1].style.display = "block";  
  
    dots[slideIndex-1].className += " active";
  
    setTimeout(showSlides, 3000); // Menja sliku svake 2 sekunde
  
  }
  showSlides();
