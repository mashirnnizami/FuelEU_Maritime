export function compareRoutes(baseline: number, comparison: number) {
  const percentDiff = ((comparison / baseline) - 1) * 100;
  return {
    percentDiff,
    compliant: comparison <= baseline
  };
}
