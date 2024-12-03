import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import type { MLPrediction, AnalyticsMetrics } from '../types/dashboard';
import { getPredictions, getAnalyticsMetrics } from '../services/mlAnalytics';

export function MLInsightsPanel() {
  const [metrics, setMetrics] = useState<AnalyticsMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMetrics() {
      try {
        const data = await getAnalyticsMetrics();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to load ML metrics:', error);
      } finally {
        setLoading(false);
      }
    }

    loadMetrics();
  }, []);

  if (loading) {
    return <div>Loading ML insights...</div>;
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          ML Analytics Insights
        </h5>
        <button
          onClick={() => loadMetrics()}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Refresh
        </button>
      </div>
      <div className="flow-root">
        {metrics && (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {metrics.predictions.length > 0 && (
              <li className="py-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Latest Predictions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {metrics.predictions.map((pred, idx) => (
                      <div 
                        key={idx}
                        className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900"
                      >
                        <p className="text-xs font-medium text-blue-800 dark:text-blue-200">
                          Lead Score: {(pred.leadScore * 100).toFixed(1)}%
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-300">
                          Confidence: {(pred.confidence * 100).toFixed(1)}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            )}
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Real-time Users
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {metrics.realtimeUsers}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Conversion Rate
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {metrics.conversionRate}%
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Average Engagement
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {metrics.averageEngagement}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </Card>
  );
}
