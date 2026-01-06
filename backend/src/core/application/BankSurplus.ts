export function bankSurplus(cb: number) {
  if (cb <= 0) throw new Error("No surplus to bank");
  return cb;
}
