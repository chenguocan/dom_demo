const div = dom.create("<td></td>");
dom.after(test, div);
const div3 = dom.create("<div id='parent'>我是爸爸</div>");
console.log(div3);
dom.append(div, div3);
const nodes = dom.empty(window.empty);
console.log(nodes);
dom.attr(test, "title", "hi chen");
const title = dom.attr(test, "title");
console.log(`title:${title}`);
const text = dom.text(test, "你好啊");
console.log(text);
dom.style(test, { border: "1px solid red ", color: "blue" })
console.log(dom.style(test, "border"));