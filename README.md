# Maeztra's Test

Você pode acessar o site em [https://higordenomar.github.io/maeztra](https://higordenomar.github.io/maeztra/).

Ou siga os próximos passos para rodar na sua máquina:

```shell
git clone https://github.com/higordenomar/maeztra.git

cd maeztra

npm install

npm run dev
```

Com ajuda na biblioteca gh-pages, consegui automatizar o processo de deploy, com isso basta rodar o comando `npm run deploy`, e assim a biblioteca faz o build do projeto e sobe na branch `gh-pages`, e assim que essa branch é atualizada, o processo de atualização do pages se inicia automaticamente.
