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
  | 'lm_studio';

export type HttpMethod = 'GET' | 'POST';

// =============================================================================
// LLM Provider Models
// =============================================================================

/** OpenAI model options (January 2026) */
export type OpenAiModel =
  // GPT-4.1 family (latest non-reasoning)
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  // GPT-4o family (omni - multimodal)
  | 'gpt-4o'
  | 'gpt-4o-mini'
  // Reasoning models (o-series)
  | 'o3'
  | 'o3-pro'
  | 'o4-mini'
  // Legacy (still available)
  | 'gpt-4-turbo'
  | 'o1';

/** Anthropic model options (January 2026) */
export type AnthropicModel =
  // Claude 4.5 (latest)
  | 'claude-opus-4-5-20251124'
  | 'claude-sonnet-4-5-20251124'
  // Claude 4.1
  | 'claude-opus-4-1-20250805'
  // Claude 4 (May 2025)
  | 'claude-sonnet-4-20250514'
  | 'claude-opus-4-20250514'
  // Claude 3.5
  | 'claude-3-5-haiku-20241022';

/** Google Gemini model options (January 2026) */
export type GeminiModel =
  // Gemini 3 (latest)
  | 'gemini-3-pro-preview'
  | 'gemini-3-flash-preview'
  | 'gemini-3-pro-image-preview'
  // Gemini 2.5
  | 'gemini-2.5-pro'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-flash-lite'
  | 'gemini-2.5-flash-image'
  | 'gemini-2.5-flash-native-audio-preview'
  // Gemini 2.0
  | 'gemini-2.0-flash'
  | 'gemini-2.0-flash-lite';

/** Mistral AI model options (January 2026) */
export type MistralModel =
  // Large models
  | 'mistral-large-2512'      // Mistral Large 3 (MoE 41B/675B)
  | 'mistral-large-latest'
  // Medium models
  | 'mistral-medium-3.1'
  | 'mistral-medium-latest'
  // Small models
  | 'mistral-small-3.2'       // Vision capable
  | 'mistral-small-latest'
  // Ministral family (small, efficient)
  | 'ministral-3b-2512'
  | 'ministral-8b-2512'
  | 'ministral-14b-2512'
  // Code models
  | 'codestral-2501'
  | 'codestral-latest'
  // Vision models (Pixtral)
  | 'pixtral-large-2411'
  | 'pixtral-large-latest'
  // Audio models (Voxtral)
  | 'voxtral-small'
  | 'voxtral-mini'
  // Document AI
  | 'mistral-ocr-2512';

/** Cohere model options (January 2026) */
export type CohereModel =
  // Command A family (latest)
  | 'command-a-03-2025'        // Most performant
  | 'command-a-reasoning'      // Hybrid reasoning, 256K context
  | 'command-a-vision'         // Vision capable
  // Command R family (updated)
  | 'command-r-plus-08-2024'
  | 'command-r-08-2024'
  // Legacy aliases
  | 'command-r-plus'
  | 'command-r';

/** Groq model options (January 2026 - fast inference) */
export type GroqModel =
  // Llama models
  | 'llama-3.3-70b-versatile'
  | 'llama-3.1-8b-instant'
  // GPT OSS models
  | 'openai/gpt-oss-120b'
  | 'openai/gpt-oss-20b'
  // Compound (agentic with web search)
  | 'groq/compound'
  | 'groq/compound-mini'
  // Safety
  | 'meta-llama/llama-guard-4-12b'
  // Audio
  | 'whisper-large-v3'
  | 'whisper-large-v3-turbo';

/** xAI (Grok) model options (January 2026) */
export type XaiModel =
  // Grok 4 (latest)
  | 'grok-4'
  | 'grok-4.1-fast'
  // Grok 3
  | 'grok-3'
  | 'grok-3-mini'
  | 'grok-3-vision'
  // Grok 2 (legacy)
  | 'grok-2'
  | 'grok-2-vision';

/** DeepSeek model options (January 2026) */
export type DeepSeekModel =
  // V3.2 (latest - both modes share same model)
  | 'deepseek-chat'      // Non-thinking mode of V3.2
  | 'deepseek-reasoner'; // Thinking mode of V3.2

/** Perplexity model options (January 2026) */
export type PerplexityModel =
  // Sonar family (current)
  | 'sonar'                    // Lightweight search
  | 'sonar-pro'                // Deeper retrieval
  | 'sonar-reasoning'          // Real-time reasoning
  | 'sonar-reasoning-pro'      // DeepSeek-R1 powered
  | 'sonar-deep-research';     // Long-form reports

/** Custom LLM server models (suggested options, user can also type custom) */
export type LlmServerModel =
  // Text models (trending on LM Studio January 2026)
  | 'openai/gpt-oss-20b'
  | 'openai/gpt-oss-120b'
  | 'deepseek/deepseek-r1-0528-qwen3-8b'
  | 'qwen/qwen3-8b'
  | 'qwen/qwen3-14b'
  | 'qwen/qwen3-30b-a3b-2507'
  | 'qwen/qwen3-4b-2507'
  | 'qwen/qwen3-4b-thinking-2507'
  | 'qwen/qwen3-coder-30b'
  | 'qwen/qwen2.5-coder-14b'
  | 'mistralai/mistral-7b-instruct-v0.3'
  | 'mistralai/ministral-3-14b-reasoning'
  | 'mistralai/magistral-small-2509'
  // Vision models (LM Studio / local)
  | 'google/gemma-3-4b'
  | 'google/gemma-3-12b'
  | 'google/gemma-3-27b'
  | 'google/gemma-3n-e4b'
  | 'qwen/qwen3-vl-4b'
  | 'qwen/qwen3-vl-8b'
  | 'qwen/qwen3-vl-30b'
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
  'lm_studio',
];

// =============================================================================
// Model Capabilities (Multimodal Support)
// =============================================================================

/**
 * Supported media input formats for different providers/models.
 * - url: HTTP/HTTPS URLs to media files
 * - base64: Base64-encoded binary data (data URLs)
 * - gcs: Google Cloud Storage URIs (gs://bucket/path)
 * - s3: AWS S3 URIs (s3://bucket/key)
 * - file: Direct file upload (multipart form data)
 */
export type MediaInputFormat = 'url' | 'base64' | 'gcs' | 's3' | 'file';

/**
 * Media format support configuration for a model.
 * Specifies which input formats are supported for each media type.
 */
export interface MediaFormatSupport {
  /** Supported formats for image input */
  imageFormats?: MediaInputFormat[];
  /** Supported formats for audio input */
  audioFormats?: MediaInputFormat[];
  /** Supported formats for video input */
  videoFormats?: MediaInputFormat[];
}

/**
 * Capabilities for a model's input and output modalities.
 * undefined = unknown (user's responsibility to verify)
 * true = supported
 * false = not supported
 */
export interface ModelCapabilities {
  // Input capabilities (what the model can receive)
  visionInput?: boolean;    // Can process images
  audioInput?: boolean;     // Can process audio
  videoInput?: boolean;     // Can process video

  // Output capabilities (what the model can generate)
  imageOutput?: boolean;    // Can generate images
  audioOutput?: boolean;    // Can generate audio
  videoOutput?: boolean;    // Can generate video

  // Media format support (what formats the model accepts)
  mediaFormats?: MediaFormatSupport;
}


// =============================================================================
// Schema Capability Detection
// =============================================================================

/**
 * Required capabilities detected from a schema
 */
export interface RequiredCapabilities {
  visionInput?: boolean;   // Matches ModelCapabilities.visionInput
  audioInput?: boolean;
  videoInput?: boolean;
  imageOutput?: boolean;
  audioOutput?: boolean;
  videoOutput?: boolean;
}

/**
 * Detect media type from contentMediaType string
 */
function detectMediaType(contentMediaType: string): 'image' | 'audio' | 'video' | null {
  if (contentMediaType.startsWith('image/')) return 'image';
  if (contentMediaType.startsWith('audio/')) return 'audio';
  if (contentMediaType.startsWith('video/')) return 'video';
  return null;
}

/**
 * Recursively scan a JSON schema for media type properties.
 * Returns detected media types.
 */
function scanSchemaForMediaTypes(
  schema: Record<string, unknown>,
  result: Set<'image' | 'audio' | 'video'>
): void {
  if (!schema || typeof schema !== 'object') return;

  // Check if this property has contentMediaType
  const contentMediaType = schema['contentMediaType'];
  if (typeof contentMediaType === 'string') {
    const mediaType = detectMediaType(contentMediaType);
    if (mediaType) {
      result.add(mediaType);
    }
  }

  // Recurse into properties
  const properties = schema['properties'];
  if (properties && typeof properties === 'object') {
    for (const prop of Object.values(properties as Record<string, unknown>)) {
      if (prop && typeof prop === 'object') {
        scanSchemaForMediaTypes(prop as Record<string, unknown>, result);
      }
    }
  }

  // Recurse into array items
  const items = schema['items'];
  if (items && typeof items === 'object') {
    scanSchemaForMediaTypes(items as Record<string, unknown>, result);
  }
}

/**
 * Detect required capabilities from input and output schemas.
 * Returns which media capabilities are required.
 */
export function detectRequiredCapabilities(
  inputSchema?: Record<string, unknown> | null,
  outputSchema?: Record<string, unknown> | null
): RequiredCapabilities {
  const result: RequiredCapabilities = {};

  // Scan input schema for required input capabilities
  if (inputSchema) {
    const inputMediaTypes = new Set<'image' | 'audio' | 'video'>();
    scanSchemaForMediaTypes(inputSchema, inputMediaTypes);
    if (inputMediaTypes.has('image')) result.visionInput = true;
    if (inputMediaTypes.has('audio')) result.audioInput = true;
    if (inputMediaTypes.has('video')) result.videoInput = true;
  }

  // Scan output schema for required output capabilities
  if (outputSchema) {
    const outputMediaTypes = new Set<'image' | 'audio' | 'video'>();
    scanSchemaForMediaTypes(outputSchema, outputMediaTypes);
    if (outputMediaTypes.has('image')) result.imageOutput = true;
    if (outputMediaTypes.has('audio')) result.audioOutput = true;
    if (outputMediaTypes.has('video')) result.videoOutput = true;
  }

  return result;
}

// =============================================================================
// Cost Estimation
// =============================================================================

/**
 * Model pricing structure with multimodal support.
 * All costs are in cents.
 *
 * Text costs: per 1M tokens
 * Image costs: per image
 * Audio costs: per minute
 * Video costs: per minute
 */
export interface ModelPricing {
  // Text token costs (per 1M tokens in cents)
  input: number;   // Cost per 1M input tokens
  output: number;  // Cost per 1M output tokens

  // Image costs (per image in cents) - optional
  imageInput?: number;   // Cost per input image
  imageOutput?: number;  // Cost per generated image

  // Audio costs (per minute in cents) - optional
  audioInput?: number;   // Cost per minute of audio input
  audioOutput?: number;  // Cost per minute of audio output

  // Video costs (per minute in cents) - optional
  videoInput?: number;   // Cost per minute of video input
  videoOutput?: number;  // Cost per minute of video output
}

/**
 * Multimodal usage input for cost estimation
 */
export interface MultimodalUsage {
  // Text tokens
  inputTokens?: number;
  outputTokens?: number;

  // Media counts/durations
  imagesInput?: number;       // Number of input images
  imagesOutput?: number;      // Number of generated images
  audioInputMinutes?: number; // Minutes of audio input
  audioOutputMinutes?: number;// Minutes of audio output
  videoInputMinutes?: number; // Minutes of video input
  videoOutputMinutes?: number;// Minutes of video output
}

/**
 * Estimate cost in cents for token usage (text only)
 * @param pricing - Model pricing configuration
 * @param inputTokens - Number of input tokens
 * @param outputTokens - Number of output tokens
 */
export function estimateCost(
  pricing: ModelPricing,
  inputTokens: number,
  outputTokens: number
): number {
  const inputCost = (inputTokens / 1_000_000) * pricing.input;
  const outputCost = (outputTokens / 1_000_000) * pricing.output;
  return Math.round((inputCost + outputCost) * 100) / 100; // Round to 2 decimal places
}

/**
 * Estimate cost in cents for multimodal usage
 * @param pricing - Model pricing configuration
 * @param usage - Multimodal usage details
 */
export function estimateMultimodalCost(
  pricing: ModelPricing,
  usage: MultimodalUsage
): number {
  let totalCost = 0;

  // Text token costs
  if (usage.inputTokens) {
    totalCost += (usage.inputTokens / 1_000_000) * pricing.input;
  }
  if (usage.outputTokens) {
    totalCost += (usage.outputTokens / 1_000_000) * pricing.output;
  }

  // Image costs
  if (usage.imagesInput && pricing.imageInput) {
    totalCost += usage.imagesInput * pricing.imageInput;
  }
  if (usage.imagesOutput && pricing.imageOutput) {
    totalCost += usage.imagesOutput * pricing.imageOutput;
  }

  // Audio costs
  if (usage.audioInputMinutes && pricing.audioInput) {
    totalCost += usage.audioInputMinutes * pricing.audioInput;
  }
  if (usage.audioOutputMinutes && pricing.audioOutput) {
    totalCost += usage.audioOutputMinutes * pricing.audioOutput;
  }

  // Video costs
  if (usage.videoInputMinutes && pricing.videoInput) {
    totalCost += usage.videoInputMinutes * pricing.videoInput;
  }
  if (usage.videoOutputMinutes && pricing.videoOutput) {
    totalCost += usage.videoOutputMinutes * pricing.videoOutput;
  }

  return Math.round(totalCost * 100) / 100; // Round to 2 decimal places
}

/**
 * Format cost in cents to a readable string (e.g., "$0.0015" or "$1.50")
 */
export function formatCost(costCents: number): string {
  const dollars = costCents / 100;
  if (dollars < 0.01) {
    return `$${dollars.toFixed(4)}`;
  } else if (dollars < 1) {
    return `$${dollars.toFixed(3)}`;
  } else {
    return `$${dollars.toFixed(2)}`;
  }
}

/**
 * Format cost per million tokens for display
 */
export function formatCostPerMillion(pricing: ModelPricing): string {
  const inputDollars = pricing.input / 100;
  const outputDollars = pricing.output / 100;
  return `$${inputDollars.toFixed(2)} / $${outputDollars.toFixed(2)} per 1M tokens`;
}

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
  model: string | null;
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
  model: Optional<string>;
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
  model?: Optional<string>;
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

// =============================================================================
// Provider API Types (for GET /providers endpoints)
// =============================================================================

/**
 * Provider configuration returned from the API
 */
export interface ProviderConfig {
  id: LlmProvider;
  name: string;
  description: string;
  allowsCustomModel: boolean;
  defaultModel: string;
  requiresEndpointUrl: boolean;
}

/**
 * Model information with capabilities and pricing
 */
export interface ModelInfo {
  id: string;
  capabilities: ModelCapabilities;
  pricing: ModelPricing;
}

/**
 * Response from GET /providers/:provider/models
 */
export interface ProviderModelsResponse {
  provider: ProviderConfig;
  models: ModelInfo[];
}

// Provider API response type aliases
export type ProviderListResponse = BaseResponse<ProviderConfig[]>;
export type ProviderResponse = BaseResponse<ProviderConfig>;
export type ProviderModelsApiResponse = BaseResponse<ProviderModelsResponse>;
