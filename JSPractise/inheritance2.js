class Tree {
    constructor(height, location) {
        this.height = height;
        this.location = location;
    }

    about() {
        return `Height: ${this.height} Location: ${this.location}`;
    }
}

class DeciduousTree extends Tree {
    constructor(height, location, leafColor) {
        super(height, location);
        this.leafColor = leafColor;
    }

    about() {
        return `${super.about()} Leaf Color: ${this.leafColor}`;
    }
}

// Example usage
const tree = new Tree(15, 'park');
console.log(tree.about()); // "Height: 15 Location: park"

const deciduousTree = new DeciduousTree(20, 'forest', 'green');
console.log(deciduousTree.about()); // "Height: 20 Location: forest Leaf Color: green"
