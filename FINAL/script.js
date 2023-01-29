$(document).ready(function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      document.getElementById("nombre").innerHTML =$("#nombre").text(data)
   
  
    


      console.log(data);
    },
  });
});
