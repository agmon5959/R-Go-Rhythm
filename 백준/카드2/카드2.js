// [실버4] https://www.acmicpc.net/problem/2164
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  shift() {
    console.log(this.head.next);
    this.head = this.head.next;
    this.length--;
  }
}

function getResult() {
  const linkedList = new LinkedList();
  Array.from({ length: input[0] }, (_, idx) => linkedList.push(idx + 1));
  while (linkedList.length !== 1) {
    linkedList.shift();
    linkedList.push(linkedList.head.value);
    linkedList.shift();
  }

  return linkedList.head.value;
}

console.log(getResult());
