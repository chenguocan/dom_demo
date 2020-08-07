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
            return node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name, value);;

        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ("innerText" in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ("innerText" in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style(node, name, value) {
        if (arguments.length === 2) {
            if (typeof name === "string") {
                return node.style[name];
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key];
                }
            }
        } else if (arguments.length === 3) {
            node.style[name] = value;
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        has(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, off);
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    parent(node) {
        return node.parentNode;
    },
    children(node) {
        return node.children;
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    }

};