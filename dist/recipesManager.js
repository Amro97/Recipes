class recipesManager {
    constructor() {
        this.data
    }

    recipes(ing) {
        $.get(`recipes/${ing}`, (data) =>  {
            this.data = data
        })
    }
}