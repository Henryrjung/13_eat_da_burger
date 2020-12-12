$(function () {
    //Click event for adding a burger.
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0,
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        location.reload();
      });
    });
  
    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: "true",
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState,
      }).then(function () {
        console.log("changed devour to", newDevour);
        location.reload();
      });
    });
  });