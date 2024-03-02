function swapText() {
    // Get all elements with the class name "text-to-change"
    var elements = document.getElementsByClassName("rotate_animate");

    // Check if there are any elements with the specified class
    if (elements.length > 0) {
        // Loop through each element and change its text
        for (var i = 0; i < elements.length; i++) {
            let currentText = elements[i].innerHTML;

            //Set the origin word
            let originPhrase = "...is a Charged Lake";

            //initialise the array variable
            let arrayNo = 0;
            //Make an array of options
            const phraseArray = ["...is a charged lake", "...committed to contrast"]

            // Swap the text as per your requirement
            let newText = currentText.replace(originPhrase, phraseArray[arrayNo]);

            // Assign the new text to the element
            elements[i].innerHTML = newText;

        }
    } else {
        console.log("No elements found with thfffe specified class name.");
    }
}

swapText();

