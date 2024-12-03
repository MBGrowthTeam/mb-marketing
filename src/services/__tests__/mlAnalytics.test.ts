import { getPredictions, getAnalyticsMetrics } from '../mlAnalytics';
import { bigQueryClient, vertexAIClient } from '../config';

jest.mock('../config', () => ({
  bigQueryClient: {
    query: jest.fn(),
  },
  vertexAIClient: {
    preview: {
      getModel: jest.fn().mockReturnValue({
        predict: jest.fn()
      })
    }
  }
}));

describe('ML Analytics Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPredictions', () => {
    it('should return valid prediction data', async () => {
      const mockUserData = {
        recentActivity: { pageViews: 10 },
        demographics: { companySize: 200 },
        interactions: { emailClicks: 5 }
      };

      const mockPrediction = {
        response: {
          predictions: [{
            score: 0.85,
            confidence: 0.92
          }]
        }
      };

      vertexAIClient.preview.getModel().predict.mockResolvedValue(mockPrediction);

      const result = await getPredictions(mockUserData);

      expect(result).toHaveProperty('leadScore');
      expect(result).toHaveProperty('confidence');
      expect(result).toHaveProperty('factors');
      expect(Array.isArray(result.factors)).toBe(true);
    });
  });

  describe('getAnalyticsMetrics', () => {
    it('should return analytics metrics with real-time data', async () => {
      const mockQueryResult = [[{
        realtime_users: 150,
        conversion_rate: 2.8,
        avg_engagement: 4.2
      }]];

      bigQueryClient.query.mockResolvedValue(mockQueryResult);

      const result = await getAnalyticsMetrics();

      expect(result).toHaveProperty('realtimeUsers');
      expect(result).toHaveProperty('conversionRate');
      expect(result).toHaveProperty('averageEngagement');
      expect(result).toHaveProperty('predictions');
    });
  });
});
