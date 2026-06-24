function checkLetter() {
    const input = document.getElementById("letter").value;
    const result = document.getElementById("result");

    if (input.length !== 1 || !/^[a-zA-Z]$/.test(input)) {
        result.innerHTML = "❌ Please enter a single alphabet.";
        return;
    }

    const ch = input.toLowerCase();

    if ("aeiou".includes(ch)) {
        result.innerHTML = `✅ ${input.toUpperCase()} is a VOWEL`;
    } else {
        result.innerHTML = `✅ ${input.toUpperCase()} is a CONSONANT`;
    }
}

function clearInput() {
    document.getElementById("letter").value = "";
    document.getElementById("result").innerHTML = "";
}