fetch('data.json')
    .then(response => response.json())
    .then(data => {
        categoryReaction = data[0]
        categoryMemory = data[1]
        categoryVerbal = data[2]
        categoryVisual = data[3]
        console.log(data)

        // Reaction category article
        const jsonReactionElement = document.getElementById('reaction')
        jsonReactionElement.innerHTML = 
        `
        <div class="reaction">
            <img src="${categoryReaction.icon}" alt="Reaction icon">
            <div>${categoryReaction.category}</div>
        </div>
        <div class="points"> <p><strong>${categoryReaction.score}</strong> / 100</p> </div>
        `
        
        // Memory category article
        const jsonMemoryElement = document.getElementById('memory')
        jsonMemoryElement.innerHTML = 
        `
        <div class="memory">
            <img src="${categoryMemory.icon}" alt="Reaction icon">
            <div>${categoryMemory.category}</div>
        </div>
        <div class="points"> <p><strong>${categoryMemory.score}</strong> / 100</p> </div>
        `

        // Verbal category article
        const jsonVerbalElement = document.getElementById('verbal')
        jsonVerbalElement.innerHTML = 
        `
        <div class="verbal">
            <img src="${categoryVerbal.icon}" alt="Reaction icon">
            <div>${categoryVerbal.category}</div>
        </div>
        <div class="points"> <p><strong>${categoryVerbal.score}</strong> / 100</p> </div>
        `

        // Visual category article
        const jsonVisualElement = document.getElementById('visual')
        jsonVisualElement.innerHTML = 
        `
        <div class="visual">
            <img src="${categoryVisual.icon}" alt="Reaction icon">
            <div>${categoryVisual.category}</div>
        </div>
        <div class="points"> <p><strong>${categoryVisual.score}</strong> / 100</p> </div>
        `

        // Result section
        result = calculateResult(categoryReaction.score, categoryMemory.score, categoryVerbal.score, categoryVisual.score)
        const jsonResultElement = document.getElementById('result')
        jsonResultElement.innerHTML = 
        `${result}`
    })
    .catch(error => {
        console.error('Error:', error);
    })

function calculateResult(score1, score2, score3, score4){
    return Math.floor((score1+score2+score3+score4)/4)
}