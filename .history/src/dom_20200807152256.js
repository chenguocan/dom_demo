window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string;
        return container.children[0];
    }
};