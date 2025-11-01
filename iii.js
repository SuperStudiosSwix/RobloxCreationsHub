const proxy = "https://corsproxy.io/?";
const universeId = 109220432684145; 

async function updateStats() {
  try {
    const response = await fetch(`${proxy}https://games.roblox.com/v1/games?universeIds=${universeId}`);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const game = data.data[0];
      document.getElementById("active-count").textContent = game.playing ?? "N/A";
      document.getElementById("like-count").textContent = game.favoritedCount ?? "N/A";
    } else {
      console.warn("Данные из API Roblox пустые или отсутствуют");
      document.getElementById("active-count").textContent = "N/A";
      document.getElementById("like-count").textContent = "N/A";
    }
  } catch (error) {
    console.error("Ошибка при получении данных Roblox:", error);
    document.getElementById("active-count").textContent = "Ошибка";
    document.getElementById("like-count").textContent = "Ошибка";
  }
}



updateStats();


setInterval(updateStats, 10000);

