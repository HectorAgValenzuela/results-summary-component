fetch('data.json')
    .then(response => response.json())
    .then(data => {
        categoryReaction = data[0]
        categoryMemory = data[1]
        categoryVerbal = data[2]
        categoryVisual = data[3]
        console.log(data)

        // Reaction category article
        displayElement(categoryReaction)
        
        // Memory category article
        displayElement(categoryMemory)

        // Verbal category article
        displayElement(categoryVerbal)

        // Visual category article
        displayElement(categoryVisual)

        // Result section
        result = calculateResult(categoryReaction.score, categoryMemory.score, categoryVerbal.score, categoryVisual.score)
        const jsonResultElement = document.getElementById('result')
        jsonResultElement.innerHTML = 
        `${result}`
    })
    .catch(error => {
        console.error('Error:', error);
    })

function displayElement(element) {
    const jsonDataElement = document.getElementById(`${element.category}`)
    jsonDataElement.innerHTML = 
        `
        <div class="${element.category}">
            <img src="${element.icon}" alt="${element.category} icon">
            <div>${element.category}</div>
        </div>
        <div class="points"> <p><strong>${element.score}</strong> / 100</p> </div>
        `
        
}

function calculateResult(score1, score2, score3, score4){
    return Math.floor((score1+score2+score3+score4)/4)
}