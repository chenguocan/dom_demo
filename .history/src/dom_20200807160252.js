window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node, node2) {
        console.log(node.parentNode);
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, child) {
        parent.appendChild(child);
    },
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        //const { childNodes } = node
        const array = [];
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
        // for (let i = 0; i < childNodes.length; i++) {
        //     dom.remove(childNodes[i]);
        //     array.push(childNodes[i]);
        // }
        // return array;
    },
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name, value);;

        }

    }
};