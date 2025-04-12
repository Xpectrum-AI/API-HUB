// API Endpoints data
export const apiEndpoints = {
  // Applications endpoints
  "get-application-by-id": {
    id: "get-application-by-id",
    category: "Applications",
    title: "Get Application by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/applications/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the application", examples: ["AP3126", "AP9757", "AP7064"] }
    ],
    responseExample: {
      "application_id": "AP312666",
      "applicant_id": "PH4006",
      "first_name": "s",
      "last_name": "g",
      "email_id": "iisubho1@gmail.com",
      "application_date": "2025-02-10",
      "application_time": "01:38:03",
      "status": "approved",
      "quote_details": {
        "age": 40,
        "plan_id": "TL003",
        "premium": 1853.28,
        "quote_id": "QT2798",
        "frequency": "monthly",
        "plan_name": "Elite Life Protector",
        "apply_date": "2025-02-10",
        "apply_time": "01:20:30",
        "occupation": "firefighters",
        "term_length": 20,
        "tax_benefits": true,
        "convertibility": true,
        "smoking_status": "smoker",
        "coverage_amount": 100000,
        "health_condition": "good",
        "medical_exam_required": true,
        "nominee_types_allowed": [
          "Spouse",
          "Children",
          "Parents",
          "Siblings",
          "Business Partner"
        ]
      },
      "beneficiary": {
        "DOB": "1990-12-12",
        "id_number": "1289",
        "last_name": "g",
        "first_name": "s",
        "relationship": "spouse"
      },
      "approved_details": {
        "approved_by": "Ramar John",
        "approved_date": "2025-02-12",
        "approved_time": "01:35:02"
      },
      "riders": [
        "{'rider_application_id': 'AP5041', 'rider_applicant_id': 'RH8521', 'rider_name': 'Enhanced Accidental Coverage', 'rider_id': 'RID001', 'rider_quote_id': 'QU7719', 'premium': 27.0, 'frequency': 'monthly', 'application_date': '2025-02-12', 'application_time': '01:22:20.209534', 'status': 'under review', 'quote_details': [{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}]}",
        "{'rider_application_id': 'AP3732', 'rider_applicant_id': 'RH3672', 'rider_name': 'Enhanced Accidental Coverage', 'rider_id': 'RID001', 'rider_quote_id': 'QU7719', 'premium': 27.0, 'frequency': 'monthly', 'application_date': '2025-02-12', 'application_time': '01:22:38.521714', 'status': 'under review', 'quote_details': [{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}]}"
      ]
    }
  },
  "create-application": {
    id: "create-application",
    category: "Applications",
    title: "Create Application",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/applications/",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the application" },
      { name: "applicant_id", type: "string", required: false, description: "Unique identifier for the applicant" },
      { name: "first_name", type: "string", required: false, description: "First name of the applicant" },
      { name: "last_name", type: "string", required: false, description: "Last name of the applicant" },
      { name: "email_id", type: "string", required: false, description: "Email ID of the applicant" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "status", type: "string", required: false, description: "Status of the application" },
      { name: "quote_details", type: "object", required: false, description: "Quote details" },
      { name: "beneficiary", type: "object", required: false, description: "Beneficiary details" },
      { name: "approved_details", type: "object", required: false, description: "Approval details" },
      { name: "riders", type: "array", required: false, description: "Riders for the insurance" }
    ],
    requestBodyExample: {
      "application_id": "AP312666",
      "applicant_id": "PH4006",
      "first_name": "s",
      "last_name": "g",
      "email_id": "iisubho1@gmail.com",
      "application_date": "2025-02-10",
      "application_time": "01:38:03",
      "status": "approved",
      "quote_details": {
        "age": 40,
        "plan_id": "TL003",
        "premium": 1853.28,
        "quote_id": "QT2798",
        "frequency": "monthly",
        "plan_name": "Elite Life Protector",
        "apply_date": "2025-02-10",
        "apply_time": "01:20:30",
        "occupation": "firefighters",
        "term_length": 20,
        "tax_benefits": true,
        "convertibility": true,
        "smoking_status": "smoker",
        "coverage_amount": 100000,
        "health_condition": "good",
        "medical_exam_required": true,
        "nominee_types_allowed": [
          "Spouse",
          "Children",
          "Parents",
          "Siblings",
          "Business Partner"
        ]
      },
      "beneficiary": {
        "DOB": "1990-12-12",
        "id_number": "1289",
        "last_name": "g",
        "first_name": "s",
        "relationship": "spouse"
      },
      "approved_details": {
        "approved_by": "Ramar John",
        "approved_date": "2025-02-12",
        "approved_time": "01:35:02"
      },
      "riders": [
        "{'rider_application_id': 'AP5041', 'rider_applicant_id': 'RH8521', 'rider_name': 'Enhanced Accidental Coverage', 'rider_id': 'RID001', 'rider_quote_id': 'QU7719', 'premium': 27.0, 'frequency': 'monthly', 'application_date': '2025-02-12', 'application_time': '01:22:20.209534', 'status': 'under review', 'quote_details': [{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}]}"
      ]
    },
    responseExample: {
      "application_id": "AP312666",
      "applicant_id": "PH4006",
      "first_name": "s",
      "last_name": "g",
      "email_id": "iisubho1@gmail.com",
      "application_date": "2025-02-10",
      "application_time": "01:38:03",
      "status": "approved"
    }
  },
  "update-application": {
    id: "update-application",
    category: "Applications",
    title: "Update Application",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/applications/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the application", examples: ["AP3126", "AP9757", "AP7064"] }
    ],
    bodyParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the application" },
      { name: "applicant_id", type: "string", required: false, description: "Unique identifier for the applicant" },
      { name: "first_name", type: "string", required: false, description: "First name of the applicant" },
      { name: "last_name", type: "string", required: false, description: "Last name of the applicant" },
      { name: "email_id", type: "string", required: false, description: "Email ID of the applicant" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "status", type: "string", required: false, description: "Status of the application" },
      { name: "quote_details", type: "object", required: false, description: "Quote details" },
      { name: "beneficiary", type: "object", required: false, description: "Beneficiary details" },
      { name: "approved_details", type: "object", required: false, description: "Approval details" },
      { name: "riders", type: "array", required: false, description: "Riders for the insurance" }
    ],
    requestBodyExample: {
      "application_id": "AP312666",
      "status": "approved",
      "approved_details": {
        "approved_by": "Ramar John",
        "approved_date": "2025-02-12",
        "approved_time": "01:35:02"
      }
    },
    responseExample: {
      "application_id": "AP312666",
      "status": "approved"
    }
  },

  // Plan Quote endpoints
  "get-plan-quote-by-id": {
    id: "get-plan-quote-by-id",
    category: "Plan Quote",
    title: "Get Plan Quote by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/plan_quote/{quote_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "quote_id", type: "string", required: true, description: "Unique identifier for the quote", examples: ["QT2246", "QT2798", "QT7180"] }
    ],
    responseExample: {
      "quote_id": "QT2798",
      "apply_date": "2025-02-10",
      "apply_time": "01:20:30",
      "plan_id": "TL003",
      "plan_name": "Elite Life Protector",
      "term_length": 20,
      "coverage_amount": 100000,
      "premium": 1853.28,
      "medical_exam_required": 1,
      "convertibility": 1,
      "tax_benefits": 1,
      "nominee_types_allowed": [
        "Spouse",
        "Children",
        "Parents",
        "Siblings",
        "Business Partner"
      ],
      "frequency": "monthly",
      "age": 40,
      "health_condition": "good",
      "occupation": "firefighters",
      "smoking_status": "smoker"
    }
  },
  "create-plan-quote": {
    id: "create-plan-quote",
    category: "Plan Quote",
    title: "Create Plan Quote",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/plan_quote/",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "quote_id", type: "string", required: true, description: "Unique identifier for the quote" },
      { name: "apply_date", type: "string", required: false, description: "Date of application" },
      { name: "apply_time", type: "string", required: false, description: "Time of application" },
      { name: "plan_id", type: "string", required: false, description: "Unique identifier for the plan" },
      { name: "plan_name", type: "string", required: false, description: "Name of the plan" },
      { name: "term_length", type: "integer", required: false, description: "Term length in years" },
      { name: "coverage_amount", type: "integer", required: false, description: "Coverage amount" },
      { name: "premium", type: "number", required: false, description: "Premium amount" },
      { name: "medical_exam_required", type: "integer", required: false, description: "Whether medical exam is required (1/0)" },
      { name: "convertibility", type: "integer", required: false, description: "Whether the plan is convertible (1/0)" },
      { name: "tax_benefits", type: "integer", required: false, description: "Whether tax benefits are available (1/0)" },
      { name: "nominee_types_allowed", type: "array", required: false, description: "Types of nominees allowed" },
      { name: "frequency", type: "string", required: false, description: "Premium payment frequency" },
      { name: "age", type: "integer", required: false, description: "Age of the applicant" },
      { name: "health_condition", type: "string", required: false, description: "Health condition of the applicant" },
      { name: "occupation", type: "string", required: false, description: "Occupation of the applicant" },
      { name: "smoking_status", type: "string", required: false, description: "Smoking status of the applicant" }
    ],
    requestBodyExample: {
      "quote_id": "QT2798",
      "apply_date": "2025-02-10",
      "apply_time": "01:20:30",
      "plan_id": "TL003",
      "plan_name": "Elite Life Protector",
      "term_length": 20,
      "coverage_amount": 100000,
      "premium": 1853.28,
      "medical_exam_required": 1,
      "convertibility": 1,
      "tax_benefits": 1,
      "nominee_types_allowed": [
        "Spouse",
        "Children",
        "Parents",
        "Siblings",
        "Business Partner"
      ],
      "frequency": "monthly",
      "age": 40,
      "health_condition": "good",
      "occupation": "firefighters",
      "smoking_status": "smoker"
    },
    responseExample: {
      "quote_id": "QT2798",
      "apply_date": "2025-02-10",
      "apply_time": "01:20:30",
      "plan_id": "TL003",
      "plan_name": "Elite Life Protector",
      "premium": 1853.28
    }
  },

  // Policies endpoints
  "get-policy-by-id": {
    id: "get-policy-by-id",
    category: "Policies",
    title: "Get Policy by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/policies/{policy_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "policy_id", type: "string", required: true, description: "Unique identifier for the policy", examples: ["POL689", "POL245"] }
    ],
    responseExample: {
      "policy_id": "POL12345",
      "policy_holder_id": "PH5533",
      "application_id": "AP38211",
      "policy_status": "active",
      "next_payment_date": "2025-05-01",
      "first_name": "Subhankar",
      "last_name": "Ghosh",
      "plan_details": {
        "plan_name": "Professional Shield",
        "plan_id": "TL003"
      },
      "policy_dates": {
        "start_date": "2025-01-01",
        "end_date": "2035-01-01"
      },
      "policy_creation": {
        "created_date": "2025-01-21",
        "created_time": "02:23:03"
      },
      "riders": [
        "Disability Insurance Rider",
        "Critical Illness Rider"
      ],
      "beneficiary": [
        {
          "DOB": "11-30-1995",
          "id_number": "12354",
          "last_name": "Sar",
          "first_name": "San",
          "relationship": "spouse"
        }
      ]
    }
  },
  "create-policy": {
    id: "create-policy",
    category: "Policies",
    title: "Create Policy",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/policies/",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "policy_id", type: "string", required: true, description: "Unique identifier for the policy" },
      { name: "policy_holder_id", type: "string", required: false, description: "Unique identifier for the policy holder" },
      { name: "application_id", type: "string", required: false, description: "Unique identifier for the application" },
      { name: "policy_status", type: "string", required: false, description: "Status of the policy" },
      { name: "next_payment_date", type: "string", required: false, description: "Next payment date" },
      { name: "first_name", type: "string", required: false, description: "First name of the policy holder" },
      { name: "last_name", type: "string", required: false, description: "Last name of the policy holder" },
      { name: "plan_details", type: "object", required: false, description: "Plan details" },
      { name: "policy_dates", type: "object", required: false, description: "Policy dates" },
      { name: "policy_creation", type: "object", required: false, description: "Policy creation details" },
      { name: "riders", type: "array", required: false, description: "Riders for the policy" },
      { name: "beneficiary", type: "array", required: false, description: "Beneficiaries of the policy" }
    ],
    requestBodyExample: {
      "policy_id": "POL68998",
      "policy_holder_id": "PH4006",
      "application_id": "AP3126",
      "policy_status": "Cancelled",
      "next_payment_date": "2025-02-20",
      "first_name": "s",
      "last_name": "g",
      "plan_details": {
        "premium": 1853.28,
        "base_plan": "TL003",
        "frequency": "monthly",
        "plan_name": "Elite Life Protector",
        "term_length": 20,
        "coverage_amount": 100000
      },
      "policy_dates": {
        "end_date": "2045-02-05",
        "start_date": "2025-02-10"
      },
      "policy_creation": {
        "creation_date": "2025-02-10",
        "creation_time": "02:41:21"
      },
      "riders": [],
      "beneficiary": [
        "{'first_name': 's', 'last_name': 'g', 'id_number': '1289', 'DOB': '1990-12-12', 'relationship': 'spouse', 'coverage_share': 40}",
        "{'beneficiary_first_name': 'Su', 'beneficiary_last_name': 'Gh', 'relationship': 'mother', 'coverage_share': 20}",
        "{'beneficiary_first_name': 'gh', 'beneficiary_last_name': 'sg', 'relationship': 'mother', 'coverage_share': 20}"
      ]
    },
    responseExample: {
      "policy_id": "POL68998",
      "policy_status": "Cancelled",
      "policy_holder_id": "PH4006"
    }
  },
  "update-policy": {
    id: "update-policy",
    category: "Policies",
    title: "Update Policy",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/policies/{policy_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "policy_id", type: "string", required: true, description: "Unique identifier for the policy", examples: ["POL689", "POL245"] }
    ],
    bodyParams: [
      { name: "policy_id", type: "string", required: true, description: "Unique identifier for the policy" },
      { name: "policy_holder_id", type: "string", required: false, description: "Unique identifier for the policy holder" },
      { name: "application_id", type: "string", required: false, description: "Unique identifier for the application" },
      { name: "policy_status", type: "string", required: false, description: "Status of the policy" },
      { name: "next_payment_date", type: "string", required: false, description: "Next payment date" },
      { name: "first_name", type: "string", required: false, description: "First name of the policy holder" },
      { name: "last_name", type: "string", required: false, description: "Last name of the policy holder" },
      { name: "plan_details", type: "object", required: false, description: "Plan details" },
      { name: "policy_dates", type: "object", required: false, description: "Policy dates" },
      { name: "policy_creation", type: "object", required: false, description: "Policy creation details" },
      { name: "riders", type: "array", required: false, description: "Riders for the policy" },
      { name: "beneficiary", type: "array", required: false, description: "Beneficiaries of the policy" }
    ],
    requestBodyExample: {
      "policy_id": "POL68998",
      "policy_status": "Active"
    },
    responseExample: {
      "policy_id": "POL68998",
      "policy_status": "Active"
    }
  },

  // Riders endpoints
  "get-rider-by-id": {
    id: "get-rider-by-id",
    category: "Riders",
    title: "Get Rider by Name",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders/{name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "name", type: "string", required: true, description: "Name of the rider", examples: ["Enhanced Accidental Coverage", "Comprehensive Critical Illness", "Premium Waiver Protection"] }
    ],
    responseExample: {
      "id": "RID001",
      "name": "Enhanced Accidental Coverage",
      "description": [
        "Provides additional coverage for accidental death or injury",
        "Offers protection beyond the base policy for specific accidents",
        "Includes coverage for severe injuries leading to disability"
      ],
      "covered_areas": {
        "accident_types": [
          "Vehicular accidents",
          "Work-related accidents",
          "Sporting accidents",
          "Home accidents"
        ],
        "injury_coverage": [
          "Dismemberment",
          "Paralysis",
          "Severe burns",
          "Traumatic brain injury"
        ]
      },
      "required_inputs": [
        "Age",
        "Occupation",
        "Health condition",
        "Geographical location",
        "Smoking status"
      ],
      "typical_payout_multiplier": {
        "minimum": 1.5,
        "maximum": 3.0,
        "standard": 2.0
      }
    }
  },

  // Riders Applications endpoints
  "get-rider-application-by-id": {
    id: "get-rider-application-by-id",
    category: "Rider Applications",
    title: "Get Rider Application by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_applications/{rider_application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_application_id", type: "string", required: true, description: "Unique identifier for the rider application", examples: ["AP5041", "AP3732", "AP6455"] }
    ],
    responseExample: {
      "rider_application_id": "AP50410",
      "rider_applicant_id": "RH8521",
      "rider_name": "Enhanced Accidental Coverage",
      "rider_id": "RID001",
      "rider_quote_id": "QU7719",
      "premium": "27.00",
      "frequency": "monthly",
      "application_date": "2025-02-12",
      "application_time": "01:22:20.209534",
      "status": "under review",
      "quote_details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ]
    }
  },
  "create-rider-application": {
    id: "create-rider-application",
    category: "Rider Applications",
    title: "Create Rider Application",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_applications/",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "rider_application_id", type: "string", required: true, description: "Unique identifier for the rider application" },
      { name: "rider_applicant_id", type: "string", required: false, description: "Unique identifier for the rider applicant" },
      { name: "rider_name", type: "string", required: false, description: "Name of the rider" },
      { name: "rider_id", type: "string", required: false, description: "Unique identifier for the rider" },
      { name: "rider_quote_id", type: "string", required: false, description: "Unique identifier for the rider quote" },
      { name: "premium", type: "number", required: false, description: "Premium amount" },
      { name: "frequency", type: "string", required: false, description: "Premium payment frequency" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "status", type: "string", required: false, description: "Status of the application" },
      { name: "quote_details", type: "array", required: false, description: "Quote details" }
    ],
    requestBodyExample: {
      "rider_application_id": "AP50410",
      "rider_applicant_id": "RH8521",
      "rider_name": "Enhanced Accidental Coverage",
      "rider_id": "RID001",
      "rider_quote_id": "QU7719",
      "premium": "27.00",
      "frequency": "monthly",
      "application_date": "2025-02-12",
      "application_time": "01:22:20.209534",
      "status": "under review",
      "quote_details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ]
    },
    responseExample: {
      "rider_application_id": "AP50410",
      "rider_applicant_id": "RH8521",
      "rider_name": "Enhanced Accidental Coverage",
      "rider_id": "RID001",
      "rider_quote_id": "QU7719",
      "premium": "27.00",
      "frequency": "monthly",
      "application_date": "2025-02-12",
      "application_time": "01:22:20.209534",
      "status": "under review",
      "quote_details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ]
    }
  },
  "update-rider-application": {
    id: "update-rider-application",
    category: "Rider Applications",
    title: "Update Rider Application",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_applications/{rider_application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_application_id", type: "string", required: true, description: "Unique identifier for the rider application", examples: ["AP5041", "AP3732", "AP6455"] }
    ],
    bodyParams: [
      { name: "rider_application_id", type: "string", required: true, description: "Unique identifier for the rider application" },
      { name: "rider_applicant_id", type: "string", required: false, description: "Unique identifier for the rider applicant" },
      { name: "rider_name", type: "string", required: false, description: "Name of the rider" },
      { name: "rider_id", type: "string", required: false, description: "Unique identifier for the rider" },
      { name: "rider_quote_id", type: "string", required: false, description: "Unique identifier for the rider quote" },
      { name: "premium", type: "number", required: false, description: "Premium amount" },
      { name: "frequency", type: "string", required: false, description: "Premium payment frequency" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "status", type: "string", required: false, description: "Status of the application" },
      { name: "quote_details", type: "array", required: false, description: "Quote details" }
    ],
    requestBodyExample: {
      "rider_application_id": "AP50410",
      "status": "approved"
    },
    responseExample: {
      "rider_application_id": "AP50410",
      "status": "approved"
    }
  },
  "delete-rider-application": {
    id: "delete-rider-application",
    category: "Rider Applications",
    title: "Delete Rider Application",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_applications/{rider_application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_application_id", type: "string", required: true, description: "Unique identifier for the rider application", examples: ["AP5041", "AP3732", "AP6455"] }
    ],
    responseExample: {
      "message": "Rider application deleted successfully",
      "rider_application_id": "AP50410"
    }
  },

  // Rider Quotes endpoints
  "get-rider-quote-by-id": {
    id: "get-rider-quote-by-id",
    category: "Rider Quotes",
    title: "Get Rider Quote by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_quote/{rider_quote_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_quote_id", type: "string", required: true, description: "Unique identifier for the rider quote", examples: ["QU7719", "QU2225", "QU2031", "QU1130"] }
    ],
    responseExample: {
      "rider_quote_id": "QU7719",
      "rider_id": "RID001",
      "rider_name": "Enhanced Accidental Coverage",
      "details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ],
      "premium": "27.00"
    }
  },
  "get-all-rider-quotes": {
    id: "get-all-rider-quotes",
    category: "Rider Quotes",
    title: "Get All Rider Quotes",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_quote",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: [
      {
        "rider_quote_id": "QU7719",
        "rider_id": "RID001",
        "rider_name": "Enhanced Accidental Coverage",
        "details": [
          "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
        ],
        "premium": "27.00"
      },
      {
        "rider_quote_id": "QU2225",
        "rider_id": "RID002",
        "rider_name": "Comprehensive Critical Illness",
        "details": [
          "{'age': 35, 'health_condition': 'Excellent', 'smoking_status': 'non-smoker', 'occupation': 'teacher', 'base_policy_premium': 250, 'premium': 35.0, 'waiting_period_in_months': 6, 'geographical_location': 'urban'}"
        ],
        "premium": "35.00"
      }
    ]
  },
  "create-rider-quote": {
    id: "create-rider-quote",
    category: "Rider Quotes",
    title: "Create Rider Quote",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_quote/",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "rider_quote_id", type: "string", required: true, description: "Unique identifier for the rider quote" },
      { name: "rider_id", type: "string", required: false, description: "Unique identifier for the rider" },
      { name: "rider_name", type: "string", required: false, description: "Name of the rider" },
      { name: "details", type: "array", required: false, description: "Details of the rider quote" },
      { name: "premium", type: "number", required: false, description: "Premium amount" }
    ],
    requestBodyExample: {
      "rider_quote_id": "QU7719",
      "rider_id": "RID001",
      "rider_name": "Enhanced Accidental Coverage",
      "details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ],
      "premium": "27.00"
    },
    responseExample: {
      "rider_quote_id": "QU7719",
      "rider_id": "RID001",
      "rider_name": "Enhanced Accidental Coverage",
      "details": [
        "{'age': 40, 'health_condition': 'Good', 'smoking_status': 'non-smoker', 'occupation': 'construction', 'base_policy_premium': 200, 'premium': 27.0, 'waiting_period_in_months': 12, 'geographical_location': 'rural'}"
      ],
      "premium": "27.00"
    }
  },
  "update-rider-quote": {
    id: "update-rider-quote",
    category: "Rider Quotes",
    title: "Update Rider Quote",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_quote/{rider_quote_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_quote_id", type: "string", required: true, description: "Unique identifier for the rider quote", examples: ["QU7719", "QU2225", "QU2031", "QU1130"] }
    ],
    bodyParams: [
      { name: "rider_quote_id", type: "string", required: true, description: "Unique identifier for the rider quote" },
      { name: "rider_id", type: "string", required: false, description: "Unique identifier for the rider" },
      { name: "rider_name", type: "string", required: false, description: "Name of the rider" },
      { name: "details", type: "array", required: false, description: "Details of the rider quote" },
      { name: "premium", type: "number", required: false, description: "Premium amount" }
    ],
    requestBodyExample: {
      "rider_quote_id": "QU7719",
      "premium": "30.00"
    },
    responseExample: {
      "rider_quote_id": "QU7719",
      "premium": "30.00"
    }
  },
  "delete-rider-quote": {
    id: "delete-rider-quote",
    category: "Rider Quotes",
    title: "Delete Rider Quote",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/riders_quote/{rider_quote_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "rider_quote_id", type: "string", required: true, description: "Unique identifier for the rider quote", examples: ["QU7719", "QU2225", "QU2031", "QU1130"] }
    ],
    responseExample: {
      "message": "Rider quote deleted successfully",
      "rider_quote_id": "QU7719"
    }
  },

  // Term Life Insurance Plans endpoints
  "get-all-term-life-plans": {
    id: "get-all-term-life-plans",
    category: "Term Life Plans",
    title: "Get All Term Life Plans",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/term_life_plans",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: [
      {
        "id": "TL003",
        "name": "Professional Shield",
        "description": "A specialized term life insurance plan tailored for high-earning professionals in demanding careers with substantial coverage.",
        "term_length": ["10", "20"],
        "minimum_coverage_amount": 500000,
        "maximum_coverage_amount": 5000000,
        "age_range": {
          "maximum_entry_age": 55,
          "minimum_entry_age": 25,
          "maximum_maturity_age": 70
        },
        "premium_calculation_factors": [
          "Professional credentials",
          "Income level",
          "Specialized occupation risks",
          "Health status"
        ],
        "features": {
          "policy_type": "Professional Term",
          "grace_period": 60,
          "tax_benefits": true,
          "payment_methods": [
            "Bank Transfer",
            "Online Payment",
            "Corporate Payroll Deduction"
          ]
        },
        "medical_exam_required": 1,
        "convertibility": 0,
        "available_riders": [
          "Disability Insurance Rider",
          "Critical Illness Rider"
        ]
      },
      {
        "id": "TL004",
        "name": "Elite Life Protector",
        "description": "Premium life insurance coverage for high-net-worth individuals with extensive benefits and customization options.",
        "term_length": ["10", "15", "20", "30"],
        "minimum_coverage_amount": 1000000,
        "maximum_coverage_amount": 10000000,
        "age_range": {
          "maximum_entry_age": 60,
          "minimum_entry_age": 21,
          "maximum_maturity_age": 75
        },
        "premium_calculation_factors": [
          "Net worth",
          "Health status",
          "Family history",
          "Lifestyle factors"
        ],
        "features": {
          "policy_type": "Premium Term",
          "grace_period": 90,
          "tax_benefits": true,
          "payment_methods": [
            "Premium Electronic Fund Transfer",
            "Wealth Management Integration",
            "Annual Lump Sum"
          ]
        },
        "medical_exam_required": 1,
        "convertibility": 1,
        "available_riders": [
          "International Coverage Rider",
          "Enhanced Critical Illness Rider",
          "Estate Planning Rider"
        ]
      }
    ]
  },
  "get-term-life-plan-by-name": {
    id: "get-term-life-plan-by-name",
    category: "Term Life Plans",
    title: "Get Term Life Plan by Name",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/terminsurance/api/v1/term_life_plans/{name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "name", type: "string", required: true, description: "Name of the term life plan", examples: ["Lifetime Secure Plus", "Secure Shield Term Plan", "Elite Life Protector"] }
    ],
    responseExample: {
      "id": "TL003",
      "name": "Professional Shield",
      "description": "A specialized term life insurance plan tailored for high-earning professionals in demanding careers with substantial coverage.",
      "term_length": ["10", "20"],
      "minimum_coverage_amount": 500000,
      "maximum_coverage_amount": 5000000,
      "age_range": {
        "maximum_entry_age": 55,
        "minimum_entry_age": 25,
        "maximum_maturity_age": 70
      },
      "premium_calculation_factors": [
        "Professional credentials",
        "Income level",
        "Specialized occupation risks",
        "Health status"
      ],
      "features": {
        "policy_type": "Professional Term",
        "grace_period": 60,
        "tax_benefits": true,
        "payment_methods": [
          "Bank Transfer",
          "Online Payment",
          "Corporate Payroll Deduction"
        ]
      },
      "medical_exam_required": 1,
      "convertibility": 0,
      "available_riders": [
        "Disability Insurance Rider",
        "Critical Illness Rider"
      ]
    }
  },

  // ADDS Payment endpoints
  "get-payment-by-id": {
    id: "get-payment-by-id",
    category: "Payments",
    title: "Get Payment by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/airlines/api/v1/payments/{transaction_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "transaction_id", type: "string", required: true, description: "Unique identifier for the transaction", examples: ["TRAN6026", "TRAN7529", "TRAN4533"] }
    ],
    responseExample: {
      "transaction_id": "TRAN7129",
      "phone_number": 2091235432,
      "card_type": "debit card",
      "card_number": "1908712390876543",
      "cvv": 321,
      "expiry_date": "2030-12",
      "transaction_date": "2025-02-18",
      "transaction_time": "01:18:49"
    }
  },

  "create-payment": {
    id: "create-payment",
    category: "Payments",
    title: "Create Payment",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/airlines/api/v1/payments",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "transaction_id", type: "string", required: true, description: "Unique identifier for the transaction" },
      { name: "phone_number", type: "integer", required: false, description: "Phone number of the customer" },
      { name: "card_type", type: "string", required: false, description: "Type of card used" },
      { name: "card_number", type: "string", required: false, description: "Card number" },
      { name: "cvv", type: "integer", required: false, description: "CVV of the card" },
      { name: "expiry_date", type: "string", required: false, description: "Expiry date of the card" },
      { name: "transaction_date", type: "string", required: false, description: "Date of transaction" },
      { name: "transaction_time", type: "string", required: false, description: "Time of transaction" }
    ],
    requestBodyExample: {
      "transaction_id": "TRAN7129",
      "phone_number": 2091235432,
      "card_type": "debit card",
      "card_number": "1908712390876543",
      "cvv": 321,
      "expiry_date": "2030-12",
      "transaction_date": "2025-02-18",
      "transaction_time": "01:18:49"
    }
  },

  "delete-payment": {
    id: "delete-payment",
    category: "Payments",
    title: "Delete Payment",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/airlines/api/v1/payments/{transaction_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "transaction_id", type: "string", required: true, description: "Unique identifier for the transaction", examples: ["TRAN7129", "TRAN7529", "TRAN4533"] }
    ]
  },

  // ADDS Appointment endpoints
  "get-appointment-by-id": {
    id: "get-appointment-by-id",
    category: "Appointments",
    title: "Get Appointment by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/appointments/api/v1/{appointment_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "appointment_id", type: "string", required: true, description: "Unique identifier for the appointment", examples: ["APT7694", "APT4916", "APT6048"] }
    ],
    responseExample: {
      "appointment_id": "APT49156",
      "phone_number": ["2091234521"],
      "application_date": "2025-03-27",
      "application_time": "23:08:49",
      "appointment_date": "2025-04-01",
      "appointment_time": "11:00AM",
      "time_slot": "11:00AM",
      "reason_appointment": "Treatment"
    }
  },

  "create-appointment": {
    id: "create-appointment",
    category: "Appointments",
    title: "Create Appointment",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/appointments/api/v1",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "appointment_id", type: "string", required: true, description: "Unique identifier for the appointment" },
      { name: "phone_number", type: "array", required: false, description: "List of phone numbers" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "appointment_date", type: "string", required: false, description: "Date of appointment" },
      { name: "appointment_time", type: "string", required: false, description: "Time of appointment" },
      { name: "time_slot", type: "string", required: false, description: "Time slot for appointment" },
      { name: "reason_appointment", type: "string", required: false, description: "Reason for appointment" }
    ],
    requestBodyExample: {
      "appointment_id": "APT49156",
      "phone_number": ["2091234521"],
      "application_date": "2025-03-27",
      "application_time": "23:08:49",
      "appointment_date": "2025-04-01",
      "appointment_time": "11:00AM",
      "time_slot": "11:00AM",
      "reason_appointment": "Treatment"
    }
  },

  "update-appointment": {
    id: "update-appointment",
    category: "Appointments",
    title: "Update Appointment",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/appointments/api/v1/{appointment_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "appointment_id", type: "string", required: true, description: "Unique identifier for the appointment", examples: ["APT49156", "APT4916", "APT6048"] }
    ],
    bodyParams: [
      { name: "appointment_id", type: "string", required: true, description: "Unique identifier for the appointment" },
      { name: "phone_number", type: "array", required: false, description: "List of phone numbers" },
      { name: "application_date", type: "string", required: false, description: "Date of application" },
      { name: "application_time", type: "string", required: false, description: "Time of application" },
      { name: "appointment_date", type: "string", required: false, description: "Date of appointment" },
      { name: "appointment_time", type: "string", required: false, description: "Time of appointment" },
      { name: "time_slot", type: "string", required: false, description: "Time slot for appointment" },
      { name: "reason_appointment", type: "string", required: false, description: "Reason for appointment" }
    ]
  },

  "delete-appointment": {
    id: "delete-appointment",
    category: "Appointments",
    title: "Delete Appointment",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/appointments/api/v1/{appointment_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "appointment_id", type: "string", required: true, description: "Unique identifier for the appointment", examples: ["APT49156", "APT4916", "APT6048"] }
    ]
  },

  // HRMS Employee Data endpoints
  "get-employee-by-id": {
    id: "get-employee-by-id",
    category: "Employee Data",
    title: "Get Employee by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "first_name": "Mark",
      "last_name": "Figueroa",
      "email": "jeffreydoyle@example.net",
      "phone_number": "001-581-896-0013x3890",
      "hire_date": "2021-02-19",
      "job_title": "Theme park manager",
      "job_id": 284,
      "gov_id": "829-01-2616",
      "hiring_manager_id": "E001",
      "hr_manager_id": "E009",
      "marital_status": "single",
      "state": "California",
      "emergency_contact_name": "Gina Moore",
      "emergency_contact_phone": "001-851-316-1559x40781",
      "sex": "Male",
      "department": "Carter, Fuller and Mcclure",
      "date_of_birth": "1978-12-26",
      "status": "Active"
    }
  },

  "get-all-employees": {
    id: "get-all-employees",
    category: "Employee Data",
    title: "Get All Employees",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/all_employee_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ]
  },

  "create-employee": {
    id: "create-employee",
    category: "Employee Data",
    title: "Create Employee",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "first_name", type: "string", required: false, description: "First name of the employee" },
      { name: "last_name", type: "string", required: false, description: "Last name of the employee" },
      { name: "email", type: "string", required: false, description: "Email of the employee" },
      { name: "phone_number", type: "string", required: false, description: "Phone number of the employee" },
      { name: "hire_date", type: "string", required: false, description: "Hire date of the employee" },
      { name: "job_title", type: "string", required: false, description: "Job title of the employee" },
      { name: "job_id", type: "integer", required: false, description: "Job ID of the employee" },
      { name: "gov_id", type: "string", required: false, description: "Government ID of the employee" },
      { name: "hiring_manager_id", type: "string", required: false, description: "Hiring manager ID" },
      { name: "hr_manager_id", type: "string", required: false, description: "HR manager ID" },
      { name: "marital_status", type: "string", required: false, description: "Marital status of the employee" },
      { name: "state", type: "string", required: false, description: "State of the employee" },
      { name: "emergency_contact_name", type: "string", required: false, description: "Emergency contact name" },
      { name: "emergency_contact_phone", type: "string", required: false, description: "Emergency contact phone" },
      { name: "sex", type: "string", required: false, description: "Sex of the employee" },
      { name: "department", type: "string", required: false, description: "Department of the employee" },
      { name: "date_of_birth", type: "string", required: false, description: "Date of birth of the employee" },
      { name: "status", type: "string", required: false, description: "Status of the employee" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "first_name": "Mark",
      "last_name": "Figueroa",
      "email": "jeffreydoyle@example.net",
      "phone_number": "001-581-896-0013x3890",
      "hire_date": "2021-02-19",
      "job_title": "Theme park manager",
      "job_id": 284,
      "gov_id": "829-01-2616",
      "hiring_manager_id": "E001",
      "hr_manager_id": "E009",
      "marital_status": "single",
      "state": "California",
      "emergency_contact_name": "Gina Moore",
      "emergency_contact_phone": "001-851-316-1559x40781",
      "sex": "Male",
      "department": "Carter, Fuller and Mcclure",
      "date_of_birth": "1978-12-26",
      "status": "Active"
    }
  },

  "update-employee": {
    id: "update-employee",
    category: "Employee Data",
    title: "Update Employee",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "first_name", type: "string", required: false, description: "First name of the employee" },
      { name: "last_name", type: "string", required: false, description: "Last name of the employee" },
      { name: "email", type: "string", required: false, description: "Email of the employee" },
      { name: "phone_number", type: "string", required: false, description: "Phone number of the employee" },
      { name: "hire_date", type: "string", required: false, description: "Hire date of the employee" },
      { name: "job_title", type: "string", required: false, description: "Job title of the employee" },
      { name: "job_id", type: "integer", required: false, description: "Job ID of the employee" },
      { name: "gov_id", type: "string", required: false, description: "Government ID of the employee" },
      { name: "hiring_manager_id", type: "string", required: false, description: "Hiring manager ID" },
      { name: "hr_manager_id", type: "string", required: false, description: "HR manager ID" },
      { name: "marital_status", type: "string", required: false, description: "Marital status of the employee" },
      { name: "state", type: "string", required: false, description: "State of the employee" },
      { name: "emergency_contact_name", type: "string", required: false, description: "Emergency contact name" },
      { name: "emergency_contact_phone", type: "string", required: false, description: "Emergency contact phone" },
      { name: "sex", type: "string", required: false, description: "Sex of the employee" },
      { name: "department", type: "string", required: false, description: "Department of the employee" },
      { name: "date_of_birth", type: "string", required: false, description: "Date of birth of the employee" },
      { name: "status", type: "string", required: false, description: "Status of the employee" }
    ]
  },

  "delete-employee": {
    id: "delete-employee",
    category: "Employee Data",
    title: "Delete Employee",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ]
  },

  // HRMS Employee Insurance Data endpoints
  "get-employee-insurance": {
    id: "get-employee-insurance",
    category: "Employee Insurance",
    title: "Get Employee Insurance",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "plan_name": "Basic Health Plan",
      "insurance_plan_id": "IP001",
      "enrollment_date": "2023-01-01",
      "coverage_type": "Individual",
      "employee_contribution": 150.00,
      "enrollment_time": "09:00:00"
    }
  },

  "create-employee-insurance": {
    id: "create-employee-insurance",
    category: "Employee Insurance",
    title: "Create Employee Insurance",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "plan_name", type: "string", required: false, description: "Name of the insurance plan" },
      { name: "insurance_plan_id", type: "string", required: false, description: "Unique identifier for the insurance plan" },
      { name: "enrollment_date", type: "string", required: false, description: "Date of enrollment" },
      { name: "coverage_type", type: "string", required: false, description: "Type of coverage" },
      { name: "employee_contribution", type: "float", required: false, description: "Employee's contribution amount" },
      { name: "enrollment_time", type: "string", required: false, description: "Time of enrollment" }
    ]
  },

  "update-employee-insurance": {
    id: "update-employee-insurance",
    category: "Employee Insurance",
    title: "Update Employee Insurance",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "plan_name", type: "string", required: false, description: "Name of the insurance plan" },
      { name: "insurance_plan_id", type: "string", required: false, description: "Unique identifier for the insurance plan" },
      { name: "enrollment_date", type: "string", required: false, description: "Date of enrollment" },
      { name: "coverage_type", type: "string", required: false, description: "Type of coverage" },
      { name: "employee_contribution", type: "float", required: false, description: "Employee's contribution amount" },
      { name: "enrollment_time", type: "string", required: false, description: "Time of enrollment" }
    ]
  },

  "delete-employee-insurance": {
    id: "delete-employee-insurance",
    category: "Employee Insurance",
    title: "Delete Employee Insurance",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ]
  },

  // HRMS Harassment Reports endpoints
  "get-harassment-report": {
    id: "get-harassment-report",
    category: "Harassment Reports",
    title: "Get Harassment Report",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports/{complaint_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "complaint_id", type: "integer", required: true, description: "Unique identifier for the complaint" }
    ],
    responseExample: {
      "complaint_id": 12345,
      "victim_employee_id": 1001,
      "harasser_employee_id": 1002,
      "harassment_level": "Medium",
      "description": "Verbal harassment in workplace",
      "status": "Under Investigation",
      "review_body": "HR Department",
      "incident_date": "2024-03-15",
      "incident_time": "14:30:00",
      "reported_date": "2024-03-16",
      "reported_time": "09:15:00",
      "level": "Medium"
    }
  },

  "create-harassment-report": {
    id: "create-harassment-report",
    category: "Harassment Reports",
    title: "Create Harassment Report",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "complaint_id", type: "integer", required: false, description: "Unique identifier for the complaint" },
      { name: "victim_employee_id", type: "integer", required: false, description: "ID of the victim employee" },
      { name: "harasser_employee_id", type: "integer", required: false, description: "ID of the harasser employee" },
      { name: "harassment_level", type: "string", required: false, description: "Level of harassment" },
      { name: "description", type: "string", required: false, description: "Description of the incident" },
      { name: "status", type: "string", required: false, description: "Status of the complaint" },
      { name: "review_body", type: "string", required: false, description: "Body reviewing the complaint" },
      { name: "incident_date", type: "string", required: false, description: "Date of the incident" },
      { name: "incident_time", type: "string", required: false, description: "Time of the incident" },
      { name: "reported_date", type: "string", required: false, description: "Date when reported" },
      { name: "reported_time", type: "string", required: false, description: "Time when reported" },
      { name: "level", type: "string", required: false, description: "Level of the complaint" }
    ]
  },

  "delete-harassment-report": {
    id: "delete-harassment-report",
    category: "Harassment Reports",
    title: "Delete Harassment Report",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports/{complaint_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "complaint_id", type: "integer", required: true, description: "Unique identifier for the complaint" }
    ]
  },

  // HRMS Insurance Plan endpoints
  "get-insurance-plan": {
    id: "get-insurance-plan",
    category: "Insurance Plan",
    title: "Get Insurance Plan",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/insurance_plan/{plan_name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan" }
    ],
    responseExample: {
      "plan_name": "Basic Health Plan",
      "plan_id": "IP001",
      "network": "PPO",
      "deductible_individual_family": "$1000/$2000",
      "out_of_pocket_maximum_individual_family": "$5000/$10000",
      "coinsurance": "20%",
      "overall_lifetime_maximum": "$1,000,000",
      "rates_premium_employee_only": 150.00,
      "rates_premium_employer_contribution_employee_only": 300.00,
      "rates_premium_employee_contribution_employee_only": 150.00,
      "rates_premium_employee_spouse": 300.00,
      "rates_premium_employer_contribution_employee_spouse": 600.00,
      "rates_premium_employee_contribution_employee_spouse": 300.00,
      "rates_premium_employee_children": 200.00,
      "rates_premium_employer_contribution_employee_children": 400.00,
      "rates_premium_employee_contribution_employee_children": 200.00,
      "rates_premium_family": 500.00,
      "rates_premium_employer_contribution_family": 1000.00,
      "rates_premium_employee_contribution_family": 500.00
    }
  },

  "update-insurance-plan": {
    id: "update-insurance-plan",
    category: "Insurance Plan",
    title: "Update Insurance Plan",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/insurance_plan/{plan_name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan" }
    ],
    bodyParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan" },
      { name: "plan_id", type: "string", required: false, description: "Unique identifier for the plan" },
      { name: "network", type: "string", required: false, description: "Network type" },
      { name: "deductible_individual_family", type: "string", required: false, description: "Deductible for individual/family" },
      { name: "out_of_pocket_maximum_individual_family", type: "string", required: false, description: "Out of pocket maximum for individual/family" },
      { name: "coinsurance", type: "string", required: false, description: "Coinsurance percentage" },
      { name: "overall_lifetime_maximum", type: "string", required: false, description: "Overall lifetime maximum" },
      { name: "rates_premium_employee_only", type: "float", required: false, description: "Premium rate for employee only" },
      { name: "rates_premium_employer_contribution_employee_only", type: "float", required: false, description: "Employer contribution for employee only" },
      { name: "rates_premium_employee_contribution_employee_only", type: "float", required: false, description: "Employee contribution for employee only" },
      { name: "rates_premium_employee_spouse", type: "float", required: false, description: "Premium rate for employee and spouse" },
      { name: "rates_premium_employer_contribution_employee_spouse", type: "float", required: false, description: "Employer contribution for employee and spouse" },
      { name: "rates_premium_employee_contribution_employee_spouse", type: "float", required: false, description: "Employee contribution for employee and spouse" },
      { name: "rates_premium_employee_children", type: "float", required: false, description: "Premium rate for employee and children" },
      { name: "rates_premium_employer_contribution_employee_children", type: "float", required: false, description: "Employer contribution for employee and children" },
      { name: "rates_premium_employee_contribution_employee_children", type: "float", required: false, description: "Employee contribution for employee and children" },
      { name: "rates_premium_family", type: "float", required: false, description: "Premium rate for family" },
      { name: "rates_premium_employer_contribution_family", type: "float", required: false, description: "Employer contribution for family" },
      { name: "rates_premium_employee_contribution_family", type: "float", required: false, description: "Employee contribution for family" }
    ]
  },

  // HRMS Leave Balance Data endpoints
  "get-leave-balance": {
    id: "get-leave-balance",
    category: "Leave Balance",
    title: "Get Leave Balance",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_balance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "annual_leave_balance": 15,
      "sick_leave_balance": 10,
      "personal_leave_balance": 5,
      "unpaid_leave_taken": 2,
      "leave_balance_updated_date": "2024-03-15"
    }
  },

  "update-leave-balance": {
    id: "update-leave-balance",
    category: "Leave Balance",
    title: "Update Leave Balance",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_balance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "annual_leave_balance", type: "integer", required: false, description: "Annual leave balance" },
      { name: "sick_leave_balance", type: "integer", required: false, description: "Sick leave balance" },
      { name: "personal_leave_balance", type: "integer", required: false, description: "Personal leave balance" },
      { name: "unpaid_leave_taken", type: "integer", required: false, description: "Unpaid leave taken" },
      { name: "leave_balance_updated_date", type: "string", required: false, description: "Date when leave balance was updated" }
    ]
  },

  // HRMS Leave Requests endpoints
  "get-leave-request": {
    id: "get-leave-request",
    category: "Leave Requests",
    title: "Get Leave Request",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "application_id": 12345,
      "start_date": "2024-04-01",
      "total_working_days_off": 5,
      "total_days_off": 7,
      "end_date": "2024-04-07",
      "deduction_from_salary": 0,
      "leave_type": "Annual Leave",
      "reason": "Family vacation",
      "request_date": "2024-03-15",
      "request_time": "10:30:00",
      "reviewed_by": "HR Manager",
      "status": "Pending",
      "approved_by": null
    }
  },

  "create-leave-request": {
    id: "create-leave-request",
    category: "Leave Requests",
    title: "Create Leave Request",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: false, description: "Unique identifier for the employee" },
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" },
      { name: "start_date", type: "string", required: false, description: "Start date of leave" },
      { name: "total_working_days_off", type: "integer", required: false, description: "Total working days off" },
      { name: "total_days_off", type: "integer", required: false, description: "Total days off" },
      { name: "end_date", type: "string", required: false, description: "End date of leave" },
      { name: "deduction_from_salary", type: "integer", required: false, description: "Amount to be deducted from salary" },
      { name: "leave_type", type: "string", required: false, description: "Type of leave" },
      { name: "reason", type: "string", required: false, description: "Reason for leave" },
      { name: "request_date", type: "string", required: false, description: "Date of request" },
      { name: "request_time", type: "string", required: false, description: "Time of request" },
      { name: "reviewed_by", type: "string", required: false, description: "Person who reviewed the request" },
      { name: "status", type: "string", required: false, description: "Status of the request" },
      { name: "approved_by", type: "string", required: false, description: "Person who approved the request" }
    ]
  },

  "update-leave-request": {
    id: "update-leave-request",
    category: "Leave Requests",
    title: "Update Leave Request",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: false, description: "Unique identifier for the employee" },
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" },
      { name: "start_date", type: "string", required: false, description: "Start date of leave" },
      { name: "total_working_days_off", type: "integer", required: false, description: "Total working days off" },
      { name: "total_days_off", type: "integer", required: false, description: "Total days off" },
      { name: "end_date", type: "string", required: false, description: "End date of leave" },
      { name: "deduction_from_salary", type: "integer", required: false, description: "Amount to be deducted from salary" },
      { name: "leave_type", type: "string", required: false, description: "Type of leave" },
      { name: "reason", type: "string", required: false, description: "Reason for leave" },
      { name: "request_date", type: "string", required: false, description: "Date of request" },
      { name: "request_time", type: "string", required: false, description: "Time of request" },
      { name: "reviewed_by", type: "string", required: false, description: "Person who reviewed the request" },
      { name: "status", type: "string", required: false, description: "Status of the request" },
      { name: "approved_by", type: "string", required: false, description: "Person who approved the request" }
    ]
  },

  "delete-leave-request": {
    id: "delete-leave-request",
    category: "Leave Requests",
    title: "Delete Leave Request",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" }
    ]
  },

  // HRMS Payroll endpoints
  "get-payroll": {
    id: "get-payroll",
    category: "Payroll",
    title: "Get Payroll",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/payroll/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "base_salary": 5000.00,
      "federal_tax": 500.00,
      "state_tax": 250.00,
      "total_tax": 750.00,
      "month": "March 2024",
      "salary_received_day": "2024-03-31"
    }
  },

  // HRMS Salary Info endpoints
  "get-salary-info": {
    id: "get-salary-info",
    category: "Salary Info",
    title: "Get Salary Info",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/salary_info/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "base_salary": 5000.00,
      "salary_type": "Monthly",
      "bonus": 1000.00,
      "commission": 500.00,
      "currency": "USD",
      "salary_grade": "Grade 3",
      "last_salary_increase_date": "2023-12-01"
    }
  },

  // HRMS Taxes endpoints
  "get-all-taxes": {
    id: "get-all-taxes",
    category: "Taxes",
    title: "Get All Taxes",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/all_taxes",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ]
  },

  // HRMS Company Policies endpoints
  "get-sexual-harassment-policy": {
    id: "get-sexual-harassment-policy",
    category: "Company Policies",
    title: "Get Prevention of Sexual Harassment Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/Prevention_of_Sexual_Harassment_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ]
  },

  "get-hr-complaint-policy": {
    id: "get-hr-complaint-policy",
    category: "Company Policies",
    title: "Get General HR Complaint Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/General_HR_Complaint_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ]
  },

  "get-leave-policy": {
    id: "get-leave-policy",
    category: "Company Policies",
    title: "Get Leave Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/Leave_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ]
  },
};