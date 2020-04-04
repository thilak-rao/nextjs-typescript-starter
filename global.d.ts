// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyType = any;

interface ObjectWithParams<T = FixMeLaterType> {
  readonly [key: string]: T;
}
