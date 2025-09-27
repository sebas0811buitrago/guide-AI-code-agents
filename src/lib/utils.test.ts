import { cn } from "@/lib/utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    });

    it("handles conditional classes", () => {
      expect(cn("px-2", false && "py-1", "text-sm")).toBe("px-2 text-sm");
    });

    it("handles empty inputs", () => {
      expect(cn()).toBe("");
    });

    it("handles undefined and null values", () => {
      expect(cn("px-2", undefined, null, "py-1")).toBe("px-2 py-1");
    });
  });
});
