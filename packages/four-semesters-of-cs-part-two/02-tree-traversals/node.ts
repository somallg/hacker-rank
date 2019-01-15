interface Node<T> {
  value: T;
  left: Node<T> | undefined;
  right: Node<T> | undefined;
}

export { Node };
