data={empty:0,full:0,places:0};

function callAPI() {
  $.ajax({
    url: "http://mdakk072.pythonanywhere.com/status",
    type: "GET",
    success: function(response) {
	  data=response;
	  console.log(data);

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

setInterval(callAPI, 2000);
