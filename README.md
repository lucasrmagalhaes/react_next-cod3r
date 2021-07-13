## Projeto Template Admin - Autenticação e Integração com o Firebase

### Criando o Projeto:
<pre>npx create-next-app admin-template</pre>
<pre>yarn add --dev typescript @types/react</pre>
<pre>yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest</pre>
<pre>npx tailwindcss init -p</pre>

### Configuração do Firebase:
<pre>yarn add firebase</pre>
- Criar o arquivo: .env.local e adicionar: <br />
NEXT_PUBLIC_FIREBASE_API_KEY <br />
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN <br />
NEXT_PUBLIC_FIREBASE_PROJECT_ID

### Criando Sessão com Cookie:
<pre>yarn add js-cookie</pre>
