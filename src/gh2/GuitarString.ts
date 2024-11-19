import { Deque61B } from '../deque/Deque61B';
import { LinkedListDeque61B } from '../deque/LinkedListDeque61B';

export class GuitarString {
  private static readonly SAMPLING_RATE = 44100;
  private static readonly DECAY_FACTOR = 0.996;

  private buffer: Deque61B<number>;

  constructor(frequency: number) {
    const capacity = Math.round(GuitarString.SAMPLING_RATE / frequency);
    this.buffer = new LinkedListDeque61B<number>();

    // Initialize buffer with zeros
    for (let i = 0; i < capacity; i++) {
      this.buffer.addLast(0);
    }
  }

  // TODO: Implement pluck() and tic() methods
} 