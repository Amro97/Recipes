const manager = new recipesManager()
const renderer = new Renderer()

const displayRecipes = function () {
    const ing = $('#input').val()
    $('#input').val("")
    manager.recipes(ing)
    setTimeout(function () { renderer.renderRecipe(manager.data) }, 1000)
}

$('#recipes-container').on('click', '.image', function () {
    const title = $(this).closest('div').find('li').text()
    alert(title)
})