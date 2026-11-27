# WL Digital

Site estático da WL Digital, publicado no GitHub Pages em:
https://nakshimov.github.io/Wl-Digital/

## Desenvolvimento

```sh
bun install --frozen-lockfile
bun run dev
```

## Validação

```sh
bun run lint
bun x tsc --noEmit
bun run build
```

O build gera `dist/client` com prerender da home. O projeto usa `nitro: false`
e `base: "/Wl-Digital/"` para funcionar como site de projeto no GitHub Pages.

## Publicação

O deploy é manual pela branch `gh-pages`:

1. fazer commit e push normal na `main`;
2. copiar o conteúdo de `dist/client` para o worktree da `gh-pages`;
3. fazer commit e push normal na `gh-pages`.

O arquivo `public/.nojekyll` precisa estar no build.
