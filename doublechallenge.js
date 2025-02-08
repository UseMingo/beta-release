function startChallenge(challengeName) {
    // Here you can add logic to display challenge details, start a timer, etc.
    alert(`You have started the ${challengeName}!`);
    // Redirect to a page with the challenge details or show a modal with more info
    window.location.href = `challenge-${challengeName.toLowerCase().replace(" ", "-")}.html`; // Redirect to a specific challenge page
}
