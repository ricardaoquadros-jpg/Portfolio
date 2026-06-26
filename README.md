# 🌐 Portfolio — Ricardo Quadros

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **Site:** [ricardoquadros.pro](https://ricardoquadros.pro)  
> **Stack:** Next.js 15 · React 18 · TypeScript · Tailwind CSS · shadcn/ui  
> **Deploy:** Vercel (auto-deploy via GitHub)

---

## Sobre

Portfólio pessoal bilíngue (PT-BR/EN) desenvolvido para apresentar minha trajetória profissional, projetos e habilidades técnicas. Conta com tema dark/light, animações suaves e design responsivo.

Atualmente sou **Tests & Qualification Analyst @ TK Elevator** e curso **Ciência da Computação @ ULBRA**.

---

## Funcionalidades

- **Hero** com identidade profissional e CTAs
- **Sobre Mim** com resumo da trajetória e stack
- **Formação Acadêmica** com timeline
- **Experiência Profissional** com detalhes das empresas
- **Competências Técnicas** organizadas por categoria com ícones
- **Projetos** com links para repositórios
- **Certificações** com links para credenciais
- **Contato** com email, telefone, redes sociais e link para currículo
- **Tema dark/light** com toggle
- **Internacionalização PT-BR / EN** via context

---

## Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| Framework | Next.js 15 (App Router) |
| UI | React 18, Tailwind CSS, shadcn/ui, Radix UI |
| Linguagem | TypeScript |
| Ícones | Lucide React, Devicon |
| Deploy | Vercel (integração GitHub) |
| Controle de versão | Git / GitHub |

---

## Estrutura

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── projects/
│   │   └── page.tsx          # Página de projetos
│   └── layout.tsx            # Layout global
├── components/
│   ├── landing/              # Componentes da home
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── education.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── certifications.tsx
│   │   ├── languages-and-qualities.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── shared/               # Componentes reutilizáveis
│   ├── ui/                   # shadcn/ui components
│   └── icons.tsx
├── context/
│   └── language-context.tsx  # Contexto de internacionalização
├── lib/
│   ├── translations.ts       # Traduções PT-BR / EN
│   └── placeholder-images.ts
└── hooks/
```

---

## Rodar localmente

```bash
git clone https://github.com/ricardaoquadros-jpg/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Deploy

O deploy é automático via **Vercel** — cada push na branch `main` dispara um novo build.

---

## Autor

**Ricardo Quadros**  
Tests & Qualification Analyst @ TK Elevator  
Ciência da Computação @ ULBRA  
Guaíba, RS — Brasil

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ricardopquadros)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ricardaoquadros-jpg)
[![Site](https://img.shields.io/badge/Site-ricardoquadros.pro-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ricardoquadros.pro)