// Get API
var sketch = context.api()

// Get the first selected layer
var firstSelectedLayer = context.selection.firstObject()

// Get all selected layers
var sketch = context.api()
var document = sketch.selectedDocument
var selectedPage = document.selectedPage

log(selectedPage.name)

// Get all selected layers (including artboards)
var sketch = context.api()
var document = sketch.selectedDocument
var selectedLayers = document.selectedLayers

selectedLayers.iterate(function(item) {
    if (item.isArtboard) {
      log(`Artboard ${item.name}`)
    } else {
      log(item.name)
    }
})

// Display a message
context.document.showMessage("Hack attack!")

// Play a system sound
var SystemSounds = {
  Basso: "Basso",
  Blow: "Blow",
  Bottle: "Bottle",
  Frog: "Frog",
  Funk: "Funk",
  Glass: "Glass",
  Hero: "Hero",
  Morse: "Morse",
  Ping: "Ping",
  Pop: "Pop",
  Purr: "Purr",
  Sosumi: "Sosumi",
  Submarine: "Submarine",
  Tink: "Tink"
};

var sound = NSSound.soundNamed(SystemSounds.Purr)
sound.play()

// Log something
log("Hack attack!")
log(context.document.selectedPage)
