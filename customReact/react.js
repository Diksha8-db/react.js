function customRender(element,container){
    /*
    let domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute('href',element.props.href);
    domElement.setAttribute('target',element.props.target);


    container.appendChild(domElement);
    */

    let domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    for(let prop in element.props){
        if(prop == "children") continue;
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google',
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);