import Aluno from "src/app/shared/model/aluno";
import Disciplina from "src/app/shared/model/disciplina";

export interface Falta{
    id: Number,
    aluno:Aluno,
    disciplina: Disciplina,
    date: String,
    presenca: Number,
}