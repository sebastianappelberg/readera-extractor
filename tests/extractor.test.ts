import {fixMultiLineComment} from "../src/extractor";

describe("parseReadEraBackup", () => {
  test("fixes multiline comments", () => {
    expect(
      fixMultiLineComment(`Line 1.

Line 2.`),
    ).toBe(
      `**Line 1.

**Line 2.`,
    );
  });
});
