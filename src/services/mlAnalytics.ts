import { vertexAIClient } from './config';
import type { MLPrediction, AnalyticsMetrics } from '../types/dashboard';

export async function getPredictions(userData: any): Promise<MLPrediction> {
  const model = vertexAIClient.preview.getModel({
    model: 'gemini-pro',
  });

  try {
    // Generate embeddings for user behavior data
    const { response } = await model.predict({
      instances: [{
        userActivity: userData.recentActivity,
        demographics: userData.demographics,
        interactions: userData.interactions
      }]
    });

    const leadScore = response.predictions[0].score;
    const confidence = response.predictions[0].confidence;
    
    // Analyze key factors
    const factors = analyzeFactors(userData, response.predictions[0]);

    return {
      leadScore,
      confidence,
      factors
    };
  } catch (error) {
    console.error('Prediction error:', error);
    throw error;
  }
}

export async function getAnalyticsMetrics(): Promise<AnalyticsMetrics> {
  try {
    // Query BigQuery for real-time metrics
    const [rows] = await bigQueryClient.query({
      query: `
        SELECT 
          COUNT(DISTINCT session_id) as realtime_users,
          AVG(conversion_rate) as conversion_rate,
          AVG(engagement_score) as avg_engagement
        FROM \`analytics.user_sessions\`
        WHERE timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 15 MINUTE)
      `
    });

    const recentPredictions = await getRecentPredictions();

    return {
      predictions: recentPredictions,
      realtimeUsers: rows[0].realtime_users || 0,
      conversionRate: parseFloat(rows[0].conversion_rate) || 0,
      averageEngagement: parseFloat(rows[0].avg_engagement) || 0
    };
  } catch (error) {
    console.error('Analytics metrics error:', error);
    throw error;
  }
}

async function getRecentPredictions(): Promise<MLPrediction[]> {
  const [rows] = await bigQueryClient.query({
    query: `
      SELECT lead_score, confidence, factors
      FROM \`predictions.lead_scores\`
      WHERE timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR)
      ORDER BY timestamp DESC
      LIMIT 5
    `
  });

  return rows.map((row: any) => ({
    leadScore: row.lead_score,
    confidence: row.confidence,
    factors: JSON.parse(row.factors)
  }));
}

function analyzeFactors(userData: any, prediction: any): string[] {
  const factors = [];
  
  if (userData.recentActivity?.pageViews > 5) {
    factors.push('High page engagement');
  }
  if (userData.interactions?.emailClicks > 2) {
    factors.push('Active email engagement');
  }
  if (userData.demographics?.companySize > 100) {
    factors.push('Enterprise prospect');
  }
  
  return factors;
}
