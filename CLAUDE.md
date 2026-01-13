# ShapeShyft Types

TypeScript type definitions for ShapeShyft API - LLM structured output platform.

**npm**: `@sudobility/shapeshyft_types` (public)

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Bun
- **Build**: TypeScript compiler (dual ESM/CJS)
- **Test**: Vitest

## Project Structure

```
src/
├── index.ts          # All type definitions and response helpers
└── index.test.ts     # Type tests
dist/
├── index.js          # ESM build
├── index.cjs         # CommonJS build
└── index.d.ts        # Type declarations
```

## Commands

```bash
bun run build        # Build ESM + CJS
bun run build:esm    # Build ESM only
bun run build:cjs    # Build CJS only
bun run clean        # Remove dist/
bun run test         # Run Vitest
bun run typecheck    # TypeScript check
bun run lint         # Run ESLint
bun run format       # Format with Prettier
bun run verify       # Typecheck + lint + build
```

## Type Categories

### Enums
- `LlmProvider` - 'openai' | 'gemini' | 'anthropic' | 'lm_studio'
- `HttpMethod` - 'GET' | 'POST'

### Entity Types (Database Models)
- `User` - User account
- `LlmApiKey` / `LlmApiKeySafe` - LLM API keys (safe version excludes encrypted data)
- `Project` - User projects
- `Endpoint` - AI endpoint configurations
- `UsageAnalytics` - Request tracking
- `UserSettings` - User preferences

### Request Types
- `UserCreateRequest`, `UserUpdateRequest`
- `LlmApiKeyCreateRequest`, `LlmApiKeyUpdateRequest`
- `ProjectCreateRequest`, `ProjectUpdateRequest`
- `EndpointCreateRequest`, `EndpointUpdateRequest`
- `AiExecutionRequest`

### Response Types
- `AiExecutionResponse`, `AiPromptResponse`
- `AnalyticsResponse`
- `RefreshApiKeyResponse`, `GetApiKeyResponse`
- `HealthCheckData`

### Query Parameter Types
- `ProjectQueryParams`
- `EndpointQueryParams`
- `UsageAnalyticsQueryParams`

### Utility Types
- `JsonSchema` - JSON Schema definition
- `ApiResponse<T>` - Standard API response wrapper (re-exported)
- `PaginatedResponse<T>` - Paginated list response (re-exported)

### Response Helpers
```typescript
import { successResponse, errorResponse } from '@sudobility/shapeshyft_types';

// Create success response
const response = successResponse({ id: '123', name: 'Test' });
// { success: true, data: { id: '123', name: 'Test' }, timestamp: '...' }

// Create error response
const error = errorResponse('Something went wrong');
// { success: false, error: 'Something went wrong', timestamp: '...' }
```

## Usage

```typescript
import type {
  User,
  Project,
  Endpoint,
  LlmProvider,
  AiExecutionRequest,
  AiExecutionResponse,
} from '@sudobility/shapeshyft_types';

import { successResponse, errorResponse } from '@sudobility/shapeshyft_types';
```

## Peer Dependencies

- `@sudobility/types` - Common Sudobility types (re-exported)

## Publishing

```bash
bun run verify          # All checks
npm publish             # Publish to npm (public)
```

## Dual Build

Supports both ESM and CommonJS:

```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

## Package Hierarchy

This is the base types package used by all other ShapeShyft packages:

```
shapeshyft_types (this package)
    ↑
shapeshyft_client (API hooks)
    ↑
shapeshyft_lib (business logic)
    ↑
shapeshyft_app (frontend)
shapeshyft_api (backend)
```

## Testing

Tests verify type assignability and response helpers:

```bash
bun run test         # Run tests
```
