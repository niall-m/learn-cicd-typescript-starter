import { describe, expect, test } from "vitest";

import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null if no authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
  
  test("returns null if authorization header is not in the correct format", () => {
    const headers = { "authorization": "Bearer some-token" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns the API key if authorization header is in the correct format", () => {
    const headers = { "authorization": "ApiKey my-secret-key" };
    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });
});