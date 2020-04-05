// Giftastic script.js
// Array
var topics = ['Animal Crossing', 'Red Dead Redemption 2', 'The Witcher 3', 'DOOM Eternal'];

    // This function displays the gifs once the button containing topic[index] is pressed
    function displayGifs() {
    // Empties container holding gifs, if any, to display the topics from the button that was pressed
    // Sets videoGame to equal the data-name attribute assigned when the buttons are created
    // ajax call to giphy api that limits the search to 10 results
        $('#gifsView').empty();  
        var videoGame = $(this).attr('data-name');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + videoGame + '&api_key=LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            var results = response.data;

    // This loops through the responses and gives them their own div and img tag
    // Then assigns a number of attributes to the image to be called on later when starting/stopping gifs
    // A rating is pulled from the response and added below the image then appends the divs to the gifsView div already on index.html
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');
                gifDiv.addClass('floater');

                var gameGif = $('<img>')
                gameGif.attr('src', results[i].images.original_still.url);
                gameGif.attr('data-still', results[i].images.original_still.url);
                gameGif.attr('data-animated', results[i].images.original.url);
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

// This function renders the buttons that appear on the screen
// The buttonsView div is emptied to prevent the buttons from duplicating when a new one has been added
// Every object in the topics array is given a button - that is then given a class to be used later for the .click()
    function renderButtons() {
        $('#buttonsView').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.text(topics[i]);
            button.addClass('gifBtn btn btn-outline-secondary');
            button.attr('data-name', topics[i]);
            $('#buttonsView').append(button);
        };
    }; // End of renderButtons()

// Creates a variable for each animate state
// If the gif is still, clicking it will change the src and attributes to animate and vice versa for if it's animated
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

// When user enters a video game into the search bar and clicks submit their input is added to the topics array
    $('#submitBtn').click(function(){
        var input = $('#userInput').val().trim();
        topics.push(input);
        $('.form-group').children('#userInput').val('')

// The buttons are rendered again with the user's input
        renderButtons();

        return false;
    });

    renderButtons()

// Event listeners
$(document).on('click', '.gifBtn', displayGifs);
$(document).on('click', '.gif', gifControl);