export class Excel {
    constructor(selectorrrr, options) {
        this.$el = document.querySelector(selectorrrr)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        $root.textContent = 'TEST'

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}