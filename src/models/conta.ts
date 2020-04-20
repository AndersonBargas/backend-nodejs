import { tipoContas } from "../enums/tipoContas";

export type Conta = {
    numero: number;
    tipo: tipoContas;
};