import { createReducer, on } from "@ngrx/store";
import { Livro } from "../livro.model";
import { livroActions } from "./livro.actions";

enum LivroStatus {
    loading = 'loading',
    pending = 'pending',
    error = 'error',
    success = 'success'
}

export interface LivroState {
    livros: Livro[];
    error: '' | null,
    status: LivroStatus
}

const initialState: LivroState = {
    error: null,
    status: LivroStatus.loading,
    livros: []
}

export const livroReducer = createReducer(
    initialState,
    on(livroActions.carregarLivros, (stateActual) => {
        return {
            ...stateActual,
            // livros: livrosInicias,
            status: LivroStatus.loading
        }
    }),
    on(livroActions.livrosCarregadosSucesso, (stateActual, livroObj) => {
        return {
            ...stateActual,
            livros: livroObj.livros,
            status: LivroStatus.success
        }
    }),
    on(livroActions.adicionarlivro, (statusActual, livro) => {
        return {
            ...statusActual,
            livros: [...statusActual.livros, livro],
            status: LivroStatus.success
        }
    })
);