
$(document).ready(function() {

$(".devoure-button").on("click", function (event) {
  var id = $(this).data("id");

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
  }).then(function () {
    console.log("devoured burger", id);

    location.reload();
  });
});

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("created a new burger");
        location.reload();
      }
    );
});

})


