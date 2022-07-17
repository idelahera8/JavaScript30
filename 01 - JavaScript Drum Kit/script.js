// We create two events to listen for any key presses. One of them is in charge of
// making the audio play and the other of making the pressed key highlight
window.addEventListener("keydown", addAudio)
window.addEventListener("keydown", addHighlight)

// Create a third event that listens to when a key is up (no longer pressed) to
// remove the highlight when that happens
window.addEventListener("keyup", removeHighlight)

// This function selects the audio element that has the same data-key value as the
// keyCode of the pressed key. We check if the audio element exists (there are only
// audios associated to certain keys) and then start the audio from the begining
// every time it is pressed and play the key
function addAudio(element) {
    const audio = document.querySelector(`audio[data-key="${element.keyCode}"]`)
    if (!audio) {
        return
    }
    audio.currentTime = 0
    audio.play()
}

// Select any div element with the same data-key value as the keyCode of the pressed
// key. Check if the key element exists (there are only divs associated to certain
// keys) and then add the class "playing" which contains the highlight css
function addHighlight(element) {
    const key = document.querySelector(`div[data-key="${element.keyCode}"]`)
    if (!key) {
        return
    }
    key.classList.add("playing")
}

// Select any div element with the same data-key value as the keyCode of the no-longer
// pressed key. Check if the key element exists (there are only divs associated to 
// certain keys) and then remove the class "playing" which contains the highlight css
function removeHighlight(element) {
    const key = document.querySelector(`div[data-key="${element.keyCode}"]`)
    if (!key) {
        return
    }
    key.classList.remove("playing")
}