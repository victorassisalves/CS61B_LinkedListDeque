export interface Deque61B<T> {
  /** Adds an item of type T to the front of the deque. */
  addFirst(item: T): void;

  /** Adds an item of type T to the back of the deque. */
  addLast(item: T): void;

  /** Returns true if deque is empty, false otherwise. */
  isEmpty(): boolean;

  /** Returns the number of items in the deque. */
  size(): number;

  /** Returns a list of the items in the deque from front to back. */
  toList(): T[];

  /** Removes and returns the item at the front of the deque. 
   * If no such item exists, returns null. */
  removeFirst(): T | null;

  /** Removes and returns the item at the back of the deque. 
   * If no such item exists, returns null. */
  removeLast(): T | null;

  /** Gets the item at the given index. If no such item exists, returns null. */
  get(index: number): T | null;

  /** Same as get, but uses recursion. */
  getRecursive(index: number): T | null;
} 