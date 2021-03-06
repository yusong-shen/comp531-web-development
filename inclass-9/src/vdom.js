//
// Inclass Virtual DOM Exercise
// ============================
//
// You need to implement createElement() and updateElement()
//
;(function(exports) {

'use strict'

// "global" task id counter
let _taskId = 1;

function h(tag, props, ...children) {
    return { tag, props: props ? props : { }, 
        children: Array.isArray(children[0]) ? children[0] : children }
}

function createElement(node) {
	// console.log('Create element called for', node)
	// create the element and return it to the caller
	// the node might have event listeners that need to be registered
	// the node might have children that need to be created as well
    // perform a tree traversal
    // leaf
    if (!node.children) {
        var leaf = document.createTextNode(node)
        // console.log(node)
        return leaf
    }
    var element = document.createElement(node.tag);
    node.children.forEach(function (item) {
        // console.log(item)
        var childElement = createElement(item)
        element.appendChild(childElement)
    });
    // loop through property object
    Object.keys(node.props).forEach(function (key, index) {
        // console.log('att : ' + key)
        // console.log('value : ' + node.props[key])
        var attName = key
        if (key === 'className') {
            attName = 'class'
        }
        if (key === 'onClick') {
            attName = 'onclick'
        }
        var att = document.createAttribute(attName)
        if (key !== 'onClick') {
            att.value = node.props[key]
            element.setAttributeNode(att)
        } else {
            element.setAttributeNode(att)
            var func = node.props[key]
            // register event listener
            element.onclick = function(event) {
                func(event)
                update()
            }
        }
    })

	return element;
}

// only have different children won't be considered as changed
function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
            (typeof node1 === 'string' && node1 !== node2) ||
            node1.tag !== node2.tag ||
            (node1.props && node2.props && 
            	node1.props.id && node2.props.id && 
            	node1.props.id != node2.props.id)
}

function updateElement(parent, newNode, oldNode, index=0) {
	// index will be needed when you traverse children
	// add the new node to the parent DOM element if
	// the new node is different from the old node 
	// at the same location in the DOM.
	// ideally we also handle inserts, but ignore that functionality for now.
    // YS : index is used to correspond from VDOM oldNode to parent's child DOM

    if (!oldNode) {
        parent.appendChild(createElement(newNode))
    } else {
    	console.log('update element that may have changed')
    	// you can use my changed(node1, node2) method above
    	// to determine if an element has changed or not     
        if (changed(newNode, oldNode)) {
            // insert element right after oldNode
            console.log('Change happen!')
            // var element = createElement(newNode)
            // Array.prototype.splice(parent.children, index, 0, element)
            // remove the oldNode's correponding DOM from parent
            parent.removeChild(parent.childNodes[index])
            // append the newNode's corresponding DOM to parent
            parent.appendChild(createElement(newNode))
        } else {
            // be sure to also update the children!
            // append or modified
            if (newNode.children >= oldNode.children) {
                console.log('newNode children : ', newNode.children)
                console.log('oldNode children : ', oldNode.children)                
                newNode.children.forEach( function (newChildNode, childInd) {
                    var oldChildNode = oldNode.children[childInd]
                    updateElement(parent.childNodes[index], newChildNode, oldChildNode, childInd)
                })
            } 
            // delete
            else {
                console.log('remove!')
                // remove the oldNode's correponding DOM from parent
                parent.removeChild(parent.childNodes[index])
                // append the newNode's corresponding DOM to parent
                parent.appendChild(createElement(newNode))
            }
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
	// compare the current vdom with the original vdom for updates
    updateElement(h.mounted.root, h.mounted.current, h.mounted.original)
    h.mounted.original = deepCopy(h.mounted.current)
})

h.mount = (root, component) => {
    // we keep a copy of the original virtual DOM so we can diff it later for updates
    const originalComponent = deepCopy(component)
    h.mounted = { root: root, current: component, original: originalComponent }
    updateElement(root, originalComponent)
}

exports.h = h

})(window);