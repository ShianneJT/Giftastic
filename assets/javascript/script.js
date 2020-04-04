// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you.
// Save it to a variable called topics.
// We chose animals for our theme, but you can make a list to your own liking.
// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page that takes a value from a user input box and adds it to your topics array.
// Then make a function call that takes each topic in the array and remakes the buttons on the page.

$(document).ready(function() {

    var topics = ['Aquaman', 'Bane', 'Batgirl', 'Batman', 'Beast Boy', 'Black Canary', 'Blue Beetle', 'Captain Cold',
    'Catwoman', 'Cyborg', 'Deathstroke', 'Firestorm', 'Green Arrow', 'Green Lantern', 'Harley Quinn', 'Joker', 'Martian Manhunter',
    'Miss Martian', 'Mr. Freeze', 'Nightwing', 'Poison Ivy', 'Reverse Flash', 'Riddler', 'Supergirl', 'Superman', 'The Flash', 'The Penguin', 'Wonder Woman'
    ];

// create a button for each object in the array

    function showButtons() {


        for (var i = 0; i < topics.length; i++) {
            $('#buttonView').append('<button>' + topics[i] + '</button>');
            console.log(topics[i]);
        }


    } // End of showButtons()

showButtons();





// on click the page loads 10 static gifs 
// the gifs should animate on click and if you click again it will stop
// provide the rating under the gif



}) // End of $(document).ready




















