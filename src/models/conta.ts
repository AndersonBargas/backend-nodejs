import { tipoContas } from "../enums/tipoContas";

export type Conta = {
    numero: number;
    saldo: number;
    tipo: tipoContas;
};