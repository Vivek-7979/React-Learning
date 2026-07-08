// creating a own method/function to create a react element and showing in the document / webpage

function coustomRender(reactElement, container) {
    if (!container) {
        console.error('Container element not found.');
        return;
    }

    const domElement = document.createElement(reactElement.type);
    const children = reactElement.children ?? reactElement.childern ?? '';
    domElement.innerHTML = children;

    if (reactElement.props?.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }

    if (reactElement.props?.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
};

const mainContainer = document.getElementById('root');

coustomRender(reactElement, mainContainer);