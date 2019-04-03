export interface INapon {
    U: number;
    R: number;
    C: number;
}

export class Napon implements INapon {
    constructor(
        public U: number,
        public R: number,
        public C: number,
    ) { }
}
