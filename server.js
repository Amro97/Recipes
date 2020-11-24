const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, response) {
        if (err) {
            throw err;
        }
        const recipes = JSON.parse(data).results.map(r => {
            return {
                title: r.title,
                ingredients: r.ingredients,
                href: r.href,
                thumbnail: r.thumbnail
            }
        })
        res.send(recipes)
    })
})

const port = 8080
app.listen(port, function () {
    console.log(`server running on port ${port}`)
})