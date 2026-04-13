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

/**
 * Media type for multimodal content
 */
export type MediaType = 'image' | 'audio' | 'video';

// =============================================================================
// LLM Provider Models
// =============================================================================

/** OpenAI model options (March 2026) */
export type OpenAiModel =
  // GPT-5.4 family (latest frontier)
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  // GPT-4.1 family (coding-specialized, still in API)
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  // GPT-4o family (omni - multimodal)
  | 'gpt-4o'
  | 'gpt-4o-mini'
  // Reasoning models (o-series)
  | 'o3'
  | 'o3-pro'
  | 'o4-mini';

/** Anthropic model options (March 2026) */
export type AnthropicModel =
  // Claude 4.6 (latest)
  | 'claude-opus-4-6-20260205'
  | 'claude-sonnet-4-6-20260217'
  // Claude 4.5
  | 'claude-opus-4-5-20251101'
  | 'claude-sonnet-4-5-20250929'
  | 'claude-haiku-4-5-20251001'
  // Claude 4.1
  | 'claude-opus-4-1-20250805'
  // Claude 4 (May 2025)
  | 'claude-sonnet-4-20250514'
  | 'claude-opus-4-20250514';

/** Google Gemini model options (March 2026) */
export type GeminiModel =
  // Gemini 3.1 (latest)
  | 'gemini-3.1-pro-preview'
  | 'gemini-3.1-flash-lite-preview'
  | 'gemini-3.1-flash-image-preview'
  // Gemini 3
  | 'gemini-3-flash-preview'
  | 'gemini-3-pro-image-preview'
  // Gemini 2.5
  | 'gemini-2.5-pro'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-flash-lite'
  | 'gemini-2.5-flash-image'
  | 'gemini-2.5-flash-native-audio-preview';

/** Mistral AI model options (March 2026) */
export type MistralModel =
  // Large models
  | 'mistral-large-2512' // Mistral Large 3 (MoE 41B/675B)
  | 'mistral-large-latest'
  // Medium models
  | 'mistral-medium-3.1'
  | 'mistral-medium-latest'
  // Small models
  | 'mistral-small-2603' // Mistral Small 4 (hybrid reasoning/coding/instruct)
  | 'mistral-small-latest'
  // Ministral family (small, efficient)
  | 'ministral-3b-2512'
  | 'ministral-8b-2512'
  | 'ministral-14b-2512'
  // Code models
  | 'devstral-2512' // Devstral 2
  | 'codestral-2508'
  | 'codestral-latest'
  // Reasoning models (Magistral)
  | 'magistral-medium-2509'
  | 'magistral-small-2509'
  | 'magistral-medium-latest'
  | 'magistral-small-latest'
  // Vision models (Pixtral)
  | 'pixtral-large-2411'
  | 'pixtral-large-latest'
  // Audio models (Voxtral)
  | 'voxtral-small'
  | 'voxtral-mini'
  // Document AI
  | 'mistral-ocr-2512';

/** Cohere model options (March 2026) */
export type CohereModel =
  // Command A family (latest)
  | 'command-a-03-2025' // Most performant
  | 'command-a-reasoning-08-2025' // Hybrid reasoning, 256K context
  | 'command-a-vision-07-2025' // Vision capable
  | 'command-a-translate-08-2025' // Machine translation, 23 languages
  // Command R family
  | 'command-r7b-12-2024' // Lightweight 7B
  | 'command-r-plus-08-2024'
  | 'command-r-08-2024';

/** Groq model options (March 2026 - fast inference) */
export type GroqModel =
  // Llama models
  | 'llama-3.3-70b-versatile'
  | 'llama-3.1-8b-instant'
  | 'meta-llama/llama-4-scout-17b-16e-instruct'
  // GPT OSS models
  | 'openai/gpt-oss-120b'
  | 'openai/gpt-oss-20b'
  // Other models
  | 'qwen/qwen3-32b'
  | 'moonshotai/kimi-k2-instruct-0905'
  // Compound (agentic with web search)
  | 'groq/compound'
  | 'groq/compound-mini'
  // Audio
  | 'whisper-large-v3'
  | 'whisper-large-v3-turbo';

/** xAI (Grok) model options (March 2026) */
export type XaiModel =
  // Grok 4.20 (latest flagship)
  | 'grok-4.20-0309-reasoning'
  | 'grok-4.20-0309-non-reasoning'
  // Grok 4.1 Fast
  | 'grok-4-1-fast-reasoning'
  | 'grok-4-1-fast-non-reasoning'
  // Grok Code
  | 'grok-code-fast-1';

/** DeepSeek model options (March 2026) */
export type DeepSeekModel =
  // V3.2 (latest - both modes share same model)
  | 'deepseek-chat' // Non-thinking mode of V3.2
  | 'deepseek-reasoner'; // Thinking mode of V3.2

/** Perplexity model options (March 2026) */
export type PerplexityModel =
  // Sonar family (current)
  | 'sonar' // Lightweight search
  | 'sonar-pro' // Deeper retrieval
  | 'sonar-reasoning-pro' // Multi-step reasoning with web search
  | 'sonar-deep-research'; // Long-form reports

/** Custom LLM server models (suggested options, user can also type custom) */
export type LlmServerModel =
  // Text models (trending on LM Studio March 2026)
  | 'openai/gpt-oss-20b'
  | 'openai/gpt-oss-120b'
  | 'meta-llama/llama-4-scout-17b-16e-instruct'
  | 'deepseek/deepseek-r1-0528-qwen3-8b'
  | 'qwen/qwen3-8b'
  | 'qwen/qwen3-14b'
  | 'qwen/qwen3-30b-a3b-2507'
  | 'qwen/qwen3-4b-2507'
  | 'qwen/qwen3-4b-thinking-2507'
  | 'qwen/qwen3-coder-30b'
  | 'mistralai/mistral-small-4'
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

/**
 * Mapping of each LLM provider to its known valid model IDs.
 * Useful for both server-side validation and client-side form validation.
 *
 * Note: `lm_studio` has an empty list because it accepts arbitrary
 * user-supplied model names (any string is valid).
 */
export const PROVIDER_MODELS: Record<LlmProvider, readonly string[]> = {
  openai: [
    'gpt-5.4',
    'gpt-5.4-mini',
    'gpt-5.4-nano',
    'gpt-4.1',
    'gpt-4.1-mini',
    'gpt-4.1-nano',
    'gpt-4o',
    'gpt-4o-mini',
    'o3',
    'o3-pro',
    'o4-mini',
  ] as const,
  anthropic: [
    'claude-opus-4-6-20260205',
    'claude-sonnet-4-6-20260217',
    'claude-opus-4-5-20251101',
    'claude-sonnet-4-5-20250929',
    'claude-haiku-4-5-20251001',
    'claude-opus-4-1-20250805',
    'claude-sonnet-4-20250514',
    'claude-opus-4-20250514',
  ] as const,
  gemini: [
    'gemini-3.1-pro-preview',
    'gemini-3.1-flash-lite-preview',
    'gemini-3.1-flash-image-preview',
    'gemini-3-flash-preview',
    'gemini-3-pro-image-preview',
    'gemini-2.5-pro',
    'gemini-2.5-flash',
    'gemini-2.5-flash-lite',
    'gemini-2.5-flash-image',
    'gemini-2.5-flash-native-audio-preview',
  ] as const,
  mistral: [
    'mistral-large-2512',
    'mistral-large-latest',
    'mistral-medium-3.1',
    'mistral-medium-latest',
    'mistral-small-2603',
    'mistral-small-latest',
    'ministral-3b-2512',
    'ministral-8b-2512',
    'ministral-14b-2512',
    'devstral-2512',
    'codestral-2508',
    'codestral-latest',
    'magistral-medium-2509',
    'magistral-small-2509',
    'magistral-medium-latest',
    'magistral-small-latest',
    'pixtral-large-2411',
    'pixtral-large-latest',
    'voxtral-small',
    'voxtral-mini',
    'mistral-ocr-2512',
  ] as const,
  cohere: [
    'command-a-03-2025',
    'command-a-reasoning-08-2025',
    'command-a-vision-07-2025',
    'command-a-translate-08-2025',
    'command-r7b-12-2024',
    'command-r-plus-08-2024',
    'command-r-08-2024',
  ] as const,
  groq: [
    'llama-3.3-70b-versatile',
    'llama-3.1-8b-instant',
    'meta-llama/llama-4-scout-17b-16e-instruct',
    'openai/gpt-oss-120b',
    'openai/gpt-oss-20b',
    'qwen/qwen3-32b',
    'moonshotai/kimi-k2-instruct-0905',
    'groq/compound',
    'groq/compound-mini',
    'whisper-large-v3',
    'whisper-large-v3-turbo',
  ] as const,
  xai: [
    'grok-4.20-0309-reasoning',
    'grok-4.20-0309-non-reasoning',
    'grok-4-1-fast-reasoning',
    'grok-4-1-fast-non-reasoning',
    'grok-code-fast-1',
  ] as const,
  deepseek: ['deepseek-chat', 'deepseek-reasoner'] as const,
  perplexity: [
    'sonar',
    'sonar-pro',
    'sonar-reasoning-pro',
    'sonar-deep-research',
  ] as const,
  lm_studio: [] as const,
} as const;

/**
 * Check whether a model ID is valid for the given provider.
 * For `lm_studio`, any string is valid (returns true) since users
 * can run arbitrary models on their local server.
 *
 * @param provider - The LLM provider to validate against
 * @param model - The model ID string to check
 * @returns true if the model is a known valid model for the provider
 */
export function isValidModelForProvider(
  provider: LlmProvider,
  model: string
): boolean {
  const models = PROVIDER_MODELS[provider];
  // lm_studio accepts any model string
  if (provider === 'lm_studio') return true;
  return models.includes(model);
}

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
  visionInput?: boolean; // Can process images
  audioInput?: boolean; // Can process audio
  videoInput?: boolean; // Can process video

  // Output capabilities (what the model can generate)
  imageOutput?: boolean; // Can generate images
  audioOutput?: boolean; // Can generate audio
  videoOutput?: boolean; // Can generate video

  // Tool capabilities
  webSearch?: boolean; // Can use web search (e.g., OpenAI Responses API)

  // Media format support (what formats the model accepts)
  mediaFormats?: MediaFormatSupport;
}

// =============================================================================
// Multimodal Content Types
// =============================================================================

/**
 * Media content for LLM input (images, audio, video).
 * Used to pass media to multimodal models.
 */
export interface MediaContent {
  /** Type of media */
  type: MediaType;
  /** Format of the data */
  format: 'base64' | 'url';
  /** MIME type (e.g., "image/png", "audio/mp3", "video/mp4") */
  mimeType: string;
  /** Base64 data (without prefix) or URL */
  data: string;
  /** Original field name from input (for debugging/logging) */
  fieldName?: string;
}

/**
 * Generated media from LLM output (Imagen, Veo, GPT-4o audio).
 * Returned when models generate images, audio, or video.
 */
export interface GeneratedMedia {
  /** Type of generated media */
  type: MediaType;
  /** MIME type of the generated media */
  mimeType: string;
  /** Base64 data or URL depending on output format configuration */
  data: string;
}

// =============================================================================
// Schema Capability Detection
// =============================================================================

/**
 * Required capabilities detected from a schema
 */
export interface RequiredCapabilities {
  visionInput?: boolean; // Matches ModelCapabilities.visionInput
  audioInput?: boolean;
  videoInput?: boolean;
  imageOutput?: boolean;
  audioOutput?: boolean;
  videoOutput?: boolean;
}

/**
 * Detect media type from contentMediaType string
 */
function detectMediaType(
  contentMediaType: string
): 'image' | 'audio' | 'video' | null {
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
  input: number; // Cost per 1M input tokens
  output: number; // Cost per 1M output tokens

  // Image costs (per image in cents) - optional
  imageInput?: number; // Cost per input image
  imageOutput?: number; // Cost per generated image

  // Audio costs (per minute in cents) - optional
  audioInput?: number; // Cost per minute of audio input
  audioOutput?: number; // Cost per minute of audio output

  // Video costs (per minute in cents) - optional
  videoInput?: number; // Cost per minute of video input
  videoOutput?: number; // Cost per minute of video output
}

/**
 * Multimodal usage input for cost estimation
 */
export interface MultimodalUsage {
  // Text tokens
  inputTokens?: number;
  outputTokens?: number;

  // Media counts/durations
  imagesInput?: number; // Number of input images
  imagesOutput?: number; // Number of generated images
  audioInputMinutes?: number; // Minutes of audio input
  audioOutputMinutes?: number; // Minutes of audio output
  videoInputMinutes?: number; // Minutes of video input
  videoOutputMinutes?: number; // Minutes of video output
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

/**
 * @description ShapeShyft user account, linked to Firebase Authentication.
 * Created on first login and referenced by entity membership for multi-tenant access.
 */
export interface User {
  /** Internal database identifier */
  id: string;
  /** Firebase Authentication UID -- the primary external identity used to authenticate API requests */
  firebase_uid: string;
  /** User email address from Firebase Auth profile (may be null if auth provider omits it) */
  email: string | null;
  /** User display name from Firebase Auth profile */
  display_name: string | null;
  /** Timestamp when the user record was first created */
  created_at: Date | null;
  /** Timestamp of the most recent profile update */
  updated_at: Date | null;
}

/**
 * @description Full LLM API key record including encrypted credentials.
 * Contains sensitive data (encrypted_api_key, encryption_iv) that must never
 * be sent to clients. Use {@link LlmApiKeySafe} for API responses instead.
 */
export interface LlmApiKey {
  /** Unique identifier for this API key record */
  uuid: string;
  /** Entity (organization/personal) that owns this key */
  entity_id: string;
  /** Human-readable label for this key (e.g., "Production OpenAI Key") */
  key_name: string;
  /** LLM provider this key authenticates against */
  provider: LlmProvider;
  /** AES-256-CBC encrypted API key -- null if no key has been set (e.g., local LM Studio) */
  encrypted_api_key: string | null;
  /** Custom endpoint URL for self-hosted or proxy providers (e.g., LM Studio base URL) */
  endpoint_url: string | null;
  /** Initialization vector used for AES decryption of encrypted_api_key */
  encryption_iv: string | null;
  /** Whether this key is enabled for use; null treated as true */
  is_active: boolean | null;
  /** Timestamp when this key record was created */
  created_at: Date | null;
  /** Timestamp of the most recent update to this key */
  updated_at: Date | null;
}

/**
 * @description Safe version of {@link LlmApiKey} without sensitive data.
 * Use this type in all API responses to avoid leaking encrypted credentials.
 * The `has_api_key` boolean indicates whether a key is configured without exposing it.
 */
export interface LlmApiKeySafe {
  /** Unique identifier for this API key record */
  uuid: string;
  /** Entity (organization/personal) that owns this key */
  entity_id: string;
  /** Human-readable label for this key */
  key_name: string;
  /** LLM provider this key authenticates against */
  provider: LlmProvider;
  /** Whether an API key value has been set (true) or is empty (false) */
  has_api_key: boolean;
  /** Custom endpoint URL for self-hosted or proxy providers */
  endpoint_url: string | null;
  /** Whether this key is enabled for use; null treated as true */
  is_active: boolean | null;
  /** Timestamp when this key record was created */
  created_at: Date | null;
  /** Timestamp of the most recent update to this key */
  updated_at: Date | null;
}

/**
 * @description A ShapeShyft project that groups endpoints under a single API key.
 * Projects are scoped to an entity and serve as the top-level organizational unit
 * for managing AI endpoints.
 */
export interface Project {
  /** Unique identifier for this project */
  uuid: string;
  /** Entity (organization/personal) that owns this project */
  entity_id: string;
  /** URL-safe slug used in API paths (e.g., "my-project") */
  project_name: string;
  /** Human-readable project title shown in the UI */
  display_name: string;
  /** Optional description of the project's purpose */
  description: string | null;
  /** Whether this project is enabled; null treated as true */
  is_active: boolean | null;
  /** Truncated prefix of the project API key for display (e.g., "shyft_live_ab..."). Full key is never returned in Project responses. */
  api_key_prefix: string | null;
  /** Timestamp when the project API key was last generated or refreshed */
  api_key_created_at: Date | null;
  /** Timestamp when this project was created */
  created_at: Date | null;
  /** Timestamp of the most recent project update */
  updated_at: Date | null;
}

/**
 * Configuration for expected media output from an endpoint.
 * Used to configure models like GPT-4o (audio), Imagen (images), Veo (video).
 */
export interface MediaOutputConfig {
  /** Whether the endpoint expects audio output */
  audio?: boolean;
  /** Whether the endpoint expects image output */
  image?: boolean;
  /** Whether the endpoint expects video output */
  video?: boolean;
}

/**
 * @description An AI endpoint configuration within a {@link Project}.
 * Each endpoint defines a specific LLM interaction: the model, schemas,
 * instructions, and access controls. Callers invoke endpoints via the
 * project's API key.
 */
export interface Endpoint {
  /** Unique identifier for this endpoint */
  uuid: string;
  /** Parent project UUID */
  project_id: string;
  /** URL-safe slug used in API paths (e.g., "analyze-text") */
  endpoint_name: string;
  /** Human-readable endpoint title shown in the UI */
  display_name: string;
  /** HTTP method accepted by this endpoint (GET for simple queries, POST for input payloads) */
  http_method: HttpMethod;
  /** UUID of the {@link LlmApiKey} used to authenticate LLM requests */
  llm_key_id: string;
  /** LLM model identifier override; null uses the provider's default model */
  model: string | null;
  /** JSON Schema defining the expected input payload structure */
  input_schema: JsonSchema | null;
  /** JSON Schema defining the expected LLM output structure */
  output_schema: JsonSchema | null;
  /** System-level instructions prepended to the LLM prompt */
  instructions: string | null;
  /** Additional context appended to the LLM prompt for grounding */
  context: string | null;
  /** Whether this endpoint is enabled; null treated as true */
  is_active: boolean | null;
  /** Array of allowed IPv4 addresses. When null, all IPs are permitted (no restriction). */
  ip_allowlist: string[] | null;
  /** Declares which media types this endpoint is expected to generate (images, audio, video). Null means text-only output. */
  expects_media_output: MediaOutputConfig | null;
  /** Format for returning generated media: "base64" embeds data inline, "url" stores in cloud and returns a signed URL. Null means no media output. */
  output_media_format: 'base64' | 'url' | null;
  /** For audio/transcription endpoints (e.g., Whisper): the model used to extract structured data from the raw transcription text. Null means no post-processing. */
  transcription_extraction_model: string | null;
  /** Whether this endpoint uses web search for supported providers (OpenAI Responses API). */
  web_search: boolean;
  /** Timestamp when this endpoint was created */
  created_at: Date | null;
  /** Timestamp of the most recent endpoint update */
  updated_at: Date | null;
}

/**
 * @description A single API request log entry for usage tracking and billing.
 * One record is created per endpoint invocation, capturing token counts,
 * latency, cost, and caller metadata for analytics dashboards.
 */
export interface UsageAnalytics {
  /** Unique identifier for this analytics record */
  uuid: string;
  /** UUID of the endpoint that was invoked */
  endpoint_id: string;
  /** Timestamp when the request was received */
  timestamp: Date;
  /** Whether the LLM request completed successfully */
  success: boolean;
  /** Error message if the request failed; null on success */
  error_message: string | null;
  /** Number of input/prompt tokens consumed */
  tokens_input: number | null;
  /** Number of output/completion tokens generated */
  tokens_output: number | null;
  /** End-to-end request latency in milliseconds */
  latency_ms: number | null;
  /** Estimated cost of this request in cents (USD) */
  estimated_cost_cents: number | null;
  /** Arbitrary caller-supplied metadata (e.g., user_agent, ip, custom trace IDs). Stored as JSON and available for filtering in analytics queries. */
  request_metadata: Record<string, unknown> | null;
}

// =============================================================================
// Entity Storage Config Types
// =============================================================================

export type StorageProvider = 'gcs' | 's3';

/**
 * Storage configuration for an entity (safe version without credentials).
 * Used for cloud storage of generated media.
 */
export interface EntityStorageConfig {
  uuid: string;
  entity_id: string;
  provider: StorageProvider;
  bucket: string;
  path_prefix: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

/**
 * GCS service account credentials
 */
export interface GCSCredentials {
  type: 'service_account';
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri?: string;
  token_uri?: string;
  auth_provider_x509_cert_url?: string;
  client_x509_cert_url?: string;
}

/**
 * AWS S3 credentials
 */
export interface S3Credentials {
  access_key_id: string;
  secret_access_key: string;
  region: string;
}

export type StorageCredentials = GCSCredentials | S3Credentials;

/**
 * Request to create or update storage configuration
 */
export interface StorageConfigCreateRequest {
  provider: StorageProvider;
  bucket: string;
  path_prefix?: string;
  credentials: StorageCredentials;
}

export interface StorageConfigUpdateRequest {
  bucket?: string;
  path_prefix?: string | null;
  credentials?: StorageCredentials;
}

/**
 * @description User-level settings and organization preferences.
 * Every authenticated user has settings; if none have been saved yet,
 * the API returns auto-generated defaults with `is_default: true`.
 */
export interface UserSettings {
  /** Database row ID; null when settings are auto-generated defaults not yet persisted */
  id: string | null;
  /** Firebase Authentication UID linking these settings to a {@link User} */
  firebase_uid: string;
  /** Display name of the user's organization; null if not set */
  organization_name: string | null;
  /** URL-safe organization path used in routing (auto-generated from UID if not customized) */
  organization_path: string;
  /** Computed field (not stored in DB): true if settings are auto-generated defaults */
  is_default: boolean;
  /** Timestamp when these settings were first saved */
  created_at: Date | null;
  /** Timestamp of the most recent settings update */
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
  expects_media_output?: Optional<MediaOutputConfig>;
  output_media_format?: Optional<'base64' | 'url'>;
  transcription_extraction_model?: Optional<string>;
  web_search?: Optional<boolean>;
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
  expects_media_output?: Optional<MediaOutputConfig>;
  output_media_format?: Optional<'base64' | 'url'>;
  transcription_extraction_model?: Optional<string>;
  web_search?: Optional<boolean>;
}

// =============================================================================
// Query Parameter Types
// =============================================================================

/**
 * Utility type for boolean-like query string parameters.
 * URL query params are always strings, so boolean values are represented
 * as the literal strings `'true'` or `'false'`, or `undefined` when absent.
 */
export type BooleanQueryParam = 'true' | 'false' | undefined;

export interface ProjectQueryParams {
  is_active: BooleanQueryParam;
}

export interface EndpointQueryParams {
  is_active: BooleanQueryParam;
}

export interface UsageAnalyticsQueryParams {
  endpoint_id: Optional<string>;
  project_id: Optional<string>;
  start_date: Optional<string>;
  end_date: Optional<string>;
  success: BooleanQueryParam;
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
  /** Generated media (images, audio, video) from generative models */
  generated_media?: GeneratedMedia[];
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

/**
 * Create a typed success response wrapping the given data.
 *
 * @example
 * ```typescript
 * import { successResponse, type Project } from '@sudobility/shapeshyft_types';
 *
 * const project: Project = { uuid: '...', entity_id: '...', project_name: 'my-project', display_name: 'My Project', description: null, is_active: true, api_key_prefix: null, api_key_created_at: null, created_at: new Date(), updated_at: new Date() };
 * const response = successResponse<Project>(project);
 * // { success: true, data: { uuid: '...', project_name: 'my-project', ... }, timestamp: '2026-01-15T...' }
 * ```
 */
export function successResponse<T>(data: T): BaseResponse<T> {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Create a typed error response with the given error message.
 *
 * @example
 * ```typescript
 * import { errorResponse } from '@sudobility/shapeshyft_types';
 *
 * const response = errorResponse('Project not found');
 * // { success: false, error: 'Project not found', timestamp: '2026-01-15T...' }
 *
 * // In an API handler:
 * if (!project) {
 *   return c.json(errorResponse('Project not found'), 404);
 * }
 * ```
 */
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
