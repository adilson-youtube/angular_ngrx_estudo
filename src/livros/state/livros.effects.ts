import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { livroActions } from "./livro.actions";
import { map, switchMap } from "rxjs";

export const buscarLivroEffect = createEffect(
    (actions$ = inject(Actions), livroService = inject(LivroService)) => {
        return actions$
            .pipe(
                ofType(livroActions.carregarLivros),
                switchMap(() => livroService.obterLivroApi()
                    .pipe(
                        map(livros => livroActions.livrosCarregadosSucesso({ livros }))
                    )
                )
            )
    }, { functional: true }
    
)