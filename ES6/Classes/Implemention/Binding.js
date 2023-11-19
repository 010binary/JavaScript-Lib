class ListBinding {

    constructor(_element) {
        this.listelement = _element,
            this.textList = [];
    }

    static createListItem(text) {
        const li = document.createElement('li')
        li.textContent = text
        return li
    }

    update() {
        // Remove all element in the ul
        while (this.listelement.firstChild) {
            this.listelement.removeChild(this.listelement.firstChild)
        }

        /** Filling the Ul with the <li> tag */
        for (const text of this.textList) {
            this.listelement.appendChild(ListBinding.createListItem(text))
        }
    }
    add(text) {
        this.textList.push(text);
        this.update()
    }

    remove(index) {
        this.textList.splice(index, 1);
        this.update()
    }
}
const listBinding = new ListBinding(myList);

const run = () => listBinding.update();
