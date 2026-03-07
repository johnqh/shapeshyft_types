# @sudobility/shapeshyft_types

Shared TypeScript type definitions for the ShapeShyft LLM structured output platform.

## Installation

```bash
bun add @sudobility/shapeshyft_types
```

## Usage

```typescript
import type {
  User, Project, Endpoint, LlmProvider,
  AiExecutionRequest, AiExecutionResponse,
} from '@sudobility/shapeshyft_types';

import { successResponse, errorResponse } from '@sudobility/shapeshyft_types';
```

## Types

- **Enums**: `LlmProvider` (openai, gemini, anthropic, lm_studio), `HttpMethod`
- **Entities**: `User`, `LlmApiKey` / `LlmApiKeySafe`, `Project`, `Endpoint`, `UsageAnalytics`, `UserSettings`
- **Requests**: Create/Update types for users, keys, projects, endpoints, plus `AiExecutionRequest`
- **Responses**: `AiExecutionResponse`, `AiPromptResponse`, `AnalyticsResponse`, `HealthCheckData`
- **Query Params**: `ProjectQueryParams`, `EndpointQueryParams`, `UsageAnalyticsQueryParams`
- **Utilities**: `JsonSchema`, `ApiResponse<T>`, `PaginatedResponse<T>` (re-exported from `@sudobility/types`)
- **Helpers**: `successResponse()`, `errorResponse()` (runtime functions)

## Development

```bash
bun run build        # Build ESM + CJS
bun run test         # Run Vitest
bun run typecheck    # TypeScript check
bun run lint         # ESLint
bun run verify       # Typecheck + lint + build
```

## Related Packages

- `@sudobility/shapeshyft_client` -- React hooks for ShapeShyft API
- `@sudobility/shapeshyft_lib` -- Business logic with Zustand stores
- `shapeshyft_api` -- Backend API server
- `shapeshyft_app` -- Frontend web application

## License

BUSL-1.1
