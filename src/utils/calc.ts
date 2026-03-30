export function calculateDiscount(total: number, discountRate: number): number {
  return total - (total * discountRate);
}