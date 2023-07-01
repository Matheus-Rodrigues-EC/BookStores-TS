# BookStore-TS

![Typescript_logo_2020.svg.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fae30a0-804e-4ba2-9249-046b5f952d5f/Typescript_logo_2020.svg.png)

Este projeto é uma simples API que lista e sorteia livros

## Pré-Requisitos

Para utilizar essa API localmente você precisa possuir o PostgreSQL e o NodeJs em sua máquina, após isso, apenas faça a instalação e preencha a base de dados

## Instalação

- Faça o download do repositório
- Execute o comando abaixo para instalar as dependências
    
    ```jsx
    npm install
    ```
    
- Para rodar a API localmente, utilize o comando
    
    ```jsx
    npm run dev
    ```
    
- Agora a API está rodando localmente na porta 5000

## Uso

- Acesse o link:
- Rotas
    - `/health`
        - Essa rota faz a verificação da sua API e retorna a mensagem `I'm Alive` caso o servidor esteja funcionando corretamente.
    - `/book/create`
        - Essa rota adicionar um novo livro no banco de dados, antes de fazer o envio o código irá verificar se todos os campos foram preenchidos corretamente.
        
        - Os campos necessários são:
        
        title → Campo referente ao título do livro, 
        
        author → Campo referente ao autor do livro, 
        
        genre → Campo referente ao gênero do livro, 
        
        year_publication → Campo referente ao ano de publicação do livro, 
        
        pages → Campo referente a quantidade de páginas no livro, 
        
        price → Campo referente ao preço do livro
        
        - Todos os campos são obrigatórios, sendo necessário seu preenchimento.
    - `/book/raffle`
        - Essa rota faz a busca de um dos livros cadastrados no banco de dados de forma aleatória.
    - `/books`
        - Essa rota faz a busca de todos os livros cadastrados no banco de dados.
    - `/book/update/:id`
        - Essa rota é responsável pela atualização de um livro presente no banco de dados
        - O livro será pesquisado de acordo com o ID fornecido no parâmetro da requisição.
        - O livro será totalmente atualizado com os dados presentes no corpo da requisição, tenha cuidado para não perder informações sobre seu livro.
    - `/book/delete/:id`
        - Essa rota ira realizar a deleção de um livro cadastrado no banco de dados.
        - A deleção será realizada a partir do ID fornecido no parâmetro da requisição.