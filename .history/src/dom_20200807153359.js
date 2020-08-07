window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node, node2) {
        console.log(node.parentNode);
        node.parentNode.insertBefore(node2, node.nextSibling);
    }
};