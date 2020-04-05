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
$(document).ready(function() {

    var topics = ['Animal Crossing', 'Red Dead Redemption', 'Stardew Valley', 'DOOM Eternal'];
    var gifButton;

    function renderButtons() {
        $('#buttonsView').empty();
        for (var i = 0; i < topics.length; i++) {
            gifButton = $('<button>');
            gifButton.text(topics[i]);
            gifButton.addClass('gifBtn');
            gifButton.attr('data-name', topics[i]);
            $('#buttonsView').append(gifButton);
        }
    };

    renderButtons()

    $('.gifBtn').click(function() {
        var videoGame = $(this).attr('data-name');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + videoGame + '&api_key=LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gameGif = $('<img>');
                gameGif.attr('src', results[i].images.downsized_still.url);
                gameGif.attr('data-still');
                gameGif.addClass('gif');
                $('#gifsView').prepend(gameGif);
            };
            
        });
    

    });




}); // End of $(document).ready(function()





//                 gameGif.attr('src', result[j]).images.original_still.url);
//                 gameGif.attr('data-still', result[j]).images.original_still.url);
//                 gameGif.attr('data-animate', result[j]).images.original_still.url);
//                 gameGif.attr('data-state', 'still');
//                 gameGif.attr('class', 'gif');
//                 gifDiv.append(image);























//     function displayGifs() {
//         var videoGame = $(this).attr('data-name');
//         var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + videoGame + '&api_key=LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS&limit=10';

//         $.ajax({
//             url: queryURL,
//             method: 'GET'
//         }).then(function(response) {
//             var results = response.data;

//             for (var j = 0; j < results.length; j++) {
//                 var gifDiv = $('<div>')

//                 var gameGif = $('<img>');
//                 gameGif.attr('src', result[j]).images.original_still.url);
//                 gameGif.attr('data-still', result[j]).images.original_still.url);
//                 gameGif.attr('data-animate', result[j]).images.original_still.url);
//                 gameGif.attr('data-state', 'still');
//                 gameGif.attr('class', 'gif');
//                 gifDiv.append(image);
//             };
//         };
//     };


// });        


            

    //     for (var j = 0; j < results.length; j++) {
    //         var gifDiv = $('<div>');
    //         var rating = $("<p>").text("Rating: " + results[j].rating);

    //         var gameGif = $('<img>').addClass('gif');
    //         gameGif.attr('src', results[j].images.original_still.url);
    //         gameGif.attr('data-still', results[j].images.original_still.url);
    //         gameGif.attr('data-animate', results[j].images.original_still.url);
    //         gameGif.attr('data-state', 'still');

    //         gifDiv.append(gameGif);
    //         gifDiv.append(rating);
    //         $('gifsView').prepend(gifDiv);
    //     }
    //     })
    // })



    // $('.gif').click(function() {
    //     var gifState = $(this).attr('data-state');

    //     if (gifState === 'still') {
    //         $(this).attr('src', $(this).attr('data-animate'));
    //         $(this).attr('data-state', 'animate');
    //     } else {
    //         $(this).attr('src', $(this).attr('data-still'));
    //         $(this).attr('data-state', 'still');
    //     }
    // })








//LO0wlQcDyKguVdmxVhn7CHeqlHgGIazS
