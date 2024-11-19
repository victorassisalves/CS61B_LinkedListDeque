import { Deque61B } from './Deque61B';

export class LinkedListDeque61B<T> implements Deque61B<T> {
  private class Node {
  item: T;
  prev: Node | null;
  next: Node | null;

  constructor(item: T, prev: Node | null = null, next: Node | null = null) {
    this.item = item;
    this.prev = prev;
    this.next = next;
  }
}

  private sentinel: Node;
  private size_: number;

constructor() {
  // Initialize sentinel node with a dummy value
  this.sentinel = new Node(null as unknown as T);
  this.sentinel.next = this.sentinel;
  this.sentinel.prev = this.sentinel;
  this.size_ = 0;
}

addFirst(item: T): void {
  // TODO: Implement
}

addLast(item: T): void {
  // TODO: Implement
}

isEmpty(): boolean {
  // TODO: Implement
  return false;
}

size(): number {
  // TODO: Implement
  return 0;
}

toList(): T[] {
  // TODO: Implement
  return [];
}

removeFirst(): T | null {
  // TODO: Implement
  return null;
}

removeLast(): T | null {
  // TODO: Implement
  return null;
}

get(index: number): T | null {
  // TODO: Implement
  return null;
}

getRecursive(index: number): T | null {
  // TODO: Implement
  return null;
}
} 