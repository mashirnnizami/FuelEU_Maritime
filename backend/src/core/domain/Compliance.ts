export const TARGET_INTENSITY = 89.3368;

export function computeCB(
  ghgIntensity: number,
  fuelConsumption: number
): number {
  const energyMJ = fuelConsumption * 41000;
  return (TARGET_INTENSITY - ghgIntensity) * energyMJ;
}
