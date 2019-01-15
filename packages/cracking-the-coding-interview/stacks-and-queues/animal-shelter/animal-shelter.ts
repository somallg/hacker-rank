/**
 * AnimalShelter
 */

abstract class Animal {
  private readonly timeStamp: number;
  private readonly name: string;

  protected constructor(name: string) {
    this.name = name;
    this.timeStamp = new Date().getTime();
  }

  public getTimeStamp(): number {
    return this.timeStamp;
  }

  public isOlderThan(other: Animal): boolean {
    return this.timeStamp < other.getTimeStamp();
  }

  public toString(): string {
    return this.name;
  }
}

// tslint:disable-next-line
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}

// tslint:disable-next-line
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

// tslint:disable-next-line
class AnimalQueue {
  private dogs: Dog[] = [];
  private cats: Cat[] = [];

  public enqueue(a: Animal): void {
    if (a instanceof Dog) {
      this.dogs.push(a);
    } else {
      this.cats.push(a);
    }
  }

  public dequeueAny(): Animal | undefined {
    if (this.dogs.length === 0) {
      return this.dequeueDogs();
    } else if (this.cats.length === 0) {
      return this.dequeueCats();
    }

    const [dog]: Dog[] = this.dogs;
    const [cat]: Cat[] = this.cats;

    if (dog.isOlderThan(cat)) {
      return this.dequeueDogs();
    }

    return this.dequeueCats();
  }

  public dequeueDogs(): Dog | undefined {
    return this.dogs.shift();
  }

  public dequeueCats(): Cat | undefined {
    return this.dogs.shift();
  }
}

function animalShelter(array: number[]): string {
  const queue: AnimalQueue = new AnimalQueue();

  array.forEach((n: number, index: number) => {
    if (n % 2 === 0) {
      queue.enqueue(new Dog(`Dog ${index}`));
    } else {
      queue.enqueue(new Cat(`Cat ${index}`));
    }
  });

  queue.dequeueAny();
  queue.dequeueCats();
  const dog: Dog | undefined = queue.dequeueDogs();

  return dog === undefined ? '' : dog.toString();
}

export { animalShelter };
