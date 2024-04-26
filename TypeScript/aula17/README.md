# Configuraçãodo TypeScript

1. Inicializar um projeto Node.js: <code>npm init</code> ou <code>npm init -y</code>
2. Instalar o TypeScript
   2.1. Instalação global <code>npm install -g typescript</code>
   2.2. Instalação local (dentro do projeto, que é o mais recomendado): <code>npm install typescript -D</code>
3. Utilizar o TypeScript instalado para transpilar (compilar) o nosso código (converter nosso código TS para JS)
   3.1. <code>npx tsc arquivo.ts</code>
   3.2. <code>npx tsc arquivo.ts --watch</code> (modo de escuta, pra não precisar compilar o tempo todo)
4. Criando arquivo de configuração do TypeScript (tsconfig.json): <code>npx tsc --init</code>. Após criar esse arquivo, posso executar <code>npx tsc</code> sem precisar passar o nome do arquivo.ts
   4.1. "target" define a versão do JS
   4.2. "strict" habilita a análise de tipagem
   4.3. "noEmitOnError" não cria o arquivo.js se existir algum erro no arquivo.ts durante a compilação
   4.4. "outDir" define a pasta que será gerado o arquivo.js Ex: "outDir": "./dist"
