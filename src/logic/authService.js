import {usersDB} from "../data/users";
import {Usuario} from "./entities/usuario.js";

export class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthError";
    }
}

export class AuthService {
    #users;

    constructor(users = usersDB) {
        this.#users = users;
    }

    login(email, password) {
        if (!email || !password) {
            throw new AuthError("Email y contraseña son requeridos", "VALIDATION_ERROR");
        }
        const found = this.#users.find(u => u.email === email);

        if (!found) {
            throw new AuthError("Usuario no encontrado", "USER_NOT_FOUND");
        }
        const usuario = new Usuario(found);
        if (!usuario.verifyPassword(password)) {
            throw new AuthError("Credenciales incorrectas", "INVALID_CREDENTIALS");
        }
        return usuario;
    }
}

export const authService = new AuthService();
