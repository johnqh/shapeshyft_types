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
  // Text models
  | 'qwen/qwen3-30b-a3b-2507'
  | 'meta-llama-3.1-8b-instruct'
  | 'qwen-32b-everything'
  | 'openai/gpt-oss-20b'
  // Vision models (LM Studio / local)
  | 'llava-v1.6-mistral-7b'
  | 'llava-v1.6-vicuna-13b'
  | 'qwen2-vl-7b-instruct'
  | 'phi-3-vision-128k-instruct'
  | 'minicpm-v-2_6'
  | 'moondream2'
  | 'internvl2-8b'
  | 'llama-3.2-11b-vision'
  | 'pixtral-12b'
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

/** Models available for each provider (January 2026) */
export const PROVIDER_MODELS: Record<LlmProvider, readonly string[]> = {
  openai: [
    'gpt-4.1', 'gpt-4.1-mini', 'gpt-4.1-nano',
    'gpt-4o', 'gpt-4o-mini',
    'o3', 'o3-pro', 'o4-mini',
    'gpt-4-turbo', 'o1',
  ] as const,
  anthropic: [
    'claude-opus-4-5-20251124', 'claude-sonnet-4-5-20251124',
    'claude-opus-4-1-20250805',
    'claude-sonnet-4-20250514', 'claude-opus-4-20250514',
    'claude-3-5-haiku-20241022',
  ] as const,
  gemini: [
    'gemini-3-pro-preview', 'gemini-3-flash-preview', 'gemini-3-pro-image-preview',
    'gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.5-flash-image', 'gemini-2.5-flash-native-audio-preview',
    'gemini-2.0-flash', 'gemini-2.0-flash-lite',
  ] as const,
  mistral: [
    'mistral-large-2512', 'mistral-large-latest',
    'mistral-medium-3.1', 'mistral-medium-latest',
    'mistral-small-3.2', 'mistral-small-latest',
    'ministral-3b-2512', 'ministral-8b-2512', 'ministral-14b-2512',
    'codestral-2501', 'codestral-latest',
    'pixtral-large-2411', 'pixtral-large-latest',
    'voxtral-small', 'voxtral-mini',
    'mistral-ocr-2512',
  ] as const,
  cohere: [
    'command-a-03-2025', 'command-a-reasoning', 'command-a-vision',
    'command-r-plus-08-2024', 'command-r-08-2024',
    'command-r-plus', 'command-r',
  ] as const,
  groq: [
    'llama-3.3-70b-versatile', 'llama-3.1-8b-instant',
    'openai/gpt-oss-120b', 'openai/gpt-oss-20b',
    'groq/compound', 'groq/compound-mini',
    'meta-llama/llama-guard-4-12b',
    'whisper-large-v3', 'whisper-large-v3-turbo',
  ] as const,
  xai: [
    'grok-4', 'grok-4.1-fast',
    'grok-3', 'grok-3-mini', 'grok-3-vision',
    'grok-2', 'grok-2-vision',
  ] as const,
  deepseek: ['deepseek-chat', 'deepseek-reasoner'] as const,
  perplexity: [
    'sonar', 'sonar-pro',
    'sonar-reasoning', 'sonar-reasoning-pro',
    'sonar-deep-research',
  ] as const,
  llm_server: [
    'qwen/qwen3-30b-a3b-2507', 'meta-llama-3.1-8b-instruct', 'qwen-32b-everything', 'openai/gpt-oss-20b',
    'llava-v1.6-mistral-7b', 'llava-v1.6-vicuna-13b', 'qwen2-vl-7b-instruct', 'phi-3-vision-128k-instruct',
    'minicpm-v-2_6', 'moondream2', 'internvl2-8b', 'llama-3.2-11b-vision', 'pixtral-12b',
  ] as const,
};

/** Default model for each provider (January 2026) */
export const DEFAULT_PROVIDER_MODEL: Record<LlmProvider, string> = {
  openai: 'gpt-4.1-mini',
  anthropic: 'claude-sonnet-4-5-20251124',
  gemini: 'gemini-2.5-flash',
  mistral: 'mistral-small-latest',
  cohere: 'command-r-08-2024',
  groq: 'llama-3.3-70b-versatile',
  xai: 'grok-3-mini',
  deepseek: 'deepseek-chat',
  perplexity: 'sonar',
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
// Model Capabilities (Multimodal Support)
// =============================================================================

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
}

/**
 * Model capabilities map (January 2026).
 * Maps model names to their multimodal capabilities.
 * Models not in this map have undefined capabilities.
 */
export const MODEL_CAPABILITIES: Record<string, ModelCapabilities> = {
  // ===========================================================================
  // OpenAI (January 2026)
  // ===========================================================================
  // GPT-4.1 family
  'gpt-4.1': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'gpt-4.1-mini': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'gpt-4.1-nano': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // GPT-4o (omni - multimodal)
  'gpt-4o': { visionInput: true, audioInput: true, videoInput: false, imageOutput: false, audioOutput: true, videoOutput: false },
  'gpt-4o-mini': { visionInput: true, audioInput: true, videoInput: false, imageOutput: false, audioOutput: true, videoOutput: false },
  // Reasoning models (o-series)
  'o3': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'o3-pro': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'o4-mini': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Legacy
  'gpt-4-turbo': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'o1': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Anthropic (January 2026)
  // ===========================================================================
  // Claude 4.5
  'claude-opus-4-5-20251124': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'claude-sonnet-4-5-20251124': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Claude 4.1
  'claude-opus-4-1-20250805': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Claude 4
  'claude-sonnet-4-20250514': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'claude-opus-4-20250514': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Claude 3.5
  'claude-3-5-haiku-20241022': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Google Gemini (January 2026)
  // ===========================================================================
  // Gemini 3 (latest)
  'gemini-3-pro-preview': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },
  'gemini-3-flash-preview': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },
  'gemini-3-pro-image-preview': { visionInput: true, audioInput: false, videoInput: false, imageOutput: true, audioOutput: false, videoOutput: false },
  // Gemini 2.5
  'gemini-2.5-pro': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },
  'gemini-2.5-flash': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },
  'gemini-2.5-flash-lite': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },
  'gemini-2.5-flash-image': { visionInput: true, audioInput: false, videoInput: false, imageOutput: true, audioOutput: false, videoOutput: false },
  'gemini-2.5-flash-native-audio-preview': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: true, videoOutput: false },
  // Gemini 2.0
  'gemini-2.0-flash': { visionInput: true, audioInput: true, videoInput: true, imageOutput: true, audioOutput: true, videoOutput: false },
  'gemini-2.0-flash-lite': { visionInput: true, audioInput: true, videoInput: true, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Mistral AI (January 2026)
  // ===========================================================================
  // Large models (Mistral Large 3 has vision)
  'mistral-large-2512': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'mistral-large-latest': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Medium models (vision capable)
  'mistral-medium-3.1': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'mistral-medium-latest': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Small models (vision capable)
  'mistral-small-3.2': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'mistral-small-latest': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Ministral (vision capable)
  'ministral-3b-2512': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'ministral-8b-2512': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'ministral-14b-2512': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Code models
  'codestral-2501': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'codestral-latest': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Vision models (Pixtral)
  'pixtral-large-2411': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'pixtral-large-latest': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Audio models (Voxtral)
  'voxtral-small': { visionInput: false, audioInput: true, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'voxtral-mini': { visionInput: false, audioInput: true, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Document AI
  'mistral-ocr-2512': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Cohere (January 2026)
  // ===========================================================================
  // Command A family
  'command-a-03-2025': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'command-a-reasoning': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'command-a-vision': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  // Command R family
  'command-r-plus-08-2024': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'command-r-08-2024': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'command-r-plus': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'command-r': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Groq (January 2026)
  // ===========================================================================
  'llama-3.3-70b-versatile': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'llama-3.1-8b-instant': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'openai/gpt-oss-120b': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'openai/gpt-oss-20b': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'groq/compound': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'groq/compound-mini': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'meta-llama/llama-guard-4-12b': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'whisper-large-v3': { visionInput: false, audioInput: true, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'whisper-large-v3-turbo': { visionInput: false, audioInput: true, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // xAI Grok (January 2026)
  // ===========================================================================
  'grok-4': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-4.1-fast': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-3': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-3-mini': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-3-vision': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-2': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'grok-2-vision': { visionInput: true, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // DeepSeek (January 2026 - V3.2)
  // ===========================================================================
  'deepseek-chat': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'deepseek-reasoner': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // Perplexity (January 2026 - Sonar family)
  // ===========================================================================
  'sonar': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'sonar-pro': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'sonar-reasoning': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'sonar-reasoning-pro': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },
  'sonar-deep-research': { visionInput: false, audioInput: false, videoInput: false, imageOutput: false, audioOutput: false, videoOutput: false },

  // ===========================================================================
  // LM Studio / Local Models (common vision models)
  // ===========================================================================
  'llava-v1.6-mistral-7b': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'llava-v1.6-vicuna-13b': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'qwen2-vl-7b-instruct': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'phi-3-vision-128k-instruct': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'minicpm-v-2_6': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'moondream2': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'internvl2-8b': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'llama-3.2-11b-vision': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
  'pixtral-12b': {
    visionInput: true,
    audioInput: false,
    videoInput: false,
    imageOutput: false,
    audioOutput: false,
    videoOutput: false,
  },
};

/**
 * Get capabilities for a model.
 * Returns undefined for each capability if model is not in the map (unknown).
 */
export function getModelCapabilities(model: string): ModelCapabilities {
  return MODEL_CAPABILITIES[model] ?? {};
}

/**
 * Check if a model has a specific input capability.
 * Returns undefined if unknown, true/false if known.
 */
export function hasInputCapability(
  model: string,
  capability: 'vision' | 'audio' | 'video'
): boolean | undefined {
  const caps = MODEL_CAPABILITIES[model];
  if (!caps) return undefined;
  switch (capability) {
    case 'vision': return caps.visionInput;
    case 'audio': return caps.audioInput;
    case 'video': return caps.videoInput;
  }
}

/**
 * Check if a model has a specific output capability.
 * Returns undefined if unknown, true/false if known.
 */
export function hasOutputCapability(
  model: string,
  capability: 'image' | 'audio' | 'video'
): boolean | undefined {
  const caps = MODEL_CAPABILITIES[model];
  if (!caps) return undefined;
  switch (capability) {
    case 'image': return caps.imageOutput;
    case 'audio': return caps.audioOutput;
    case 'video': return caps.videoOutput;
  }
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
 * Cost estimation per 1M tokens (in cents)
 * Prices sourced from official provider pricing pages as of January 2026
 */
export const COST_PER_MILLION_TOKENS: Record<string, ModelPricing> = {
  // ==========================================================================
  // OpenAI (https://openai.com/pricing) - January 2026
  // Images: counted as tokens (~765 tokens per 512x512 image)
  // Audio: Realtime API pricing
  // ==========================================================================
  // GPT-4.1 family (latest non-reasoning)
  'gpt-4.1': { input: 200, output: 800 },
  'gpt-4.1-mini': { input: 40, output: 160 },
  'gpt-4.1-nano': { input: 10, output: 40 },
  // GPT-4o (omni - multimodal)
  'gpt-4o': {
    input: 250, output: 1000,
    audioInput: 600,     // ~$6.00 per minute (Realtime API)
    audioOutput: 1200,   // ~$12.00 per minute (Realtime API)
  },
  'gpt-4o-mini': {
    input: 15, output: 60,
    audioInput: 60,      // ~$0.60 per minute (Realtime API)
    audioOutput: 120,    // ~$1.20 per minute (Realtime API)
  },
  // Reasoning models (o-series)
  'o3': { input: 1000, output: 4000 },
  'o3-pro': { input: 15000, output: 60000 },
  'o4-mini': { input: 150, output: 600 },
  // Legacy
  'gpt-4-turbo': { input: 1000, output: 3000 },
  'o1': { input: 1500, output: 6000 },

  // ==========================================================================
  // Anthropic (https://anthropic.com/pricing) - January 2026
  // ==========================================================================
  // Claude 4.5
  'claude-opus-4-5-20251124': { input: 2000, output: 10000 },
  'claude-sonnet-4-5-20251124': { input: 400, output: 2000 },
  // Claude 4.1
  'claude-opus-4-1-20250805': { input: 1800, output: 9000 },
  // Claude 4
  'claude-sonnet-4-20250514': { input: 300, output: 1500 },
  'claude-opus-4-20250514': { input: 1500, output: 7500 },
  // Claude 3.5
  'claude-3-5-haiku-20241022': { input: 80, output: 400 },

  // ==========================================================================
  // Google Gemini (https://ai.google.dev/pricing) - January 2026
  // Images: ~258 tokens/image, Audio: ~32 tokens/sec, Video: ~263 tokens/sec
  // ==========================================================================
  // Gemini 3 (latest)
  'gemini-3-pro-preview': { input: 175, output: 700 },
  'gemini-3-flash-preview': { input: 15, output: 60 },
  'gemini-3-pro-image-preview': {
    input: 175, output: 700,
    imageOutput: 8,      // ~$0.08 per generated image
  },
  // Gemini 2.5
  'gemini-2.5-pro': { input: 125, output: 500 },
  'gemini-2.5-flash': { input: 7.5, output: 30 },
  'gemini-2.5-flash-lite': { input: 3.75, output: 15 },
  'gemini-2.5-flash-image': {
    input: 10, output: 40,
    imageOutput: 4,      // ~$0.04 per generated image
  },
  'gemini-2.5-flash-native-audio-preview': {
    input: 10, output: 40,
    audioInput: 10,      // ~$0.10 per minute audio input
    audioOutput: 60,     // ~$0.60 per minute audio output
  },
  // Gemini 2.0
  'gemini-2.0-flash': {
    input: 10, output: 40,
    imageOutput: 4,      // ~$0.04 per generated image
    audioOutput: 60,     // ~$0.60 per minute of audio output
  },
  'gemini-2.0-flash-lite': { input: 5, output: 20 },

  // ==========================================================================
  // Mistral AI (https://mistral.ai/technology/#pricing) - January 2026
  // ==========================================================================
  // Large models (Mistral Large 3)
  'mistral-large-2512': { input: 200, output: 600 },
  'mistral-large-latest': { input: 200, output: 600 },
  // Medium models
  'mistral-medium-3.1': { input: 100, output: 300 },
  'mistral-medium-latest': { input: 100, output: 300 },
  // Small models
  'mistral-small-3.2': { input: 20, output: 60 },
  'mistral-small-latest': { input: 10, output: 30 },
  // Ministral family (small, efficient)
  'ministral-3b-2512': { input: 4, output: 12 },
  'ministral-8b-2512': { input: 10, output: 30 },
  'ministral-14b-2512': { input: 15, output: 45 },
  // Code models
  'codestral-2501': { input: 30, output: 90 },
  'codestral-latest': { input: 30, output: 90 },
  // Vision models (Pixtral)
  'pixtral-large-2411': { input: 200, output: 600 },
  'pixtral-large-latest': { input: 200, output: 600 },
  // Audio models (Voxtral)
  'voxtral-small': { input: 20, output: 60, audioInput: 15 },
  'voxtral-mini': { input: 10, output: 30, audioInput: 8 },
  // Document AI
  'mistral-ocr-2512': { input: 15, output: 45 },

  // ==========================================================================
  // Cohere (https://cohere.com/pricing) - January 2026
  // ==========================================================================
  // Command A family (latest)
  'command-a-03-2025': { input: 250, output: 1000 },
  'command-a-reasoning': { input: 400, output: 1600 },
  'command-a-vision': { input: 300, output: 1200 },
  // Command R family
  'command-r-plus-08-2024': { input: 250, output: 1000 },
  'command-r-08-2024': { input: 15, output: 60 },
  'command-r-plus': { input: 250, output: 1000 },
  'command-r': { input: 15, output: 60 },

  // ==========================================================================
  // Groq (https://groq.com/pricing) - Fast inference, January 2026
  // ==========================================================================
  // Llama models
  'llama-3.3-70b-versatile': { input: 59, output: 79 },
  'llama-3.1-8b-instant': { input: 5, output: 8 },
  // GPT OSS models
  'openai/gpt-oss-120b': { input: 150, output: 200 },
  'openai/gpt-oss-20b': { input: 30, output: 40 },
  // Compound (agentic)
  'groq/compound': { input: 100, output: 150 },
  'groq/compound-mini': { input: 30, output: 50 },
  // Safety
  'meta-llama/llama-guard-4-12b': { input: 20, output: 20 },
  // Audio (Whisper - speech-to-text, per minute)
  'whisper-large-v3': { input: 11, output: 0, audioInput: 11 },
  'whisper-large-v3-turbo': { input: 4, output: 0, audioInput: 4 },

  // ==========================================================================
  // xAI Grok (https://x.ai/api) - January 2026
  // ==========================================================================
  // Grok 4 (latest)
  'grok-4': { input: 500, output: 2000 },
  'grok-4.1-fast': { input: 100, output: 400 },
  // Grok 3
  'grok-3': { input: 300, output: 1200 },
  'grok-3-mini': { input: 30, output: 120 },
  'grok-3-vision': { input: 350, output: 1400 },
  // Grok 2 (legacy)
  'grok-2': { input: 200, output: 1000 },
  'grok-2-vision': { input: 200, output: 1000 },

  // ==========================================================================
  // DeepSeek (https://platform.deepseek.com/api-docs/pricing) - January 2026
  // V3.2 pricing (very competitive)
  // ==========================================================================
  'deepseek-chat': { input: 14, output: 28 },
  'deepseek-reasoner': { input: 55, output: 219 },

  // ==========================================================================
  // Perplexity (https://docs.perplexity.ai/guides/pricing) - January 2026
  // Sonar family (includes search costs)
  // ==========================================================================
  'sonar': { input: 100, output: 100 },
  'sonar-pro': { input: 300, output: 300 },
  'sonar-reasoning': { input: 500, output: 500 },
  'sonar-reasoning-pro': { input: 800, output: 800 },
  'sonar-deep-research': { input: 1200, output: 1200 },

  // ==========================================================================
  // LLM Server (custom) - Default/estimated pricing for local models
  // ==========================================================================
  // Text models
  'qwen/qwen3-30b-a3b-2507': { input: 50, output: 100 },
  'meta-llama-3.1-8b-instruct': { input: 20, output: 40 },
  'qwen-32b-everything': { input: 50, output: 100 },
  // Vision models (LM Studio / local) - estimated based on model size
  'llava-v1.6-mistral-7b': { input: 25, output: 50 },
  'llava-v1.6-vicuna-13b': { input: 40, output: 80 },
  'qwen2-vl-7b-instruct': { input: 25, output: 50 },
  'phi-3-vision-128k-instruct': { input: 20, output: 40 },
  'minicpm-v-2_6': { input: 15, output: 30 },
  'moondream2': { input: 10, output: 20 },
  'internvl2-8b': { input: 25, output: 50 },
  'llama-3.2-11b-vision': { input: 30, output: 60 },
  'pixtral-12b': { input: 35, output: 70 },

  // ==========================================================================
  // Default for unknown models
  // ==========================================================================
  default: { input: 100, output: 300 },
};

/** Default pricing for unknown models */
const DEFAULT_MODEL_PRICING: ModelPricing = { input: 100, output: 300 };

/**
 * Get pricing for a specific model
 * Returns default pricing if model is not found
 */
export function getModelPricing(model: string): ModelPricing {
  return COST_PER_MILLION_TOKENS[model] ?? DEFAULT_MODEL_PRICING;
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
 * Estimate cost in cents for token usage (text only, for backwards compatibility)
 */
export function estimateCost(
  model: string,
  inputTokens: number,
  outputTokens: number
): number {
  const costs = getModelPricing(model);
  const inputCost = (inputTokens / 1_000_000) * costs.input;
  const outputCost = (outputTokens / 1_000_000) * costs.output;
  return Math.round((inputCost + outputCost) * 100) / 100; // Round to 2 decimal places
}

/**
 * Estimate cost in cents for multimodal usage
 */
export function estimateMultimodalCost(
  model: string,
  usage: MultimodalUsage
): number {
  const pricing = getModelPricing(model);
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
