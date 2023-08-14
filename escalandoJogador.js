function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    "Escalar " + name + " como " + position + " camisa número " + number + " ?"
  );

  if (confirmation) {
    const teamList = document.getElementById("team-list");
    const playerIten = document.createElement("li");
    playerIten.id = "player-" + number;
    playerIten.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerIten);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador : " + playerToRemove.innerText + " ?"
  );
  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
