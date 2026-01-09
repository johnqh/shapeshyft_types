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

export type LlmProvider =
  | 'openai'
  | 'anthropic'
  | 'gemini'
  | 'mistral'
  | 'cohere'
  | 'groq'
  | 'xai'
  | 'deepseek'
  | 'perplexity'
  | 'llm_server';

export type HttpMethod = 'GET' | 'POST';

// =============================================================================
// LLM Provider Models
// =============================================================================

/** OpenAI model options */
export type OpenAiModel =
  | 'gpt-4o'
  | 'gpt-4o-mini'
  | 'gpt-4-turbo'
  | 'gpt-3.5-turbo'
  | 'o1'
  | 'o1-mini'
  | 'o1-pro';

/** Anthropic model options */
export type AnthropicModel =
  | 'claude-sonnet-4-20250514'
  | 'claude-opus-4-20250514'
  | 'claude-3-5-haiku-20241022';

/** Google Gemini model options */
export type GeminiModel =
  | 'gemini-2.0-flash'
  | 'gemini-2.0-flash-lite'
  | 'gemini-1.5-pro'
  | 'gemini-1.5-flash';

/** Mistral AI model options */
export type MistralModel =
  | 'mistral-large-latest'
  | 'mistral-medium-latest'
  | 'mistral-small-latest'
  | 'codestral-latest'
  | 'mistral-nemo';

/** Cohere model options */
export type CohereModel =
  | 'command-r-plus'
  | 'command-r'
  | 'command'
  | 'command-light';

/** Groq model options (fast inference) */
export type GroqModel =
  | 'llama-3.3-70b-versatile'
  | 'llama-3.1-8b-instant'
  | 'mixtral-8x7b-32768'
  | 'gemma2-9b-it';

/** xAI (Grok) model options */
export type XaiModel =
  | 'grok-2'
  | 'grok-2-mini';

/** DeepSeek model options */
export type DeepSeekModel =
  | 'deepseek-chat'
  | 'deepseek-coder'
  | 'deepseek-reasoner';

/** Perplexity model options */
export type PerplexityModel =
  | 'llama-3.1-sonar-small-128k-online'
  | 'llama-3.1-sonar-large-128k-online'
  | 'llama-3.1-sonar-huge-128k-online';

/** Custom LLM server models (suggested options, user can also type custom) */
export type LlmServerModel =
  | 'qwen/qwen3-30b-a3b-2507'
  | 'meta-llama-3.1-8b-instruct'
  | 'qwen-32b-everything'
  | 'openai/gpt-oss-20b'
  | string; // User can type any custom model name

/** Union of all model types */
export type LlmModel =
  | OpenAiModel
  | AnthropicModel
  | GeminiModel
  | MistralModel
  | CohereModel
  | GroqModel
  | XaiModel
  | DeepSeekModel
  | PerplexityModel
  | LlmServerModel;

/** List of available providers */
export const LLM_PROVIDERS: LlmProvider[] = [
  'openai',
  'anthropic',
  'gemini',
  'mistral',
  'cohere',
  'groq',
  'xai',
  'deepseek',
  'perplexity',
  'llm_server',
];

/** Models available for each provider */
export const PROVIDER_MODELS: Record<LlmProvider, readonly string[]> = {
  openai: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-3.5-turbo', 'o1', 'o1-mini', 'o1-pro'] as const,
  anthropic: ['claude-sonnet-4-20250514', 'claude-opus-4-20250514', 'claude-3-5-haiku-20241022'] as const,
  gemini: ['gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-pro', 'gemini-1.5-flash'] as const,
  mistral: ['mistral-large-latest', 'mistral-medium-latest', 'mistral-small-latest', 'codestral-latest', 'mistral-nemo'] as const,
  cohere: ['command-r-plus', 'command-r', 'command', 'command-light'] as const,
  groq: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'mixtral-8x7b-32768', 'gemma2-9b-it'] as const,
  xai: ['grok-2', 'grok-2-mini'] as const,
  deepseek: ['deepseek-chat', 'deepseek-coder', 'deepseek-reasoner'] as const,
  perplexity: ['llama-3.1-sonar-small-128k-online', 'llama-3.1-sonar-large-128k-online', 'llama-3.1-sonar-huge-128k-online'] as const,
  llm_server: ['qwen/qwen3-30b-a3b-2507', 'meta-llama-3.1-8b-instruct', 'qwen-32b-everything', 'openai/gpt-oss-20b'] as const,
};

/** Default model for each provider */
export const DEFAULT_PROVIDER_MODEL: Record<LlmProvider, string> = {
  openai: 'gpt-4o-mini',
  anthropic: 'claude-sonnet-4-20250514',
  gemini: 'gemini-2.0-flash',
  mistral: 'mistral-small-latest',
  cohere: 'command-r',
  groq: 'llama-3.3-70b-versatile',
  xai: 'grok-2-mini',
  deepseek: 'deepseek-chat',
  perplexity: 'llama-3.1-sonar-small-128k-online',
  llm_server: 'meta-llama-3.1-8b-instruct',
};

/** Providers that allow custom model input (user can type any model name) */
export const PROVIDER_ALLOWS_CUSTOM_MODEL: Record<LlmProvider, boolean> = {
  openai: false,
  anthropic: false,
  gemini: false,
  mistral: false,
  cohere: false,
  groq: false,
  xai: false,
  deepseek: false,
  perplexity: false,
  llm_server: true, // Users can type any model name for custom LLM servers
};

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
  id: string;
  firebase_uid: string;
  email: string | null;
  display_name: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface LlmApiKey {
  uuid: string;
  entity_id: string;
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
  id: string | null;
  firebase_uid: string;
  organization_name: string | null;
  organization_path: string;
  /** Computed field (not stored in DB): true if settings are auto-generated defaults */
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
