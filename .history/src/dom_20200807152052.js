window.dom = {
    create(tagName) {
        const div = document.createElement("div");
        div.innerHTML =
       return div.children[0];
    }
};