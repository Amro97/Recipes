class Renderer{

    renderRecipe(recipes){
        const recipesOBJ = {recipes}
        const source = $("#recipes-template").html()
        const template = Handlebars.compile(source)
        const recipesHTML = template(recipesOBJ)
        $('#recipes-container').empty().append(recipesHTML)
    }
}