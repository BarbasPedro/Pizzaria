# 🍕 Pizzaria - Frontend

Frontend da aplicação de gerenciamento de uma pizzaria, desenvolvido com **React** e integrado ao [backend](https://github.com/BarbasPedro/Pizzaria-backend).

## ✨ Funcionalidades
- Listagem de produtos
- Cadastro de novos produtos
- Edição de produtos
- Exclusão de produtos
- Interface responsiva

---

## 🚀 Pré-requisitos

- Node.js 16+
- NPM 8+ ou Yarn 1.22+
- Conexão com o [backend da aplicação](https://github.com/BarbasPedro/Pizzaria-backend)

---

## ⚙️ Configuração Local

### 1. Clone o repositório
```bash
git clone https://github.com/BarbasPedro/Pizzaria-frontend.git
cd Pizzaria-frontend
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure a API
Crie um arquivo `.env` na raiz do projeto com a URL do backend:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
Acesse: [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts Disponíveis

| Comando            | Descrição                           |
|--------------------|-----------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera a versão de produção         |
| `npm run lint`    | Verifica erros de código          |
| `npm run preview` | Pré-visualiza a build de produção |

---

## 🛠 Estrutura do Projeto
```
src/
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API
├── styles/           # Estilos globais e temas
├── App.tsx           # Componente principal
└── main.tsx          # Ponto de entrada
```

---

## 🎨 Layout das Telas

| Tela         | Descrição                |
|-------------|--------------------------|
| `/`         | Listagem de produtos      |
| `/cadastro` | Formulário de cadastro   |
| `/editar/:id` | Edição de produtos      |
| `/gerenciamento` | Painel administrativo |

---

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade:
```bash
git checkout -b feat/nova-feature
```
3. Commit suas alterações:
```bash
git commit -m "Adiciona nova funcionalidade"
```
4. Envie para o repositório:
```bash
git push origin feat/nova-feature
```
5. Abra um Pull Request.

---

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📧 Contato
Pedro Barbas  
GitHub: [@BarbasPedro](https://github.com/BarbasPedro)  

Feito com React!

