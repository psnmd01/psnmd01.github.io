data={empty:0,full:0,places:0};

function callAPI() {
  $.ajax({
    url: "https://mdakk072.pythonanywhere.com/status",
    type: "GET",
    success: function(response) {
	  data=response;
	  //console.log(data);

    },
	
    error: function(xhr) {
      console.log("Erreur : " + xhr.statusText);
    }
  });
  
  // Mettre à jour le texte de l'élément <p> ayant la classe "p1"
$(".Total").text(data.places);

// Mettre à jour le texte de l'élément <p> ayant la classe "p2"
$(".Occupied").text(data.full);
$(".Free").text(data.empty);

// Mettre à jour le texte de l'élément <p> ayant la classe "p3"


}

 function getImage() {
    // Création de l'élément image et spécification de son URL
    var image = $('<img>').attr('src', 'https://mdakk072.pythonanywhere.com/image');
    //var image = $('<img>').attr('src', 'https://mdakk072.pythonanywhere.com/image?' + new Date().getTime());

    $('#image-container').empty();
    // Ajout de l'élément image au conteneur de l'image
    $('#image-container').append(image);
  }

setInterval(callAPI, 1000);
setInterval(getImage, 1000);
