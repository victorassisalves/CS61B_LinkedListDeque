import { Deque61B } from '../src/deque/Deque61B';
import { LinkedListDeque61B } from '../src/deque/LinkedListDeque61B';

describe('LinkedListDeque61B', () => {
  let deque: Deque61B<string>;

  beforeEach(() => {
    deque = new LinkedListDeque61B<string>();
  });

  test('addFirstTestBasic', () => {
    deque.addFirst("front");
    expect(deque.toList()).toEqual(["front"]);
  });

  test('addLastTestBasic', () => {
    deque.addLast("back");
    expect(deque.toList()).toEqual(["back"]);
  });

  // TODO: Add more tests
}); 