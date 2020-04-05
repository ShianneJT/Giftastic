// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you.
// Save it to a variable called topics.
// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the. user clicks the gif again, it should stop playing
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page that takes a value from a user input box and adds it to your topics array.
// Then make a function call that takes each topic in the array and remakes the buttons on the page.
/*
$(document).ready(function() {

    var topics = ['Animal Crossing', 'Red Dead Redemption 2', 'The Witcher 3', 'DOOM Eternal'];

    function renderButtons() {
        $('#buttonsView').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.text(topics[i]);
            button.addClass('gifBtn');
            button.attr('data-name', topics[i]);
            $('#buttonsView').append(button);
        };
    }; // End of renderButtons()

    

    $('.gifBtn').click(function() {
        $('#gifsView').empty();
        var videoGame = $(this).attr('data-name');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + videoGame + '&api_key=LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');
                var gameGif = $('<img>');
                gameGif.attr('src', results[i].images.downsized_still.url);
                gameGif.attr('data-state', 'still');
                gameGif.attr('data-still', results[i].images.downsized_still.url);
                gameGif.attr('data-animated', results[i].images.downsized.url);
                gameGif.addClass('gif');
                gifDiv.append(gameGif);

                var rating = results[i].rating;
                var ratingText = $('<p>').text(`Rating: ${rating}`);
                gifDiv.append(ratingText);
    
                $('#gifsView').prepend(gifDiv);
            };

            $('.gif').click(function() {
                console.log("stop it");
                var state = $(this).attr('data-state');
                var still = $(this).attr('data-still');
                var animate = $(this).attr('data-animated');
        
                if (state == 'still') {
                    $(this).attr('src', animate);
                    $(this).attr('data-state', 'animate')
                } else if (state = 'animate') {
                    $(this).attr('src', still);
                    $(this).attr('data-state', 'still')
                }
            });
        });
    }); // End of $('.gifBtn').click(function()






    $('#submitBtn').click(function() {        
        var newBtn = $('#userInput').val().trim();
        console.log(newBtn);
        topics.push(newBtn);

        renderButtons();
        

        
    })

    renderButtons()
    


}); */ // End of $(document).ready(function()


// Part 2

    var topics = ['Animal Crossing', 'Red Dead Redemption 2', 'The Witcher 3', 'DOOM Eternal'];

    function displayGifs() {
        $('#gifsView').empty();
        var videoGame = $(this).attr('data-name');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + videoGame + '&api_key=LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');
                var gameGif = $('<img>')

                gameGif.attr('src', results[i].images.downsized_still.url);
                gameGif.attr('data-still', results[i].images.downsized_still.url);
                gameGif.attr('data-animated', results[i].images.downsized.url);
                gameGif.attr('data-state', 'still');
                gameGif.addClass('gif');
                gifDiv.append(gameGif);

                var rating = results[i].rating;
                var ratingText = $('<p>').text(`Rating: ${rating}`);
                gifDiv.append(ratingText);

                $('#gifsView').append(gifDiv);
            }
        }) 
    } // End of displayGifs()

    function renderButtons() {
        $('#buttonsView').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.text(topics[i]);
            button.addClass('gifBtn');
            button.attr('data-name', topics[i]);
            $('#buttonsView').append(button);
        };
    }; // End of renderButtons()


    function gifControl() {
        var state = $(this).attr('data-state');
        var still = $(this).attr('data-still');
        var animate = $(this).attr('data-animated');

        if (state == 'still') {
            $(this).attr('src', animate);
            $(this).attr('data-state', 'animate')
        } else if (state = 'animate') {
            $(this).attr('src', still);
            $(this).attr('data-state', 'still')
        }
    } // End of gifControl()



    $('#submitBtn').click(function(){
        var input = $('#userInput').val().trim();
        topics.push(input);
        $('#form').children('#userInput').val('')
        

        renderButtons();


        return false;
    });


    renderButtons()

$(document).on('click', '.gifBtn', displayGifs);
$(document).on('click', '.gif', gifControl);