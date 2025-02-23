// 1
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// For cancelled input show “Canceled.”
// If the word’s length is odd - show the middle character.If word’s length is even - show the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

while (true) {
    input = prompt("Enter the word.")

    if (input == "Canceled.") {
        break;
    } else if (validateInput(input)) {
        if (input.length % 2 == 0) {
            result = input.substring(Math.floor(input.length / 2), Math.floor(input.length / 2) + 2)
        } else {
            result = input[Math.floor(input.length / 2)]
        }
        alert(result)
    } else {
        alert("Invalid value")
    }
}

function validateInput(string) {
    if (string == null) return false;
    return string.replaceAll(" ", "") != ""
}