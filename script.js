$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 18
    if ( age >= 18 ) {
      //if age is greater than 18 show the next question
      $("#cats-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("I don't think so, kid.");
      $("#friends-img").attr("src", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwibiJeNls7XAhVmsVQKHT-EBNsQjRwIBw&url=https%3A%2F%2Fwww.colourbox.com%2Fimage%2Fbest-friends-have-a-relax-image-4622679&psig=AOvVaw162_dhclXJhV6nJXbA9m8f&ust=1511302322035372");
    }
    
  });

  $("#cats-submit").click(function(){
    var catsString = $("#cats").val();
    var cats = parseInt(catsString);

    if ( cats > 6 ) {
      $("#cats-form").hide();
      $("#answer").text("Congrats! Let's go to the mall");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
      
    } else {
      $("#answer").text("I think we're done here.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

});