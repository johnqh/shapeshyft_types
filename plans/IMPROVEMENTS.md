# Improvement Plans for @sudobility/shapeshyft_types

## Priority 1 - High Impact

### 1. Add JSDoc to All Entity Types and Interfaces
- The entity types (`User`, `LlmApiKey`, `Project`, `Endpoint`, `UsageAnalytics`) lack JSDoc on most of their individual fields. While `LlmApiKeySafe` has a type-level doc, its fields are undocumented. Only `MediaContent`, `ModelCapabilities`, `ModelPricing`, and a few others have field-level JSDoc.
- Downstream consumers (shapeshyft_client, shapeshyft_lib, shapeshyft_app, shapeshyft_api) all rely on these types, so improving documentation here propagates IDE hints across the entire ecosystem.
- Priority fields to document: `User.firebase_uid`, `Project.api_key_prefix`, `Endpoint.ip_allowlist`, `Endpoint.transcription_extraction_model`, `Endpoint.expects_media_output`, `Endpoint.output_media_format`, `UsageAnalytics.request_metadata`.

### 2. Add Tests for Runtime Functions Beyond Response Helpers
- The test file (`src/index.test.ts`) thoroughly tests `successResponse`, `errorResponse`, enum values, and type assignability. However, the runtime functions `estimateCost`, `estimateMultimodalCost`, `formatCost`, `formatCostPerMillion`, and `detectRequiredCapabilities` have zero test coverage.
- These are critical runtime functions used for cost estimation and schema capability detection. Edge cases to test: zero tokens, very large token counts, missing pricing fields, nested schemas with multiple media types, empty schemas, schemas with no `contentMediaType`.
- The `scanSchemaForMediaTypes` function should be tested with deeply nested schemas, `allOf`/`oneOf`/`anyOf` constructs (currently not supported -- this gap should be documented or handled).

### 3. Validate LlmProvider-to-Model Type Mapping at Runtime
- The codebase defines per-provider model types (`OpenAiModel`, `AnthropicModel`, `GeminiModel`, etc.) but the union type `LlmModel` collapses them all together. There is no runtime validation that a given model string is valid for a given provider.
- Consider adding a `PROVIDER_MODELS` constant (a `Record<LlmProvider, readonly string[]>`) mapping each provider to its valid model IDs, and a `isValidModelForProvider(provider, model)` helper function. This would be useful for both the API (server-side validation) and the app (client-side form validation).

## Priority 2 - Medium Impact

### 3. Add Request/Response Type Validation Schemas (Zod or Similar)
- Currently, request types like `ProjectCreateRequest`, `EndpointCreateRequest`, etc. are purely compile-time TypeScript interfaces. There is no runtime validation.
- Adding Zod schemas (or a similar runtime validation library) that mirror these interfaces would allow the API to validate incoming requests and the client to validate before sending. This would eliminate a class of runtime errors from malformed requests.
- This could be done as an opt-in export (e.g., `import { ProjectCreateRequestSchema } from '@sudobility/shapeshyft_types/validation'`) to avoid increasing bundle size for consumers that don't need runtime validation.

### 4. Add Model Pricing Data as a Runtime Constant
- `ModelPricing` is defined as an interface, but there is no actual pricing data exported from this package. The `estimateCost` and `estimateMultimodalCost` functions exist but consumers have no reference data.
- Consider exporting a `MODEL_PRICING: Record<string, ModelPricing>` constant with current pricing for each model. This would be valuable for the app's cost estimation UI and the budget tracker in `shapeshyft_lib`.
- Since pricing changes frequently, document the "as of" date and provide a clear update path.

### 5. Document Breaking Change Policy and Versioning Strategy
- The CLAUDE.md warns "Be extremely careful with breaking changes" and describes the cascade path. However, there is no formal deprecation strategy.
- Consider adding `@deprecated` JSDoc tags with migration instructions when fields are being phased out, and a CHANGELOG.md that categorizes changes as additive vs. breaking.
- Consider adopting a type versioning pattern (e.g., `EndpointV1` / `EndpointV2`) for major entity changes to allow gradual migration.

## Priority 3 - Nice to Have

### 6. Consolidate Query Parameter Types with Stricter Typing
- `ProjectQueryParams`, `EndpointQueryParams`, and `UsageAnalyticsQueryParams` use `Optional<string>` for boolean-like fields (e.g., `is_active`, `success`). These are stringly-typed because they represent URL query parameters.
- Consider adding utility types like `BooleanQueryParam = 'true' | 'false' | undefined` to make the valid values explicit, reducing the chance of invalid query strings.

### 7. Add JSDoc @example Tags to Response Helper Functions
- `successResponse` and `errorResponse` have brief JSDoc but lack `@example` tags. Since these are re-exported from `@sudobility/types`, the JSDoc in this package should supplement the upstream docs with ShapeShyft-specific usage examples showing typed responses (e.g., `successResponse<Project>(project)`).

### 8. Consider Splitting Large Index File
- `src/index.ts` is over 1,000 lines containing enums, entity types, request types, response types, query params, analytics types, cost utilities, schema utilities, and response helpers. While having a single entry point is convenient, the file could be split into domain-specific modules (e.g., `entities.ts`, `requests.ts`, `cost.ts`, `schema.ts`) with a barrel re-export from `index.ts`.
- This would improve maintainability and make it easier to locate and modify related types. The public API surface would remain unchanged.
