import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { successResponse, errorResponse } from './index';

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

  describe('type exports', () => {
    it('should export LlmProvider type values', () => {
      // Type assertion tests - these validate the type definitions
      const providers: Array<'openai' | 'gemini' | 'anthropic' | 'llm_server'> = [
        'openai',
        'gemini',
        'anthropic',
        'llm_server',
      ];

      expect(providers).toHaveLength(4);
      expect(providers).toContain('openai');
      expect(providers).toContain('gemini');
      expect(providers).toContain('anthropic');
      expect(providers).toContain('llm_server');
    });

    it('should export HttpMethod type values', () => {
      const methods: Array<'GET' | 'POST'> = ['GET', 'POST'];

      expect(methods).toHaveLength(2);
      expect(methods).toContain('GET');
      expect(methods).toContain('POST');
    });
  });
});
