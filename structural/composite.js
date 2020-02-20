class Component {
    constructor(name) {
        this._name = name;
    }

    getNodeName() {
        return this._name;
    }

    getType() {}

    addChild(component) {}

    removeChildByName(componentName) {}

    removeChildByIndex(index) {}

    getChildByName(componentName) {}

    noOfChildren() {}

    static logTreeStructure(root) {
        let treeStructure = '';

        function traverse(node, indent = 0) {
            treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
            indent++;

            for (let i = 0, length = node.noOfChildren(); i < length; i++) {
                traverse(node.getChildByIndex(i), indent);
            }
        }

        traverse(root);
        return treeStructure;
    }
}

class Leaf extends Component {
    constructor(name) {
        super(name);
        this._type = 'Leaf Node';
    }

    getType() {
        return this._type;
    }

    noOfChildren() {
        return 0;
    }
}

class Composite extends Component {
    constructor(name) {
        super(name);
        this._type = 'Composite Node';
        this._children = [];
    }

    getType() {
        return this._type;
    }

    addChild(component) {
        this._children = [...this._children, component];
    }

    removeChildByName(componentName) {
        this._children = [...this._children].filter(component => component.getNodeName() !== componentName);
    }

    removeChildByIndex(index) {
        this._children = [...this._children.slice(0, index), ...this._children.slice(index + 1)];
    }

    getChildByName(componentName) {
        return this._children.find(component => component.name === componentName);
    }

    getChildByIndex(index) {
        return this._children[index];
    }

    noOfChildren() {
        return this._children.length;
    }
}

const tree = new Composite('root');
tree.addChild(new Leaf('left'));

console.log(Component.logTreeStructure(tree));
//console.log(tree.getType());