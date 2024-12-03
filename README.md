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

## ⚠️ Important Notes

1. Keep API keys secure
2. Monitor API usage and costs
3. Regularly update dependencies
4. Maintain test coverage
5. Follow security best practices

For additional support or questions, please open an issue in the repository.
