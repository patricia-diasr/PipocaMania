import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useNavigate, MemoryRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import { signup } from "../services/authenticationService";

vi.mock("../services/authenticationService", () => ({
    signup: vi.fn(),
}));

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: vi.fn(),
        MemoryRouter: actual.MemoryRouter, 
    };
});

describe("Signup Component", () => {
    let navigateMock;

    beforeEach(() => {
        navigateMock = vi.fn();
        useNavigate.mockReturnValue(navigateMock);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test("renders signup form", () => {
        render(
            <MemoryRouter>
                <Signup />
            </MemoryRouter>
        );

        expect(screen.getByText(/faça seu cadastro/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/user name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /cadastrar/i })).toBeInTheDocument();
    });

    test("calls signup and navigates on successful signup", async () => {
        signup.mockResolvedValue({
            user: { role: "client" },
        });

        render(
            <MemoryRouter>
                <Signup />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/nome/i);
        const usernameInput = screen.getByLabelText(/user name/i);
        const passwordInput = screen.getByLabelText(/senha/i);
        const button = screen.getByRole("button", { name: /cadastrar/i });

        fireEvent.change(nameInput, { target: { value: "Teste" } });
        fireEvent.change(usernameInput, { target: { value: "Teste" } });
        fireEvent.change(passwordInput, { target: { value: "123" } });

        fireEvent.click(button);

        await waitFor(() => {
            expect(signup).toHaveBeenCalledWith({ login: "Teste", password: "123", name: "Teste" });
            expect(navigateMock).toHaveBeenCalledWith("/home");
        });
    });

    test("displays error on failed signup", async () => {
        signup.mockRejectedValue(new Error("Algo deu errado"));

        render(
            <MemoryRouter>
                <Signup />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/nome/i);
        const usernameInput = screen.getByLabelText(/user name/i);
        const passwordInput = screen.getByLabelText(/senha/i);
        const button = screen.getByRole("button", { name: /cadastrar/i });

        fireEvent.change(nameInput, { target: { value: "Teste" } });
        fireEvent.change(usernameInput, { target: { value: "Teste" } });
        fireEvent.change(passwordInput, { target: { value: "123" } });

        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText(/algo deu errado/i)).toBeInTheDocument();
        });
    });
});
