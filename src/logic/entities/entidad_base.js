export class EntidadBase {
    #id;

    constructor(id) {
        this.#id = id ?? `${Date.now()}-${Math.random()}`;
    }

    get id() {
        return this.#id;
    }
}
