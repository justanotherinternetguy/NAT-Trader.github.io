function convertValues() {
  const moneyInput = document.getElementById("money");
  const gemsInput = document.getElementById("gems");
  const researchInput = document.getElementById("research");
  const resultDiv = document.getElementById("result");
  
  const money = parseInt(moneyInput.value) || 0;
  const gems = parseInt(gemsInput.value) || 0;
  const research = parseInt(researchInput.value) || 0;
  
  // const convertedMoney = research * 5 + gems * 10000;
  // const convertedGems = money / 10000 + research / 2000;
  // const convertedResearch = money / 5 + gems * 2000;


  let result = "Converted Values:<br>";

  if (research > 0) {
    const convertedMoney = research * 5;
    const convertedGems = research / 2000;
    result += `Money: ${convertedMoney}, Gems: ${convertedGems}<br>`;
  }

  if (gems > 0) {
    const convertedMoney = gems * 10000;
    const convertedResearch = gems * 2000;
    result += `Money: ${convertedMoney}, Research Points: ${convertedResearch}<br>`;
  }

  if (money > 0) {
    const convertedGems = money / 10000;
    const convertedResearch = money / 5;
    result += `Gems: ${convertedGems}, Research Points: ${convertedResearch}<br>`;
  }

  resultDiv.innerHTML = result;
}

