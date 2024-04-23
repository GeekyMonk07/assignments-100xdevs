import React from 'react';

const Assignment3 = () => {
    const reactElement = {
        type: 'a',
        props: {
            href: 'https://google.com',
            children: 'Click me to visit Google!',
        },
    };

    const generateHtml = (element) => {
        const { type, props } = element;
        const children = props.children || '';
        const attributes = Object.keys(props)
            .filter(prop => prop !== 'children')
            .map(prop => `${prop}="${props[prop]}"`)
            .join(' ');

        return `<${type} ${attributes}>${children}</${type}>`;
    };

    const customRender = (element, containerId) => {
        const html = generateHtml(element);
        const container = document.getElementById(containerId);
        container.innerHTML = html;
    };

    React.useEffect(() => {
        customRender(reactElement, 'root');
    }, []);

    return (
        <div id="root"></div>
    );
};

export default Assignment3;
