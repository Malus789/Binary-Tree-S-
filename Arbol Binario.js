console.log("mesagge");
const arrDeleted = [];
let nodeToDelete = null;


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.counter = 0;
    }

}

class BinarySearchTree {
    constructor(data) {
        this.root = null;
        
    }

    insert(data){
        let newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }


    insertNode(node, newNode){
        if (newNode.data < node.data) { 
            if (node.left === null) {
                node.left = newNode;
                node.left.parent = node;
                node.left.counter += 1;
                    } else {
                this.insertNode(node.left, newNode);
            }
            
        } else {//right

            if (node.right === null) {
                node.right = newNode;
                node.right.parent = node;
                node.right.counter += 1;
                    } else {
                this.insertNode(node.right, newNode);
                
            }      
        } 
    }


    inOrder(node){
        if (node !== null) {
            this.inOrder(node.left);
            //do something
            console.log(node.data);
            this.inOrder(node.right);
        }   
    }

    preOrder(node){
        if (node !== null) {
            //do something
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }   
    }

    postOrder(node){
        if (node !== null) {           
            this.postOrder(node.left);
            this.postOrder(node.right);
            //do something
            console.log(node.data);
        }   
    }

    searchNode(node, dataToBeFound){

        if (node === null) { return null; }

        else if (dataToBeFound < node.data){
           return this.searchNode(node.left, dataToBeFound);
           
        } else if (dataToBeFound > node.data) {
           return this.searchNode(node.right, dataToBeFound);

        } else {

            nodeToDelete = node;
            arrDeleted.length = 0;
            return node;
        }
    }

    deleteNode2 (node) {        
                
            
        if (node !== null) {
            
            
            this.deleteNode(node.left);
            
            arrDeleted.push(node.data);
            console.log(node.data);

            this.deleteNode(node.right);
            
            console.log('Nodo a Borrar ' + nodeToDelete.data);

                //Si el nodo a borrar es hijo izquierdo
                if (nodeToDelete.data === nodeToDelete.parent.left.data) {
                    nodeToDelete.parent.left = null;
                    console.log('El Nodo a borrar es hijo izquierdo');

                    for (let i=0; i<arrDeleted.length; i++) {
                        if (arrDeleted[i] !== nodeToDelete.data) {
                        console.log('imprimo el array: ' + arrDeleted[i]);
                        BST.insert(arrDeleted[i]);
                        }
                    }
                } else {
                    nodeToDelete.parent.right = null;
                    console.log('El Nodo a borrar es hijo derecho');

                    for (let i=0; i<arrDeleted.length; i++) {
                        if (arrDeleted[i] !== nodeToDelete.data) {
                        console.log('imprimo el array: ' + arrDeleted[i]);
                        BST.insert(arrDeleted[i]);
                        }
                    }
                }
        }  
        else { console.log('termino 2'); }
    
        
    }

    deleteNode (node) {        
                
            
            if (node !== null) {
                
                
                this.deleteNode(node.left);
                
                arrDeleted.push(node.data);
                console.log(node.data);

                this.deleteNode(node.right);

                console.log('termino');
            }  
            
            else { console.log('termino 2'); }
        
            
    }


}

const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);

BST.inOrder(BST.root);

