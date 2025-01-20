interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
  ): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    const performanceSummary = percentageChange > 0 
      ? `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.` 
      : `The portfolio has performed poorly with a change of ${percentageChange.toFixed(2)}%.`;
  
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
}
  
interface Asset {
    name: string;
    value: number;
}
  
export function findLargestHolding(assets: Asset[]): Asset | null {
    if (assets.length === 0) return null;
    
    return assets.reduce((maxAsset, currentAsset) => 
      currentAsset.value > maxAsset.value ? currentAsset : maxAsset
    );
}

export function assetAllocationPercentage(assets: Asset[]): { name: string; percentage: number }[] {
    const totalValue = assets.reduce((total, asset) => total + asset.value, 0);
    
    return assets.map((asset) => ({
      name: asset.name,
      percentage: parseFloat(((asset.value / totalValue) * 100).toFixed(2)),
    }));
}