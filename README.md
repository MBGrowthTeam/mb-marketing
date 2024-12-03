# Marketing Intelligence Application

A powerful React-based marketing intelligence platform leveraging Google Cloud services for advanced analytics, machine learning, and real-time data processing.

## 🚀 Features

- **Real-time Analytics Dashboard**

  - BigQuery integration for large-scale data analysis
  - Interactive data visualization components
  - Custom report generation

- **Machine Learning Capabilities**

  - Vertex AI integration for predictive analytics
  - Gemini AI for personalized content generation
  - Automated lead scoring system

- **Real-time Data Management**

  - Firestore integration for live updates
  - Automated ETL pipelines
  - Data synchronization across clients

- **Security**
  - Firebase Authentication
  - Role-based access control
  - Secure data encryption

## 🛠 Tech Stack

- **Frontend**: React, TypeScript
- **Cloud Services**: Google Cloud Platform
- **Database**: Firestore
- **Analytics**: BigQuery
- **AI/ML**: Vertex AI, Gemini AI
- **Authentication**: Firebase Auth
- **CI/CD**: GitHub Actions

## ⚙️ Prerequisites

- Node.js (v18 or higher)
- Google Cloud CLI
- Firebase CLI
- Valid Google Cloud Project with enabled APIs
- Firebase Project

## 🏗 Installation

1. **Clone the repository**

```bash
git clone [repository-url]
cd mb-marketing
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Google Cloud**

```bash
gcloud init
gcloud config set project [YOUR_PROJECT_ID]
gcloud services enable bigquery.googleapis.com aiplatform.googleapis.com firestore.googleapis.com
```

4. **Set up Firebase**

```bash
npm install -g firebase-tools
firebase login
firebase init
```

5. **Environment Configuration**
   Create a `.env` file:

```env
REACT_APP_GCP_PROJECT_ID=your-project-id
REACT_APP_GEMINI_API_KEY=your-gemini-api-key
```

## 🏃‍♂️ Running the Application

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── components/
│   ├── analytics/     # Analytics components
│   ├── ml/            # Machine learning components
│   └── common/        # Shared components
├── services/          # API and service integrations
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

## 🔒 Security Setup

1. **Firebase Authentication**

```typescript
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth();
```

2. **Authorization Hook**

```typescript
const { user } = useAuth();
```

## 🚀 Deployment

Automated deployment via GitHub Actions:

```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📈 Monitoring

1. Set up Google Cloud Monitoring
2. Configure error tracking
3. Implement usage analytics
4. Review maintenance documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## ⚡ Performance Optimization

- Implement code splitting
- Optimize bundle size
- Use lazy loading for components
- Configure caching strategies

## 🔄 CI/CD Pipeline

- Automated testing
- Build verification
- Deployment staging
- Production deployment

## 📚 Documentation

Detailed documentation for each component and service is available in the `/docs` directory:

- API Documentation
- Component Documentation
- Service Integration Guides
- Security Guidelines

## ML Analytics Dashboard Integration Guide

### 1. Project Structure Setup

#### Initialize Core Directories
```bash
# Create main directories
mkdir -p src/{components,services,hooks,utils,contexts}
mkdir -p src/components/{analytics,ml,common}
mkdir -p src/services/{bigquery,firestore,vertex-ai,gemini-ai}
```

### 2. Dependencies Installation

```bash
# Core dependencies
npm install @google-cloud/bigquery @google-cloud/vertexai firebase 
npm install @google/generative-ai recharts flowbite-react
npm install tailwindcss @headlessui/react @heroicons/react

# Development dependencies
npm install -D typescript @types/react @types/node
```

### 3. Service Integration Implementation

#### A. Initialize Google Cloud Services
Create `src/services/config.ts`:
```typescript
import { BigQuery } from '@google-cloud/bigquery';
import { VertexAI } from '@google-cloud/vertexai';

export const bigQueryClient = new BigQuery({
  projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID
});

export const vertexAIClient = new VertexAI({
  project: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
  location: 'us-central1'
});
```

#### B. Firestore Integration
Create `src/services/firestore/client.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // Add other config values
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4. Analytics Components Implementation

#### A. Dashboard Component
Create `src/components/analytics/Dashboard.tsx`:
```typescript
import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

interface DashboardProps {
  data: any[];
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
```

### 5. ML Integration Components

#### A. Model Prediction Component
Create `src/components/ml/PredictiveModel.tsx`:
```typescript
import { VertexAIService } from '../../services/vertex-ai/client';
import React, { useState } from 'react';

export const PredictiveModel = () => {
  const [prediction, setPrediction] = useState(null);
  const vertexAI = new VertexAIService();

  const handlePredict = async (data: any) => {
    const result = await vertexAI.predictLeadScore(data);
    setPrediction(result);
  };

  return (
    <div className="p-4">
      {/* Add prediction UI components */}
    </div>
  );
};
```

### 6. Authentication Setup

#### A. Firebase Auth Configuration
Create `src/services/auth/firebase.ts`:
```typescript
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};
```

### 7. API Routes Setup

#### A. Create BigQuery API Route
Create `pages/api/analytics/data.ts`:
```typescript
import type { NextApiRequest, NextApiResponse } from 'next';
import { bigQueryClient } from '../../../services/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = req.body.query;
    const [rows] = await bigQueryClient.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```

### 8. Environment Configuration

Create `.env.local`:
```bash
NEXT_PUBLIC_GCP_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
```

### 9. Integration Steps

1. **Initialize Services**
   - Set up Google Cloud Project
   - Enable necessary APIs in Google Cloud Console
   - Configure Firebase project
   - Set up authentication

2. **Component Implementation**
   - Implement analytics dashboard
   - Create ML model integration
   - Set up real-time data sync with Firestore

3. **Testing**
   ```bash
   # Run tests
   npm test
   
   # Start development server
   npm run dev
   ```

### 10. CI/CD Setup

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm test
      - run: npm run build
```

### 11. Monitoring Setup

1. Set up Google Cloud Monitoring
2. Implement error tracking
3. Configure usage analytics
4. Set up performance monitoring

### 12. Security Considerations

1. Implement proper authentication flows
2. Set up Firebase security rules
3. Configure CORS policies
4. Implement rate limiting
5. Set up API key rotation

### Next Steps

1. Review and implement error handling
2. Add comprehensive logging
3. Implement user feedback mechanisms
4. Set up monitoring alerts
5. Document API endpoints
6. Create user guides

### Additional Resources

- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [Next.js Documentation](https://nextjs.org/docs)
