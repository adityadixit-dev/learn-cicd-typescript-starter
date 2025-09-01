import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";

describe("Testing getAPIKey function", () => {
  test("Should return null if auth header is not present", () => {
    const headers: IncomingHttpHeaders = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
