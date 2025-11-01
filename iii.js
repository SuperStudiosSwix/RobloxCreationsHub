const proxy = "https://corsproxy.io/?";
const universeId = 109220432684145; 

async function updateStats() {
  try {
    const response = await fetch(`${proxy}https://games.roblox.com/v1/games?universeIds=${universeId}`);
    const data = await response.json();
    const game = data.data[0];

    document.getElementById("active-count").textContent = game.playing;
    document.getElementById("like-count").textContent = game.favoritedCount || game.favorites || 0;
  } catch (error) {
    console.error("Ошибка при получении данных Roblox:", error);
  }
}


updateStats();


setInterval(updateStats, 30000);
