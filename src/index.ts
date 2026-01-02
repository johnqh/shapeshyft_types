/**
 * @sudobility/shapeshyft_types
 * TypeScript types for ShapeShyft API - LLM structured output platform
 */

// Re-export common types from @sudobility/types
export type {
  ApiResponse,
  BaseResponse,
  NetworkClient,
  Optional,
  PaginatedResponse,
  PaginationInfo,
  PaginationOptions,
} from '@sudobility/types';

import type { Optional, BaseResponse } from '@sudobility/types';

// =============================================================================
// Enum Types
// =============================================================================

export type LlmProvider = 'openai' | 'gemini' | 'anthropic' | 'llm_server';

export type HttpMethod = 'GET' | 'POST';

// =============================================================================
// JSON Schema Type
// =============================================================================

export interface JsonSchema {
  type?: string;
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  required?: string[];
  description?: string;
  enum?: (string | number | boolean)[];
  default?: unknown;
  format?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  additionalProperties?: boolean | JsonSchema;
  [key: string]: unknown;
}

// =============================================================================
// Entity Types (database models)
// =============================================================================

export interface User {
  uuid: string;
  firebase_uid: string;
  email: string | null;
  display_name: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface LlmApiKey {
  uuid: string;
  user_id: string;
  key_name: string;
  provider: LlmProvider;
  encrypted_api_key: string | null;
  endpoint_url: string | null;
  encryption_iv: string | null;
  is_active: boolean | null;
  created_at: Date | null;
  updated_at: Date | null;
}

/** Safe version of LlmApiKey without sensitive data (for API responses) */
export interface LlmApiKeySafe {
  uuid: string;
  entity_id: string;
  key_name: string;
  provider: LlmProvider;
  has_api_key: boolean;
  endpoint_url: string | null;
  is_active: boolean | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface Project {
  uuid: string;
  entity_id: string;
  project_name: string;
  display_name: string;
  description: string | null;
  is_active: boolean | null;
  // API Key fields (prefix only - full key is never returned in Project response)
  api_key_prefix: string | null;
  api_key_created_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface Endpoint {
  uuid: string;
  project_id: string;
  endpoint_name: string;
  display_name: string;
  http_method: HttpMethod;
  llm_key_id: string;
  input_schema: JsonSchema | null;
  output_schema: JsonSchema | null;
  instructions: string | null;
  context: string | null;
  is_active: boolean | null;
  // IP allowlist - array of IPv4 addresses, null = allow all
  ip_allowlist: string[] | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface UsageAnalytics {
  uuid: string;
  endpoint_id: string;
  timestamp: Date;
  success: boolean;
  error_message: string | null;
  tokens_input: number | null;
  tokens_output: number | null;
  latency_ms: number | null;
  estimated_cost_cents: number | null;
  request_metadata: Record<string, unknown> | null;
}

export interface UserSettings {
  uuid: string | null;
  user_id: string;
  organization_name: string | null;
  organization_path: string;
  is_default: boolean;
  created_at: Date | null;
  updated_at: Date | null;
}

// =============================================================================
// Request Body Types
// =============================================================================

// User requests
export interface UserCreateRequest {
  firebase_uid: string;
  email: Optional<string>;
  display_name: Optional<string>;
}

export interface UserUpdateRequest {
  email: Optional<string>;
  display_name: Optional<string>;
}

// User Settings requests
export interface UserSettingsUpdateRequest {
  organization_name: Optional<string>;
  organization_path: Optional<string>;
}

// LLM API Key requests
export interface LlmApiKeyCreateRequest {
  key_name: string;
  provider: LlmProvider;
  api_key: Optional<string>;
  endpoint_url: Optional<string>;
}

export interface LlmApiKeyUpdateRequest {
  key_name: Optional<string>;
  api_key: Optional<string>;
  endpoint_url: Optional<string>;
  is_active: Optional<boolean>;
}

// Project requests
export interface ProjectCreateRequest {
  project_name: string;
  display_name: string;
  description: Optional<string>;
}

export interface ProjectUpdateRequest {
  project_name: Optional<string>;
  display_name: Optional<string>;
  description: Optional<string>;
  is_active: Optional<boolean>;
}

// Endpoint requests
export interface EndpointCreateRequest {
  endpoint_name: string;
  display_name: string;
  http_method: Optional<HttpMethod>;
  llm_key_id: string;
  input_schema: Optional<JsonSchema>;
  output_schema: Optional<JsonSchema>;
  instructions: Optional<string>;
  context: Optional<string>;
}

export interface EndpointUpdateRequest {
  endpoint_name?: Optional<string>;
  display_name?: Optional<string>;
  http_method?: Optional<HttpMethod>;
  llm_key_id?: Optional<string>;
  input_schema?: Optional<JsonSchema>;
  output_schema?: Optional<JsonSchema>;
  instructions?: Optional<string>;
  context?: Optional<string>;
  is_active?: Optional<boolean>;
  ip_allowlist?: Optional<string[]>;
}

// =============================================================================
// Query Parameter Types
// =============================================================================

export interface ProjectQueryParams {
  is_active: Optional<string>;
}

export interface EndpointQueryParams {
  is_active: Optional<string>;
}

export interface UsageAnalyticsQueryParams {
  endpoint_id: Optional<string>;
  project_id: Optional<string>;
  start_date: Optional<string>;
  end_date: Optional<string>;
  success: Optional<string>;
}

// =============================================================================
// Analytics Aggregation Types
// =============================================================================

export interface UsageAggregate {
  total_requests: number;
  successful_requests: number;
  failed_requests: number;
  total_tokens_input: number;
  total_tokens_output: number;
  total_estimated_cost_cents: number;
  average_latency_ms: number;
}

export interface UsageByEndpoint extends UsageAggregate {
  endpoint_id: string;
  endpoint_name: string;
}

export interface UsageByDate extends UsageAggregate {
  date: string;
}

/** Compound response from analytics API endpoint */
export interface AnalyticsResponse {
  aggregate: UsageAggregate;
  by_endpoint: UsageByEndpoint[];
}

// =============================================================================
// LLM Request/Response Types
// =============================================================================

export interface LlmRequest {
  prompt: string;
  system_prompt: Optional<string>;
  output_schema: JsonSchema;
  model: Optional<string>;
  temperature: Optional<number>;
  max_tokens: Optional<number>;
}

export interface LlmResponse {
  content: unknown;
  raw_response: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  provider: LlmProvider;
}

// =============================================================================
// AI Endpoint Execution Types
// =============================================================================

export interface AiExecutionRequest {
  input: unknown;
}

export interface AiExecutionResponse {
  output: unknown;
  usage: {
    tokens_input: number;
    tokens_output: number;
    latency_ms: number;
    estimated_cost_cents: number;
  };
}

/** Response from /prompt endpoint - returns just the generated prompt */
export interface AiPromptResponse {
  prompt: string;
}

// =============================================================================
// API Key Types
// =============================================================================

/** Response when refreshing/generating a project API key */
export interface RefreshApiKeyResponse {
  /** Full API key (only returned on generation/refresh) */
  api_key: string;
  /** Key prefix for display (e.g., "sk_live_ab...") */
  api_key_prefix: string;
  /** When the key was created/refreshed */
  api_key_created_at: string;
}

/** Response when fetching the full API key */
export interface GetApiKeyResponse {
  /** Full decrypted API key */
  api_key: string;
}

// =============================================================================
// ApiHelper Types
// =============================================================================

/** Input for ApiHelper.prompt() */
export interface PromptInput {
  inputData: unknown;
  outputSchema: JsonSchema | null;
  instructions: string | null;
  context: string | null;
  provider: LlmProvider;
}

/** Input for ApiHelper.request() */
export interface ApiHelperRequestInput {
  prompt: string;
  outputSchema: JsonSchema;
  provider: LlmProvider;
  providerConfig: {
    apiKey?: string;
    endpointUrl?: string;
    model?: string;
  };
  options?: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  };
}

/** Output from ApiHelper.request() */
export interface ApiHelperRequestOutput {
  apiPayload: Record<string, unknown>;
  endpointUrl: string;
  provider: LlmProvider;
}

// =============================================================================
// Response Helper Functions
// =============================================================================

/** Create a success response */
export function successResponse<T>(data: T): BaseResponse<T> {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/** Create an error response */
export function errorResponse(error: string): BaseResponse<never> {
  return {
    success: false,
    error,
    timestamp: new Date().toISOString(),
  };
}

// =============================================================================
// API Response Type Aliases (for FE client convenience)
// =============================================================================

// Entity list responses
export type ProjectListResponse = BaseResponse<Project[]>;
export type LlmApiKeyListResponse = BaseResponse<LlmApiKeySafe[]>;
export type EndpointListResponse = BaseResponse<Endpoint[]>;

// Single entity responses
export type ProjectResponse = BaseResponse<Project>;
export type LlmApiKeyResponse = BaseResponse<LlmApiKeySafe>;
export type EndpointResponse = BaseResponse<Endpoint>;
export type UserSettingsResponse = BaseResponse<UserSettings>;

// Analytics response
export type AnalyticsApiResponse = BaseResponse<AnalyticsResponse>;

// AI execution responses
export type AiExecutionApiResponse = BaseResponse<AiExecutionResponse>;
export type AiPromptApiResponse = BaseResponse<AiPromptResponse>;

// API Key responses
export type RefreshApiKeyApiResponse = BaseResponse<RefreshApiKeyResponse>;
export type GetApiKeyApiResponse = BaseResponse<GetApiKeyResponse>;

// Health check response
export type HealthCheckResponse = BaseResponse<HealthCheckData>;

// =============================================================================
// Health check response
// =============================================================================

export interface HealthCheckData {
  name: string;
  version: string;
  status: string;
}
