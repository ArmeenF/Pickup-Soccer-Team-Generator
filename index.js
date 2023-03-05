function randomizeGoalkeepers() {
    const goalkeepers = [];

    // Get all input fields and add their values to the goalkeepers array
    for (let i = 1; i <= 4; i++) {
        const goalkeeperInput = document.getElementById(`goalkeeper${i}`);
        const name = goalkeeperInput.value.trim();
        if (name !== '') {
            goalkeepers.push(name);
        }
    }

    // Shuffle the names array
    for (let i = goalkeepers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goalkeepers[i], goalkeepers[j]] = [goalkeepers[j], goalkeepers[i]];
    }

    // Clear any existing team lists
    const team1GoalkeeperList = document.getElementById('team1Goalkeepers');
    const team2GoalkeeperList = document.getElementById('team2Goalkeepers');
    team1GoalkeeperList.innerHTML = '';
    team2GoalkeeperList.innerHTML = '';

    // Add the first 2 names to team 1 and the rest to team 2
    for (let i = 0; i < 4; i++) {
        const nameLi = document.createElement('li');
        nameLi.innerText = goalkeepers[i];
        if (i < 2) {
            team1GoalkeeperList.appendChild(nameLi);
        } else {
            team2GoalkeeperList.appendChild(nameLi);
        }
    }
}
