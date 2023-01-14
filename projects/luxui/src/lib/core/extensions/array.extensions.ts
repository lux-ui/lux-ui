export {};

//@ts-ignore
Array.prototype.fromLength = function (length: number): number[] {
  return Array.from({ length }, (_, i) => i + 1);
};
