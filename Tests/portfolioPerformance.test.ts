import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';
import { findLargestHolding } from '../src/portfolio/portfolioPerformance';
import { assetAllocationPercentage } from '../src/portfolio/portfolioPerformance';


describe('Portfolio Performance Calculation', () => {
    it('should calculate profit and percentage change correctly with gain', () => {
      const result = calculatePortfolioPerformance(10000, 12000);
      expect(result.profitOrLoss).toBe(2000);
      expect(result.percentageChange).toBe(20);
      expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $2000.00.');
    });
  
    it('should calculate loss and percentage change correctly with loss', () => {
      const result = calculatePortfolioPerformance(10000, 8000);
      expect(result.profitOrLoss).toBe(-2000);
      expect(result.percentageChange).toBe(-20);
      expect(result.performanceSummary).toBe('The portfolio has performed poorly with a change of -20.00%.');
    });
  
    it('should calculate no change correctly', () => {
      const result = calculatePortfolioPerformance(10000, 10000);
      expect(result.profitOrLoss).toBe(0);
      expect(result.percentageChange).toBe(0);
      expect(result.performanceSummary).toBe('The portfolio has performed poorly with a change of 0.00%.');
    });
});


describe('Find Largest Holding', () => {
    it('should return the asset with the largest value', () => {
      const assets = [
        { name: 'Stocks', value: 5000 },
        { name: 'Bonds', value: 8000 },
        { name: 'Real Estate', value: 12000 },
      ];
      
      const largestHolding = findLargestHolding(assets);
      expect(largestHolding).toEqual({ name: 'Real Estate', value: 12000 });
    });
  
    it('should return null for an empty portfolio', () => {
      const assets: any[] = [];
      const largestHolding = findLargestHolding(assets);
      expect(largestHolding).toBeNull();
    });
});


describe('Asset Allocation Percentage', () => {
    it('should calculate percentage allocation correctly', () => {
      const assets = [
        { name: 'Stocks', value: 5000 },
        { name: 'Bonds', value: 5000 },
      ];
  
      const allocation = assetAllocationPercentage(assets);
      expect(allocation).toEqual([
        { name: 'Stocks', percentage: 50.00 },
        { name: 'Bonds', percentage: 50.00 },
      ]);
    });
  
    it('should handle cases with one asset', () => {
      const assets = [{ name: 'Stocks', value: 10000 }];
      const allocation = assetAllocationPercentage(assets);
      expect(allocation).toEqual([{ name: 'Stocks', percentage: 100.00 }]);
    });
  
    it('should handle empty portfolio', () => {
      const assets: any[] = [];
      const allocation = assetAllocationPercentage(assets);
      expect(allocation).toEqual([]);
    });
});