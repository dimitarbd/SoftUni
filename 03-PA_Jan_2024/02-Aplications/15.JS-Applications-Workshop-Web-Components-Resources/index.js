
class MyButton extends HTMLElement {
    constructor(text) {
        super();
    }
    connectedCallback() {
        this.createTemplate();
    }

    disconnectedCallback() {
        console.error("onDestroy");
    }

    attributeChangedCallback() {
        console.error("attr change");
    }
    fuckCallback(shit) {
        console.error('Fuck day!');        
    }
}