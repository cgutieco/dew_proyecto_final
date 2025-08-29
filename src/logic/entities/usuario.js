import {EntidadBase} from "./entidad_base.js";

export class Usuario extends EntidadBase {
    #email;
    #password;
    #name;

    constructor({id, email, password, name}) {
        super(id);
        this.#email = email;
        this.#password = password;
        this.#name = name ?? "";
    }

    get email() {
        return this.#email;
    }

    get name() {
        return this.#name;
    }

    verifyPassword(plain) {
        return this.#password === plain;
    }
}
