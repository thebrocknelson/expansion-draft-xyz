// Function to render all teams and their unprotected players
function renderDraftBoard() {
    const container = document.getElementById('draft-container');
    
    // Clear container in case it's already filled
    container.innerHTML = '';

    // Loop through each team in your rosters.js (nbaData)
    Object.keys(nbaData).forEach(teamName => {
        const team = nbaData[teamName];
        
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `<h3>${teamName}</h3>`;

        const list = document.createElement('ul');
        team.unprotected.forEach(player => {
            const li = document.createElement('li');
            li.innerHTML = `<button onclick="draftPlayer('${player}', '${teamName}')">${player}</button>`;
            list.appendChild(li);
        });

        card.appendChild(list);
        container.appendChild(card);
    });
}

// Function to handle clicking a player
function draftPlayer(player, team) {
    const history = document.getElementById('draft-history');
    const entry = document.createElement('li');
    entry.innerText = `${player} selected from ${team}`;
    history.appendChild(entry);
    
    // Optional: Alert or log
    console.log(`Drafted: ${player}`);
}

// Run the render function when the page loads
window.onload = renderDraftBoard;
