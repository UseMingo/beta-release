// Initialize leaderboard data (In a real app, this should come from a server)
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// Add player to leaderboard after correct answer
function addToLeaderboard(playerName, points) {
    leaderboard.push({ name: playerName, points: points });
    leaderboard.sort((a, b) => b.points - a.points); // Sort by points (descending)
    if (leaderboard.length > 5) leaderboard.pop(); // Keep only top 5
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// When the player answers correctly, add them to leaderboard
document.getElementById("submitAnswer").addEventListener("click", function() {
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    let playerName = "Player1"; // Replace with actual player name from session
    let points = 10; // Points for solving the puzzle (you can change this)

    if (userAnswer === randomPuzzle.answer) {
        document.getElementById("result").innerHTML = "✅ Correct! You unlocked a mystery box!";
        showMysteryBox();
        addToLeaderboard(playerName, points); // Add points to leaderboard
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong! Try again.";
    }
});

// Load the leaderboard on the leaderboard page
if (window.location.pathname.includes("leaderboard.html")) {
    const leaderboardTable = document.getElementById("leaderboardTable").getElementsByTagName('tbody')[0];

    leaderboard.forEach((player, index) => {
        let row = leaderboardTable.insertRow();
        row.innerHTML = `<td>${index + 1}</td><td>${player.name}</td><td>${player.points}</td>`;
    });
}
// Home button functionality to navigate back to the Home page (index.html)
document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to Home page
});
