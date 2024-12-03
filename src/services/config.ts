import { BigQuery } from '@google-cloud/bigquery';
import { VertexAI } from '@google-cloud/vertexai';

export const bigQueryClient = new BigQuery({
  projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID
});

export const vertexAIClient = new VertexAI({
  project: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
  location: 'us-central1'
});
