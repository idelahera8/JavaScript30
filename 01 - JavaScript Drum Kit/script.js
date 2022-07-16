// Create an event that listens on the whole window (when the window is active) if someone presses a key
// if that-s the case, we trigger a function that gets as a parameter (e) the event itself
window.addEventListener("keydown", function(e) {

    // We search if there is an audio element with the data-key value equal to the key value of the pressed key
    // and we assign it to a variable (same as when we select any element in the DOM and assign it to a variable)
    // so we can use it later   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    // Then we check if there actually exists an audio element with that key value
    // If it doesn-t, we return the function so nothing else happens. (We don-t want anything to happen when a user
    // clicks any of the keys that are not on the menu)
    if (!audio) {
        return
    }

    // After checking that the audio element exists, we play it
    // The problem is that if we try to press several times the key very fast, we need the audio to finish before it
    // starts playing again. To avoid that, we need to restart the audio to 0 everytime the key is pressed
    audio.currentTime = 0
    audio.play()
})