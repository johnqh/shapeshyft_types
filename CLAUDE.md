# ShapeShyft Types

TypeScript type definitions for ShapeShyft API - LLM structured output platform.

**npm**: `@sudobility/shapeshyft_types` (public)

## Tech Stack

- **Language**: TypeScript
- **Build**: TypeScript compiler (dual ESM/CJS)

## Project Structure

```
src/
└── index.ts          # All type definitions
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
bun run typecheck    # TypeScript check
bun run lint         # Run ESLint
bun run format       # Format with Prettier
bun run verify       # Typecheck + lint + build
```

## Type Categories

### Enums
- `LlmProvider` - 'openai' | 'gemini' | 'anthropic' | 'llm_server'
- `HttpMethod` - 'GET' | 'POST'

### Entity Types (Database Models)
- `User` - User account
- `LlmApiKey` / `LlmApiKeySafe` - LLM API keys
- `Project` - User projects
- `Endpoint` - AI endpoint configurations
- `UsageAnalytics` - Request tracking

### Request/Response Types
- `CreateKeyRequest`, `UpdateKeyRequest`
- `CreateProjectRequest`, `UpdateProjectRequest`
- `CreateEndpointRequest`, `UpdateEndpointRequest`
- `ExecuteRequest`, `ExecuteResponse`

### Utility Types
- `JsonSchema` - JSON Schema definition
- `ApiResponse<T>` - Standard API response wrapper
- `PaginatedResponse<T>` - Paginated list response

### Response Helpers
- `successResponse<T>(data)` - Create success response
- `errorResponse(message)` - Create error response

## Usage

```typescript
import type {
  User,
  Project,
  Endpoint,
  LlmProvider,
  ExecuteRequest,
  ExecuteResponse
} from '@sudobility/shapeshyft_types';

import { successResponse, errorResponse } from '@sudobility/shapeshyft_types';
```

## Peer Dependencies

- `@sudobility/types` - Common Sudobility types (re-exported)

## Publishing

```bash
bun run prepublishOnly  # Clean + verify
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

This is the base types package used by all other packages:

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
