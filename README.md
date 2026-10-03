# Do Caos ao Commit

Apresentação de Git e GitHub recriada com Next.js, React e Tailwind CSS.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Use as setas esquerda/direita ou a barra de
espaço para navegar pelos slides.

## Organização

- `app/page.tsx`: navegação, contador e exibição do slide atual.
- `app/slides/`: um componente por página da apresentação; os nomes dos
  arquivos correspondem aos títulos dos slides.
- `app/slides/index.ts`: ordem e títulos usados pela navegação.
- `app/globals.css`: estilos compartilhados e tema Tailwind.
- `public/Imagens/`: imagens servidas pelo Next.js.

Para alterar o conteúdo de um slide, edite o componente correspondente em
`app/slides/`. Para adicionar, remover ou reordenar páginas, atualize a lista
em `app/slides/index.ts`.
