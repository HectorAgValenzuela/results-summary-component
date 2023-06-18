fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const category = data[0].category
        console.log(data)
        console.log(category)

        const jsonDataElement = document.getElementById('json-data')
        jsonDataElement.innerHTML = `${category}`
    })
    .catch(error => {
        console.error('Error:', error);
    })

