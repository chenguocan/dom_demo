window.dom = {
    create(string) {
        const div = document.createElement("template");
        div.innerHTML = string;
        return div.children[0];
    }
};