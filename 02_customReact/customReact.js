function customRender(reactElement, container) {
    // this code will be very difficult to wite if you have 1 attribute in props or 2 or 3 in some objects
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement)

    /* better version */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const key in reactElement.props) {
        if(key === 'children') continue;
        domElement.setAttribute(key, reactElement.props[key])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click to visit Google"
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
