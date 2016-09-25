//
// Inclass Virtual DOM Exercise
// ============================
// @author sep1
//
;(function(exports) {

'use strict'

function h(tag, props, ...children) {
    return { tag, props: props ? props : { }, 
        children: Array.isArray(children[0]) ? children[0] : children }
}

function createElement(node) {
    if (typeof node === "string") {
        return document.createTextNode(node)
    }
    var el = document.createElement(node.tag)
    Object.keys(node.props).forEach(prop => {
        if (prop.substring(0,2) === "on") {
            el.addEventListener(prop.substring(2).toLowerCase(), (evt) => {
                // after the client event handler executes we need to update the DOM
                node.props[prop](evt)
                update()
            })
        } else {
            el.setAttribute(prop.replace("className", "class"), node.props[prop])
        }
    })

    node.children.map(createElement).forEach(el.appendChild.bind(el))
    return el
}

function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
            (typeof node1 === 'string' && node1 !== node2) ||
            node1.tag !== node2.tag ||
            (node1.props && node2.props && 
            	node1.props.id && node2.props.id && 
            	node1.props.id != node2.props.id)
}

function updateElement(parent, newNode, oldNode, index=0) {
    if (!oldNode) {
        parent.appendChild(createElement(newNode))
    } else if (!newNode) {
        if (parent.childNodes[index]) {
            parent.removeChild(parent.childNodes[index])
        }
    } else if (changed(newNode, oldNode)) {
        parent.replaceChild(createElement(newNode), parent.childNodes[index])
    } else if (newNode.tag) {
        const newLen = newNode.children.length
        const oldLen = oldNode.children.length
        for (let i = 0; i < newLen || i < oldLen; ++i) {
            updateElement(parent.childNodes[index],
                newNode.children[i], oldNode.children[i], i)
        }
    }
}

const deepCopy = (obj) => {
    if (obj === null || typeof(obj) !== 'object')
        return obj;
    const props = {}
    if (obj.props) {
        for (let p in obj.props) {
            props[p] = obj.props[p]
        }
    }
    return h(obj.tag, props,
        Array.isArray(obj.children) ? obj.children.map(deepCopy) : obj.children)
}

const update = () => requestAnimationFrame(() => {
    updateElement(h.mounted.root, h.mounted.current, h.mounted.original)
    h.mounted.original = deepCopy(h.mounted.current)
})

h.mount = (root, component) => {
    const originalComponent = deepCopy(component)
    h.mounted = { root: root, current: component, original: originalComponent }
    updateElement(root, originalComponent)
}

exports.h = h

})(window);