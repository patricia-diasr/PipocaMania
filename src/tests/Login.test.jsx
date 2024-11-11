import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate, MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

vi.mock("../services/authenticationService.js", () => ({
    login: vi.fn(),
}));

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: vi.fn(), 
        MemoryRouter: actual.MemoryRouter, 
    };
});

import { login } from "../services/authenticationService";

describe("Login Component", () => {
    let navigateMock;

    beforeEach(() => {
        navigateMock = vi.fn();
        useNavigate.mockReturnValue(navigateMock);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test("renders login form", () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        expect(screen.getByText(/faça seu login/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/user name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    });

    test("calls login and navigates on successful login", async () => {
        login.mockResolvedValue({
            user: { role: "client" },
        });

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const usernameInput = screen.getByLabelText(/user name/i);
        const passwordInput = screen.getByLabelText(/senha/i);
        const button = screen.getByRole("button", { name: /entrar/i });

        fireEvent.change(usernameInput, { target: { value: "pati" } });
        fireEvent.change(passwordInput, { target: { value: "123" } });
        fireEvent.click(button);

        expect(await screen.findByText(/entrando.../i)).toBeInTheDocument();
        expect(login).toHaveBeenCalledWith({ login: "pati", password: "123" });
        expect(navigateMock).toHaveBeenCalledWith("/home");
    });

    test("displays error on failed login", async () => {
        login.mockRejectedValue(new Error("Invalid credentials"));

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const usernameInput = screen.getByLabelText(/user name/i);
        const passwordInput = screen.getByLabelText(/senha/i);
        const button = screen.getByRole("button", { name: /entrar/i });

        fireEvent.change(usernameInput, { target: { value: "testUser" } });
        fireEvent.change(passwordInput, { target: { value: "testPass" } });
        fireEvent.click(button);

        expect(await screen.findByText(/senha ou login inválidos/i)).toBeInTheDocument();
        expect(login).toHaveBeenCalledWith({ login: "testUser", password: "testPass" });
    });
});
