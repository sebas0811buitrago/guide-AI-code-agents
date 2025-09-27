import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    // Check for Next.js logo
    const logo = screen.getByAltText(/next\.js logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the main heading and description", () => {
    render(<Home />);

    expect(
      screen.getByText(/next\.js 15\.5 full stack setup/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/complete setup with/i)).toBeInTheDocument();
  });

  it("renders tech stack info", () => {
    render(<Home />);

    expect(screen.getByText(/🛠️ tech stack/i)).toBeInTheDocument();
    expect(screen.getAllByText(/next\.js 15\.5/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/tailwind css/i)).toBeInTheDocument();
  });

  it("renders documentation links", () => {
    render(<Home />);

    expect(
      screen.getByRole("link", { name: /📖 next\.js docs/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /🎨 shadcn\/ui/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /🧪 vitest/i })
    ).toBeInTheDocument();
  });
});
