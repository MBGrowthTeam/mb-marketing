# ML Analytics Dashboard

## Overview

The ML Analytics Dashboard is a comprehensive tool designed to provide insights into machine learning model performance, user interactions, and system health. It integrates with Google Cloud services and OpenAI to offer advanced analytics and AI-driven recommendations.

## Key Features and Functionalities

The dashboard offers real-time analytics visualization using Streamlit and Plotly, allowing users to monitor model performance and user interactions effectively. It supports machine learning model integration and deployment, providing insights into model accuracy and efficiency. The system health monitoring feature ensures optimal performance and quick identification of issues.

## Integration with Google Cloud, OpenAI, and Gemini

By leveraging Google Cloud services, the dashboard can handle large-scale data analysis with BigQuery and manage real-time updates with Firestore. The integration with multiple LLM models, including OpenAI and Gemini, enhances the dashboard's capabilities by providing AI-driven insights and recommendations, improving decision-making processes. Gemini is the primary model used for generating suggestions and responses, offering advanced AI-driven analytics.

## Examples of AI-Driven Recommendations

The dashboard can suggest model optimizations based on performance data, recommend data preprocessing steps, and provide insights into user behavior patterns. These recommendations help in refining models and improving user engagement strategies.

## Impact on Business and Operations

The ML Analytics Dashboard aids in strategic decision-making by providing actionable insights, leading to improved operational efficiency. Businesses can leverage these insights to optimize resource allocation, enhance customer experiences, and drive innovation.

## User Interface and Usability

Designed with user experience in mind, the dashboard features an intuitive interface with customizable widgets and real-time data updates. Its user-friendly design ensures accessibility for users with varying levels of technical expertise, facilitating seamless interaction and data exploration.

## Directory Structure

- `config/`: Configuration files for monitoring and database schema.
- `credentials/`: Contains service account credentials for Google Cloud.
- `scripts/`: Shell scripts for deployment, testing, and setup.
- `src/`: Source code for the application, including API endpoints and utility functions.
- `tests/`: Unit tests for the application components.

## Getting Started

1. **Setup Environment**: Ensure you have Python 3.10+ and Docker installed.
2. **Install Dependencies**: Run `pip install -r requirements.txt` to install the necessary Python packages.
3. **Run Locally**: Use `scripts/run-local.sh` to start the application locally.
4. **Deploy**: Use `scripts/deploy.sh` to deploy the application to Google Cloud.

## Development with Visual Studio Code

1. **Open the Project**: Open the project folder in Visual Studio Code.
2. **Install Recommended Extensions**: When prompted, install the recommended extensions for Python development.
3. **Configure Python Interpreter**: Ensure the Python interpreter is set to the virtual environment by selecting `venv/bin/python` from the interpreter list.
4. **Run and Debug**: Use the Run and Debug panel to start the application or run tests using the provided configurations.
5. **Linting and Formatting**: Code linting and formatting are automatically configured with Flake8 and Black.

## License

This project is licensed under the MIT License.
