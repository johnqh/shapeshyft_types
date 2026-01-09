import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  successResponse,
  errorResponse,
  type LlmProvider,
  type HttpMethod,
  type JsonSchema,
  type User,
  type LlmApiKey,
  type LlmApiKeySafe,
  type Project,
  type Endpoint,
  type UsageAnalytics,
  type UserSettings,
  type UsageAggregate,
  type UsageByEndpoint,
  type UsageByDate,
  type AnalyticsResponse,
  type LlmRequest,
  type LlmResponse,
  type AiExecutionRequest,
  type AiExecutionResponse,
  type AiPromptResponse,
  type PromptInput,
  type ApiHelperRequestInput,
  type ApiHelperRequestOutput,
  type RefreshApiKeyResponse,
  type GetApiKeyResponse,
  type HealthCheckData,
  type UserCreateRequest,
  type UserUpdateRequest,
  type UserSettingsUpdateRequest,
  type LlmApiKeyCreateRequest,
  type LlmApiKeyUpdateRequest,
  type ProjectCreateRequest,
  type ProjectUpdateRequest,
  type EndpointCreateRequest,
  type EndpointUpdateRequest,
  type ProjectQueryParams,
  type EndpointQueryParams,
  type UsageAnalyticsQueryParams,
} from './index';

describe('shapeshyft_types', () => {
  describe('successResponse', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-01-15T10:30:00.000Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should create a success response with data', () => {
      const data = { id: '123', name: 'Test' };
      const response = successResponse(data);

      expect(response.success).toBe(true);
      expect(response.data).toEqual({ id: '123', name: 'Test' });
      expect(response.timestamp).toBe('2025-01-15T10:30:00.000Z');
    });

    it('should create a success response with string data', () => {
      const response = successResponse('test string');

      expect(response.success).toBe(true);
      expect(response.data).toBe('test string');
    });

    it('should create a success response with array data', () => {
      const data = [{ id: 1 }, { id: 2 }];
      const response = successResponse(data);

      expect(response.success).toBe(true);
      expect(response.data).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should create a success response with null data', () => {
      const response = successResponse(null);

      expect(response.success).toBe(true);
      expect(response.data).toBeNull();
    });

    it('should create a success response with number data', () => {
      const response = successResponse(42);

      expect(response.success).toBe(true);
      expect(response.data).toBe(42);
    });

    it('should create a success response with boolean data', () => {
      const response = successResponse(true);

      expect(response.success).toBe(true);
      expect(response.data).toBe(true);
    });

    it('should not include error field', () => {
      const response = successResponse({ test: true });

      expect(response).not.toHaveProperty('error');
    });
  });

  describe('errorResponse', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-01-15T10:30:00.000Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should create an error response with message', () => {
      const response = errorResponse('Something went wrong');

      expect(response.success).toBe(false);
      expect(response.error).toBe('Something went wrong');
      expect(response.timestamp).toBe('2025-01-15T10:30:00.000Z');
    });

    it('should create an error response with empty message', () => {
      const response = errorResponse('');

      expect(response.success).toBe(false);
      expect(response.error).toBe('');
    });

    it('should not include data field', () => {
      const response = errorResponse('Error occurred');

      expect(response).not.toHaveProperty('data');
    });

    it('should handle long error messages', () => {
      const longMessage = 'A'.repeat(1000);
      const response = errorResponse(longMessage);

      expect(response.success).toBe(false);
      expect(response.error).toBe(longMessage);
      expect(response.error.length).toBe(1000);
    });

    it('should handle error messages with special characters', () => {
      const specialMessage = 'Error: "Invalid <input> & {data}';
      const response = errorResponse(specialMessage);

      expect(response.success).toBe(false);
      expect(response.error).toBe(specialMessage);
    });
  });

  describe('enum type values', () => {
    it('should support all LlmProvider values', () => {
      const providers: LlmProvider[] = ['openai', 'gemini', 'anthropic', 'llm_server'];

      expect(providers).toHaveLength(4);
      expect(providers).toContain('openai');
      expect(providers).toContain('gemini');
      expect(providers).toContain('anthropic');
      expect(providers).toContain('llm_server');
    });

    it('should support all HttpMethod values', () => {
      const methods: HttpMethod[] = ['GET', 'POST'];

      expect(methods).toHaveLength(2);
      expect(methods).toContain('GET');
      expect(methods).toContain('POST');
    });
  });

  describe('JsonSchema type', () => {
    it('should support basic object schema', () => {
      const schema: JsonSchema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' },
        },
        required: ['name'],
      };

      expect(schema.type).toBe('object');
      expect(schema.properties?.name?.type).toBe('string');
      expect(schema.required).toContain('name');
    });

    it('should support array schema', () => {
      const schema: JsonSchema = {
        type: 'array',
        items: {
          type: 'string',
        },
      };

      expect(schema.type).toBe('array');
      expect(schema.items?.type).toBe('string');
    });

    it('should support enum values', () => {
      const schema: JsonSchema = {
        type: 'string',
        enum: ['red', 'green', 'blue'],
      };

      expect(schema.enum).toEqual(['red', 'green', 'blue']);
    });

    it('should support validation constraints', () => {
      const schema: JsonSchema = {
        type: 'string',
        minLength: 1,
        maxLength: 100,
        pattern: '^[a-z]+$',
      };

      expect(schema.minLength).toBe(1);
      expect(schema.maxLength).toBe(100);
      expect(schema.pattern).toBe('^[a-z]+$');
    });

    it('should support numeric constraints', () => {
      const schema: JsonSchema = {
        type: 'number',
        minimum: 0,
        maximum: 100,
      };

      expect(schema.minimum).toBe(0);
      expect(schema.maximum).toBe(100);
    });

    it('should support nested schemas', () => {
      const schema: JsonSchema = {
        type: 'object',
        properties: {
          address: {
            type: 'object',
            properties: {
              street: { type: 'string' },
              city: { type: 'string' },
            },
          },
        },
      };

      expect(schema.properties?.address?.properties?.street?.type).toBe('string');
    });

    it('should support additionalProperties', () => {
      const schema: JsonSchema = {
        type: 'object',
        additionalProperties: false,
      };

      expect(schema.additionalProperties).toBe(false);
    });
  });

  describe('entity types', () => {
    it('should create valid User object', () => {
      const user: User = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        firebase_uid: 'firebase-uid-123',
        email: 'test@example.com',
        display_name: 'Test User',
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(user.id).toBeDefined();
      expect(user.firebase_uid).toBe('firebase-uid-123');
      expect(user.email).toBe('test@example.com');
    });

    it('should allow nullable User fields', () => {
      const user: User = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        firebase_uid: 'firebase-uid-123',
        email: null,
        display_name: null,
        created_at: null,
        updated_at: null,
      };

      expect(user.email).toBeNull();
      expect(user.display_name).toBeNull();
    });

    it('should create valid LlmApiKey object', () => {
      const key: LlmApiKey = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        entity_id: '123e4567-e89b-12d3-a456-426614174001',
        key_name: 'My OpenAI Key',
        provider: 'openai',
        encrypted_api_key: 'encrypted-key-data',
        endpoint_url: null,
        encryption_iv: 'iv-data',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(key.entity_id).toBeDefined();
      expect(key.provider).toBe('openai');
      expect(key.is_active).toBe(true);
    });

    it('should create valid LlmApiKeySafe object (no sensitive data)', () => {
      const safeKey: LlmApiKeySafe = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        entity_id: '123e4567-e89b-12d3-a456-426614174001',
        key_name: 'My OpenAI Key',
        provider: 'openai',
        has_api_key: true,
        endpoint_url: null,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(safeKey.has_api_key).toBe(true);
      expect(safeKey).not.toHaveProperty('encrypted_api_key');
      expect(safeKey).not.toHaveProperty('encryption_iv');
    });

    it('should create valid Project object', () => {
      const project: Project = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        entity_id: '123e4567-e89b-12d3-a456-426614174001',
        project_name: 'my-project',
        display_name: 'My Project',
        description: 'A test project',
        is_active: true,
        api_key_prefix: 'sk_live_ab',
        api_key_created_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(project.entity_id).toBeDefined();
      expect(project.project_name).toBe('my-project');
      expect(project.is_active).toBe(true);
    });

    it('should create valid Endpoint object', () => {
      const endpoint: Endpoint = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        project_id: '123e4567-e89b-12d3-a456-426614174001',
        endpoint_name: 'analyze-text',
        display_name: 'Analyze Text',
        http_method: 'POST',
        llm_key_id: '123e4567-e89b-12d3-a456-426614174002',
        input_schema: { type: 'object', properties: { text: { type: 'string' } } },
        output_schema: { type: 'object', properties: { result: { type: 'string' } } },
        instructions: 'Analyze the given text',
        context: 'You are a text analyzer',
        is_active: true,
        ip_allowlist: ['192.168.1.1', '10.0.0.1'],
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(endpoint.http_method).toBe('POST');
      expect(endpoint.ip_allowlist).toHaveLength(2);
      expect(endpoint.input_schema?.type).toBe('object');
    });

    it('should allow null ip_allowlist for unrestricted access', () => {
      const endpoint: Endpoint = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        project_id: '123e4567-e89b-12d3-a456-426614174001',
        endpoint_name: 'public-endpoint',
        display_name: 'Public Endpoint',
        http_method: 'GET',
        llm_key_id: '123e4567-e89b-12d3-a456-426614174002',
        input_schema: null,
        output_schema: null,
        instructions: null,
        context: null,
        is_active: true,
        ip_allowlist: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(endpoint.ip_allowlist).toBeNull();
    });

    it('should create valid UsageAnalytics object', () => {
      const analytics: UsageAnalytics = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        endpoint_id: '123e4567-e89b-12d3-a456-426614174001',
        timestamp: new Date(),
        success: true,
        error_message: null,
        tokens_input: 100,
        tokens_output: 50,
        latency_ms: 500,
        estimated_cost_cents: 10,
        request_metadata: { user_agent: 'test-agent' },
      };

      expect(analytics.success).toBe(true);
      expect(analytics.tokens_input).toBe(100);
      expect(analytics.estimated_cost_cents).toBe(10);
    });

    it('should create valid UserSettings object with is_default flag', () => {
      const settings: UserSettings = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        organization_name: 'My Org',
        organization_path: 'my_org',
        is_default: false,
        created_at: new Date(),
        updated_at: new Date(),
      };

      expect(settings.is_default).toBe(false);
      expect(settings.organization_path).toBe('my_org');
    });

    it('should support default UserSettings (not yet saved)', () => {
      const defaultSettings: UserSettings = {
        id: null,
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        organization_name: null,
        organization_path: 'abc12345',
        is_default: true,
        created_at: null,
        updated_at: null,
      };

      expect(defaultSettings.is_default).toBe(true);
      expect(defaultSettings.id).toBeNull();
    });
  });

  describe('analytics aggregation types', () => {
    it('should create valid UsageAggregate object', () => {
      const aggregate: UsageAggregate = {
        total_requests: 100,
        successful_requests: 95,
        failed_requests: 5,
        total_tokens_input: 10000,
        total_tokens_output: 5000,
        total_estimated_cost_cents: 150,
        average_latency_ms: 250,
      };

      expect(aggregate.total_requests).toBe(100);
      expect(aggregate.successful_requests + aggregate.failed_requests).toBe(100);
    });

    it('should create valid UsageByEndpoint object', () => {
      const byEndpoint: UsageByEndpoint = {
        endpoint_id: '123e4567-e89b-12d3-a456-426614174000',
        endpoint_name: 'analyze-text',
        total_requests: 50,
        successful_requests: 48,
        failed_requests: 2,
        total_tokens_input: 5000,
        total_tokens_output: 2500,
        total_estimated_cost_cents: 75,
        average_latency_ms: 200,
      };

      expect(byEndpoint.endpoint_id).toBeDefined();
      expect(byEndpoint.endpoint_name).toBe('analyze-text');
    });

    it('should create valid AnalyticsResponse object', () => {
      const response: AnalyticsResponse = {
        aggregate: {
          total_requests: 100,
          successful_requests: 95,
          failed_requests: 5,
          total_tokens_input: 10000,
          total_tokens_output: 5000,
          total_estimated_cost_cents: 150,
          average_latency_ms: 250,
        },
        by_endpoint: [
          {
            endpoint_id: '123e4567-e89b-12d3-a456-426614174000',
            endpoint_name: 'endpoint-1',
            total_requests: 50,
            successful_requests: 48,
            failed_requests: 2,
            total_tokens_input: 5000,
            total_tokens_output: 2500,
            total_estimated_cost_cents: 75,
            average_latency_ms: 200,
          },
        ],
      };

      expect(response.aggregate.total_requests).toBe(100);
      expect(response.by_endpoint).toHaveLength(1);
    });
  });

  describe('LLM request/response types', () => {
    it('should create valid LlmRequest object', () => {
      const request: LlmRequest = {
        prompt: 'Analyze this text',
        system_prompt: 'You are a helpful assistant',
        output_schema: { type: 'object' },
        model: 'gpt-4o',
        temperature: 0.7,
        max_tokens: 1000,
      };

      expect(request.prompt).toBe('Analyze this text');
      expect(request.temperature).toBe(0.7);
    });

    it('should create valid LlmResponse object', () => {
      const response: LlmResponse = {
        content: { result: 'Analysis complete' },
        raw_response: '{"result": "Analysis complete"}',
        usage: {
          prompt_tokens: 100,
          completion_tokens: 50,
          total_tokens: 150,
        },
        model: 'gpt-4o',
        provider: 'openai',
      };

      expect(response.usage.total_tokens).toBe(150);
      expect(response.provider).toBe('openai');
    });
  });

  describe('AI execution types', () => {
    it('should create valid AiExecutionRequest object', () => {
      const request: AiExecutionRequest = {
        input: { text: 'Hello world' },
      };

      expect(request.input).toEqual({ text: 'Hello world' });
    });

    it('should create valid AiExecutionResponse object', () => {
      const response: AiExecutionResponse = {
        output: { sentiment: 'positive' },
        usage: {
          tokens_input: 10,
          tokens_output: 5,
          latency_ms: 200,
          estimated_cost_cents: 1,
        },
      };

      expect(response.output).toEqual({ sentiment: 'positive' });
      expect(response.usage.latency_ms).toBe(200);
    });
  });

  describe('ApiHelper types', () => {
    it('should create valid PromptInput object', () => {
      const input: PromptInput = {
        inputData: { text: 'Sample text' },
        outputSchema: { type: 'object' },
        instructions: 'Process the text',
        context: 'You are a processor',
        provider: 'openai',
      };

      expect(input.provider).toBe('openai');
      expect(input.instructions).toBe('Process the text');
    });

    it('should create valid ApiHelperRequestInput object', () => {
      const input: ApiHelperRequestInput = {
        prompt: 'Analyze this',
        outputSchema: { type: 'object' },
        provider: 'anthropic',
        providerConfig: {
          apiKey: 'sk-test',
          model: 'claude-3-5-sonnet-20241022',
        },
        options: {
          temperature: 0.5,
          maxTokens: 500,
        },
      };

      expect(input.provider).toBe('anthropic');
      expect(input.providerConfig.model).toBe('claude-3-5-sonnet-20241022');
    });

    it('should create valid ApiHelperRequestOutput object', () => {
      const output: ApiHelperRequestOutput = {
        apiPayload: {
          model: 'gpt-4o',
          messages: [{ role: 'user', content: 'Hello' }],
        },
        endpointUrl: 'https://api.openai.com/v1/chat/completions',
        provider: 'openai',
      };

      expect(output.endpointUrl).toContain('openai.com');
      expect(output.provider).toBe('openai');
    });
  });

  describe('API key types', () => {
    it('should create valid RefreshApiKeyResponse object', () => {
      const response: RefreshApiKeyResponse = {
        api_key: 'shyft_test_abcdefghijklmnop1234567890',
        api_key_prefix: 'shyft_test_ab...',
        api_key_created_at: '2025-01-15T10:30:00.000Z',
      };

      expect(response.api_key).toContain('shyft_test_');
      expect(response.api_key_prefix).toContain('...');
    });
  });

  describe('health check types', () => {
    it('should create valid HealthCheckData object', () => {
      const health: HealthCheckData = {
        name: 'shapeshyft_api',
        version: '1.0.16',
        status: 'healthy',
      };

      expect(health.name).toBe('shapeshyft_api');
      expect(health.status).toBe('healthy');
    });
  });

  describe('request body types', () => {
    it('should create valid UserCreateRequest', () => {
      const request: UserCreateRequest = {
        firebase_uid: 'firebase-uid-123',
        email: 'test@example.com',
        display_name: 'Test User',
      };

      expect(request.firebase_uid).toBe('firebase-uid-123');
      expect(request.email).toBe('test@example.com');
    });

    it('should allow undefined optional fields in UserCreateRequest', () => {
      const request: UserCreateRequest = {
        firebase_uid: 'firebase-uid-123',
        email: undefined,
        display_name: undefined,
      };

      expect(request.firebase_uid).toBeDefined();
      expect(request.email).toBeUndefined();
    });

    it('should create valid UserUpdateRequest', () => {
      const request: UserUpdateRequest = {
        email: 'new@example.com',
        display_name: 'New Name',
      };

      expect(request.email).toBe('new@example.com');
      expect(request.display_name).toBe('New Name');
    });

    it('should allow partial UserUpdateRequest', () => {
      const request: UserUpdateRequest = {
        email: undefined,
        display_name: 'Only Name',
      };

      expect(request.email).toBeUndefined();
      expect(request.display_name).toBe('Only Name');
    });

    it('should create valid UserSettingsUpdateRequest', () => {
      const request: UserSettingsUpdateRequest = {
        organization_name: 'New Org',
        organization_path: 'new_org',
      };

      expect(request.organization_name).toBe('New Org');
      expect(request.organization_path).toBe('new_org');
    });

    it('should create valid LlmApiKeyCreateRequest', () => {
      const request: LlmApiKeyCreateRequest = {
        key_name: 'My API Key',
        provider: 'openai',
        api_key: 'sk-test-key',
        endpoint_url: undefined,
      };

      expect(request.key_name).toBe('My API Key');
      expect(request.provider).toBe('openai');
      expect(request.api_key).toBe('sk-test-key');
    });

    it('should create valid LlmApiKeyCreateRequest for llm_server', () => {
      const request: LlmApiKeyCreateRequest = {
        key_name: 'Custom LLM Server',
        provider: 'llm_server',
        api_key: undefined,
        endpoint_url: 'https://my-llm-server.com/v1',
      };

      expect(request.provider).toBe('llm_server');
      expect(request.endpoint_url).toBe('https://my-llm-server.com/v1');
    });

    it('should create valid LlmApiKeyUpdateRequest', () => {
      const request: LlmApiKeyUpdateRequest = {
        key_name: 'Updated Key',
        api_key: 'sk-new-key',
        endpoint_url: undefined,
        is_active: true,
      };

      expect(request.key_name).toBe('Updated Key');
      expect(request.is_active).toBe(true);
    });

    it('should create valid ProjectCreateRequest', () => {
      const request: ProjectCreateRequest = {
        project_name: 'my-project',
        display_name: 'My Project',
        description: 'A test project',
      };

      expect(request.project_name).toBe('my-project');
      expect(request.display_name).toBe('My Project');
      expect(request.description).toBe('A test project');
    });

    it('should create valid ProjectUpdateRequest', () => {
      const request: ProjectUpdateRequest = {
        project_name: 'updated-project',
        display_name: 'Updated Project',
        description: undefined,
        is_active: false,
      };

      expect(request.is_active).toBe(false);
    });

    it('should create valid EndpointCreateRequest', () => {
      const request: EndpointCreateRequest = {
        endpoint_name: 'analyze-text',
        display_name: 'Analyze Text',
        http_method: 'POST',
        llm_key_id: '123e4567-e89b-12d3-a456-426614174000',
        input_schema: { type: 'object', properties: { text: { type: 'string' } } },
        output_schema: { type: 'object', properties: { result: { type: 'string' } } },
        instructions: 'Analyze the text',
        context: 'You are a text analyzer',
      };

      expect(request.endpoint_name).toBe('analyze-text');
      expect(request.http_method).toBe('POST');
      expect(request.llm_key_id).toBeDefined();
    });

    it('should create minimal EndpointCreateRequest', () => {
      const request: EndpointCreateRequest = {
        endpoint_name: 'simple-endpoint',
        display_name: 'Simple Endpoint',
        http_method: undefined,
        llm_key_id: '123e4567-e89b-12d3-a456-426614174000',
        input_schema: undefined,
        output_schema: undefined,
        instructions: undefined,
        context: undefined,
      };

      expect(request.endpoint_name).toBe('simple-endpoint');
      expect(request.http_method).toBeUndefined();
    });

    it('should create valid EndpointUpdateRequest', () => {
      const request: EndpointUpdateRequest = {
        endpoint_name: 'updated-endpoint',
        display_name: 'Updated Endpoint',
        http_method: 'GET',
        is_active: true,
        ip_allowlist: ['192.168.1.1', '10.0.0.1'],
      };

      expect(request.http_method).toBe('GET');
      expect(request.ip_allowlist).toHaveLength(2);
    });

    it('should allow clearing ip_allowlist in EndpointUpdateRequest', () => {
      const request: EndpointUpdateRequest = {
        ip_allowlist: null,
      };

      expect(request.ip_allowlist).toBeNull();
    });
  });

  describe('query parameter types', () => {
    it('should create valid ProjectQueryParams', () => {
      const params: ProjectQueryParams = {
        is_active: 'true',
      };

      expect(params.is_active).toBe('true');
    });

    it('should allow undefined ProjectQueryParams fields', () => {
      const params: ProjectQueryParams = {
        is_active: undefined,
      };

      expect(params.is_active).toBeUndefined();
    });

    it('should create valid EndpointQueryParams', () => {
      const params: EndpointQueryParams = {
        is_active: 'false',
      };

      expect(params.is_active).toBe('false');
    });

    it('should create valid UsageAnalyticsQueryParams with all fields', () => {
      const params: UsageAnalyticsQueryParams = {
        endpoint_id: '123e4567-e89b-12d3-a456-426614174000',
        project_id: '123e4567-e89b-12d3-a456-426614174001',
        start_date: '2025-01-01',
        end_date: '2025-01-31',
        success: 'true',
      };

      expect(params.endpoint_id).toBeDefined();
      expect(params.project_id).toBeDefined();
      expect(params.start_date).toBe('2025-01-01');
      expect(params.end_date).toBe('2025-01-31');
      expect(params.success).toBe('true');
    });

    it('should allow partial UsageAnalyticsQueryParams', () => {
      const params: UsageAnalyticsQueryParams = {
        endpoint_id: undefined,
        project_id: '123e4567-e89b-12d3-a456-426614174001',
        start_date: undefined,
        end_date: undefined,
        success: undefined,
      };

      expect(params.project_id).toBeDefined();
      expect(params.start_date).toBeUndefined();
    });
  });

  describe('additional response types', () => {
    it('should create valid UsageByDate object', () => {
      const byDate: UsageByDate = {
        date: '2025-01-15',
        total_requests: 100,
        successful_requests: 95,
        failed_requests: 5,
        total_tokens_input: 10000,
        total_tokens_output: 5000,
        total_estimated_cost_cents: 150,
        average_latency_ms: 250,
      };

      expect(byDate.date).toBe('2025-01-15');
      expect(byDate.total_requests).toBe(100);
    });

    it('should create valid AiPromptResponse object', () => {
      const response: AiPromptResponse = {
        prompt: 'Given the following input:\n{"text": "Hello"}\n\nAnalyze the sentiment.',
      };

      expect(response.prompt).toContain('sentiment');
    });

    it('should create valid GetApiKeyResponse object', () => {
      const response: GetApiKeyResponse = {
        api_key: 'shyft_live_abcdefghijklmnop1234567890abcdef',
      };

      expect(response.api_key).toContain('shyft_live_');
    });
  });

  describe('response with typed data', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-01-15T10:30:00.000Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should create typed success response with Project', () => {
      const project: Project = {
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        entity_id: '123e4567-e89b-12d3-a456-426614174001',
        project_name: 'test',
        display_name: 'Test',
        description: null,
        is_active: true,
        api_key_prefix: null,
        api_key_created_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      const response = successResponse(project);

      expect(response.success).toBe(true);
      expect(response.data.project_name).toBe('test');
      expect(response.data.entity_id).toBeDefined();
    });

    it('should create typed success response with array of LlmApiKeySafe', () => {
      const keys: LlmApiKeySafe[] = [
        {
          uuid: '123e4567-e89b-12d3-a456-426614174000',
          entity_id: '123e4567-e89b-12d3-a456-426614174001',
          key_name: 'Key 1',
          provider: 'openai',
          has_api_key: true,
          endpoint_url: null,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          uuid: '123e4567-e89b-12d3-a456-426614174002',
          entity_id: '123e4567-e89b-12d3-a456-426614174001',
          key_name: 'Key 2',
          provider: 'anthropic',
          has_api_key: true,
          endpoint_url: null,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      const response = successResponse(keys);

      expect(response.success).toBe(true);
      expect(response.data).toHaveLength(2);
      expect(response.data[0].provider).toBe('openai');
      expect(response.data[1].provider).toBe('anthropic');
    });

    it('should create typed success response with AnalyticsResponse', () => {
      const analytics: AnalyticsResponse = {
        aggregate: {
          total_requests: 0,
          successful_requests: 0,
          failed_requests: 0,
          total_tokens_input: 0,
          total_tokens_output: 0,
          total_estimated_cost_cents: 0,
          average_latency_ms: 0,
        },
        by_endpoint: [],
      };

      const response = successResponse(analytics);

      expect(response.success).toBe(true);
      expect(response.data.aggregate.total_requests).toBe(0);
      expect(response.data.by_endpoint).toEqual([]);
    });
  });
});
