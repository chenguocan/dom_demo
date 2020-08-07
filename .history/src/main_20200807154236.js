const div = dom.create("<td></td>");
dom.after(test, div);
const div3 = dom.create("<div id='parent'>我是爸爸</div>");
dom.wrap(div3, div)