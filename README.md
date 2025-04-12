# Insurify API Hub

A comprehensive API hub for insurance-related services.

## Project Structure

- `src/` - React frontend code

## API Documentation

### Authentication
All API endpoints require authentication using an API key:
```
xpectrum_api_key_123@ai
```
The API key should be included in the request headers as `x-api-key`.

### Current API Endpoints

#### 1. Insurance Applications API
Base path: `/terminsurance/api/v1/applications`
- `GET /` - Get all applications
- `GET /:id` - Get application by ID
- `POST /` - Create new application
- `PUT /:id` - Update existing application

#### 2. Insurance Quotes API
Base path: `/terminsurance/api/v1/quotes`
- `GET /` - Get all quotes
- `GET /:id` - Get quote by ID
- `POST /` - Create new quote
- `PUT /:id` - Update existing quote

#### 3. Riders API
Base path: `/terminsurance/api/v1/riders`
- `GET /:name` - Get rider by name

#### 4. Rider Applications API
Base path: `/terminsurance/api/v1/riders_applications`
- `GET /:id` - Get rider application by ID
- `POST /` - Create new rider application
- `PUT /:id` - Update rider application
- `DELETE /:id` - Delete rider application

#### 5. Rider Quotes API
Base path: `/terminsurance/api/v1/riders_quote`
- `GET /` - Get all rider quotes
- `GET /:id` - Get rider quote by ID
- `POST /` - Create new rider quote
- `PUT /:id` - Update rider quote
- `DELETE /:id` - Delete rider quote

#### 6. Policies API
Base path: `/terminsurance/api/v1/policies`
- `GET /:id` - Get policy by ID
- `POST /` - Create new policy
- `PUT /:id` - Update existing policy

#### 7. Term Life Plans API
Base path: `/terminsurance/api/v1/term_life_plans`
- `GET /` - Get all term life plans
- `GET /:id` - Get term life plan by ID

#### 8. Insurance Plans to Riders Mapping API
Base path: `/terminsurance/api/v1/insurance_plans_to_riders_names`
- Get available riders for insurance plans

## Microservice Architecture Recommendations

Based on the current API structure, here are the recommended microservices:

### 1. Application Service
- Handle all insurance applications
- Manage application lifecycle
- Store application data
- Endpoints: `/applications/*`

### 2. Quote Service
- Handle quote generation and management
- Calculate premiums
- Store quote data
- Endpoints: `/quotes/*`

### 3. Policy Service
- Manage policy lifecycle
- Handle policy issuance
- Store policy data
- Endpoints: `/policies/*`

### 4. Rider Service
- Manage rider configurations
- Handle rider applications
- Calculate rider premiums
- Store rider data
- Endpoints: `/riders/*`, `/riders_applications/*`, `/riders_quote/*`

### 5. Product Service
- Manage insurance products
- Handle term life plans
- Store product configurations
- Endpoints: `/term_life_plans/*`, `/insurance_plans_to_riders_names/*`

### Benefits of Microservice Architecture
1. **Scalability**: Each service can be scaled independently based on load
2. **Maintainability**: Services can be developed and deployed independently
3. **Fault Isolation**: Issues in one service don't affect others
4. **Technology Flexibility**: Each service can use the most appropriate technology stack
5. **Team Organization**: Teams can work on different services independently

### Implementation Considerations
1. **API Gateway**: Implement an API gateway to handle routing and authentication
2. **Service Discovery**: Implement service discovery for dynamic service location
3. **Data Consistency**: Implement event-driven architecture for data consistency
4. **Monitoring**: Set up centralized monitoring and logging
5. **Deployment**: Use containerization (Docker) and orchestration (Kubernetes)

## Setup Instructions

### Frontend Setup

1. From the root directory, install frontend dependencies:

```bash
npm install
```

2. Start the frontend development server:

```bash
npm run dev
```

The frontend will run on http://localhost:5173.

## Available Endpoints

- `/terminsurance/api/v1/applications` - Manage insurance applications
- `/terminsurance/api/v1/quotes` - Manage insurance quotes
- `/terminsurance/api/v1/riders` - Access rider information
- `/terminsurance/api/v1/riders_applications` - Manage rider applications
- `/terminsurance/api/v1/riders_quote` - Manage rider quotes
- `/terminsurance/api/v1/policies` - Access policy information
- `/terminsurance/api/v1/term_life_plans` - Access term life insurance plan details
- `/terminsurance/api/v1/insurance_plans_to_riders_names` - Get available riders for insurance plans
