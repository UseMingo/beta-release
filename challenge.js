const puzzles = [
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "I am not alive, but I can grow. I don’t have lungs, but I need air. What am I?", answer: "fire" },
    { question: "The more of me you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "I can be cracked, made, told, and played. What am I?", answer: "joke" }
];

let randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
document.getElementById("puzzle").innerText = randomPuzzle.question;

document.getElementById("submitAnswer").addEventListener("click", function() {
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    if (userAnswer === randomPuzzle.answer) {
        document.getElementById("result").innerHTML = "✅ Correct! You unlocked a mystery box!";
        showMysteryBox();
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong! Try again.";
    }
});

document.getElementById("giveUp").addEventListener("click", function() {
    document.getElementById("result").innerHTML = `😞 The correct answer was: <b>${randomPuzzle.answer}</b>`;
});

function showMysteryBox() {
    let mysteryBox = document.getElementById("mysteryBox");
    let boxImage = document.getElementById("boxImage");
    let rewardText = document.getElementById("rewardText");

    mysteryBox.classList.remove("hidden");
    boxImage.src = "assets/box-closed.jpg"; // Closed box image
    rewardText.innerHTML = "";

    setTimeout(() => {
        boxImage.classList.add("open");
        boxImage.src = "assets/box-open.jpg"; // Open box image
        rewardText.innerHTML = "🎉 You won a virtual reward!";
    }, 1000);
}

document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to home page
});
