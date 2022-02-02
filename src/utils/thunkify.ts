export default function thunkify<T>(value: T) {
  return () => value;
}
