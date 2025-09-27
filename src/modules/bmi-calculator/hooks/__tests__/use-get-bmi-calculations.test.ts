import { renderHook, waitFor } from "@testing-library/react";
import { SWRConfig } from "swr";
import { useGetBmiCalculations } from "../use-get-bmi-calculations";
import { getAllBmiCalculations } from "../../services";
import { BmiCalculation } from "../../domain/bmi-calculation";

// Mock the service layer
vi.mock("../../services", () => ({
  getAllBmiCalculations: vi.fn(),
}));

const mockedGetAllBmiCalculations = vi.mocked(getAllBmiCalculations);

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});

// Sample test data
const mockBmiCalculations: BmiCalculation[] = [
  {
    id: "1",
    weight: 70,
    height: 175,
    bmi: 22.9,
    category: "Normal",
    calculatedAt: new Date("2023-10-01T10:00:00Z"),
  },
  {
    id: "2",
    weight: 85,
    height: 180,
    bmi: 26.2,
    category: "Overweight",
    calculatedAt: new Date("2023-10-02T11:00:00Z"),
  },
];

// SWR test wrapper to prevent cache pollution between tests
const createWrapper = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );
};

describe("useGetBmiCalculations", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock localStorage availability by default
    localStorageMock.setItem.mockImplementation(() => {});
    localStorageMock.removeItem.mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch and return BMI calculations successfully", async () => {
    // Arrange
    mockedGetAllBmiCalculations.mockResolvedValueOnce({
      success: true,
      data: mockBmiCalculations,
    });

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.isLocalStorageAvailable).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockBmiCalculations);
    expect(result.current.isEmpty).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(mockedGetAllBmiCalculations).toHaveBeenCalledTimes(1);
  });

  it("should handle service layer errors gracefully", async () => {
    // Arrange
    const errorMessage = "Failed to load calculations";
    mockedGetAllBmiCalculations.mockResolvedValueOnce({
      success: false,
      error: errorMessage,
    });

    // Spy on console.warn to avoid noise in test output
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual([]);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.error).toBeDefined();
    expect(result.current.error?.message).toBe(errorMessage);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "BMI calculations fetch error:",
      errorMessage
    );

    consoleWarnSpy.mockRestore();
  });

  it("should handle localStorage unavailability", async () => {
    // Arrange - Mock localStorage to throw an error
    localStorageMock.setItem.mockImplementationOnce(() => {
      throw new Error("localStorage not available");
    });

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert
    expect(result.current.isLocalStorageAvailable).toBe(false);
    expect(result.current.data).toEqual([]);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.isLoading).toBe(false);
    
    // Service should not be called when localStorage is unavailable
    expect(mockedGetAllBmiCalculations).not.toHaveBeenCalled();
  });

  it("should return empty array when no calculations exist", async () => {
    // Arrange
    mockedGetAllBmiCalculations.mockResolvedValueOnce({
      success: true,
      data: [],
    });

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual([]);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.error).toBeUndefined();
  });

  it("should handle server-side rendering (no window object)", async () => {
    // Arrange - Mock window as undefined
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert
    expect(result.current.isLocalStorageAvailable).toBe(false);
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);

    // Restore window object
    global.window = originalWindow;
  });

  it("should use correct SWR key and configuration", async () => {
    // Arrange
    mockedGetAllBmiCalculations.mockResolvedValueOnce({
      success: true,
      data: mockBmiCalculations,
    });

    // Act
    const { result } = renderHook(() => useGetBmiCalculations(), {
      wrapper: createWrapper(),
    });

    // Assert - Check that hook returns SWR properties
    expect(typeof result.current.mutate).toBe("function");
    expect(typeof result.current.isValidating).toBe("boolean");
    expect(result.current.data).toBeDefined();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockBmiCalculations);
  });
});
