export default function calPercentChange(targetPrice, currentPrice) {
  const priceChangePercentage =
    ((targetPrice - currentPrice) / currentPrice) * 100;
  return priceChangePercentage;
}
