# Júnior Rêgo Advocacia

Este é o projeto completo para o site institucional do escritório Júnior Rêgo Advocacia (Esperantina - PI). 

## Arquitetura e Decisões Técnicas

- **Framework**: SPA desenvolvido com React (Vite) e `react-router-dom`, com uma arquitetura modular que imita e pode ser facilmente migrada para Next.js App Router no futuro, caso seja necessário SSR.
- **Tipagem**: TypeScript rigoroso para reduzir erros e melhorar a manutenção a longo prazo.
- **Estilização**: Tailwind CSS focado em um design acessível, minimalista e de alto contraste (tipografia serifada clássica "Cormorant Garamond" contrastando com a moderna "Inter" sem serifa).
- **SEO**: Utilização de `react-helmet-async` para metadados por página e base pronta de Sitemap + Robots.
- **Formulário**: Componente limpo de React (sem dependências pesadas extras como Formik), simulando validações exigidas. Inclui estrutura que, ao se integrar em produção, pode chamar uma API Route via ferramentas como o Resend.
- **Componentes**: Estrutura modular (`Container`, `SectionHeading`, `Button`, `WhatsAppButton`), que permite reusabilidade e coesão visual rápida.
- **Conformidade (OAB)**: Os textos de base (disponíveis nos configs) não promovem resultados nem métricas e evitam abordagens que firam as diretrizes de publicidade da OAB.

## Estrutura de Pastas

```text
/src
  /components
    /forms      # Formulários, validações
    /layout     # Componentes-chave de esqueleto (Header, Footer, Layout)
    /seo        # SEO, Helmets, Meta Tags
    /ui         # Micro-componentes reutilizáveis (Botões, Cards, Tipografia)
  /config       # Única fonte da verdade do conteúdo institucional (Dados, Áreas, Time, Config)
  /lib          # Utilitários puros (Classes tailwind, formatações)
  /pages        # Representação das Rotas da Aplicação
  App.tsx       # Configuração de Rotas base (react-router)
```

## Dados Pendentes de Preenchimento (Checklist)

Os dados abaixo são cruciais para o deploy e deverão substituir as strings marcadas como `[PREENCHER DADO REAL]`:

1. Em `/src/config/site.ts`:
   - `whatsappNumber` (formato DDI+DDD+Numero, ex: 5586999999999)
   - `phoneDisplay`
   - `email`
   - `address`
   - `instagram`
   - `googleMapsUrl`
2. Em `/src/config/professionals.ts`:
   - `photo` (URL ou importação da foto real do profissional)
   - `linkedin`
3. Em `/src/config/articles.ts`:
   - `image` (Imagem real dos artigos demonstrativos)
   - Ou simplesmente substitua os artigos de demonstração.
4. Substituição das imagens que funcionam como placeholder (marhadas textualmente com `[PREENCHER DADO REAL]`) nas páginas (`Home.tsx`, `About.tsx`, `Team.tsx`, `ArticleDetail.tsx`).
5. Em `/src/pages/Contact.tsx`:
   - Horário de atendimento ("Horário de Atendimento" - linha 66)
6. Configuração no `.env.example` da credencial `RESEND_API_KEY` quando implantar o formulário.

## Como Executar e Deploy

1. Instale as dependências: `npm install`
2. Rode o ambiente de desenvolvimento: `npm run dev`
3. Para compilar visando produção (SPA): `npm run build`
4. Na plataforma da Vercel: basta importar o repositório, garantindo que o Build Command seja `npm run build` e o Output Directory seja `dist`. O servidor estático da Vercel cuidará das rotas automaticamente graças à compatibilidade do Vite React.
