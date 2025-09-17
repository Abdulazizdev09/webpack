const _ = require("lodash")


function getComponent() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Mango", "Banana"], ", ");

    return element;
}

document.body.appendChild(getComponent());