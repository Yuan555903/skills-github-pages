document.getElementById("searchButton").addEventListener("click", function() {
    const foodInput = document.getElementById("foodInput").value.trim();
    const resultElement = document.getElementById("result");

    if (!foodInput) {
        resultElement.textContent = "Please enter a food name.";
        return;
    }

    let found = false;
    for (const category in fodmapData.low) {
        if (fodmapData.low[category].includes(foodInput)) {
            resultElement.textContent = `${foodInput} is LOW FODMAP.`;
            resultElement.style.color = "green";
            found = true;
            break;
        }
    }

    if (!found) {
        for (const category in fodmapData.high) {
            if (fodmapData.high[category].includes(foodInput)) {
                resultElement.textContent = `${foodInput} is HIGH FODMAP.`;
                resultElement.style.color = "red";
                found = true;
                break;
            }
        }
    }

    if (!found) {
        resultElement.textContent = "Food not found in the database.";
        resultElement.style.color = "gray";
    }
});
