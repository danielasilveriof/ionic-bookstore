import { Genero } from "./genero.enum";

export interface Autor {
    id?:number;
    nome: string;
    dataNascimento: Date;
    genero: Genero;
}
