# Projeto 4 - React State e Routes

## Desafio

Criar um feed de um perfil do Instagram

## O que devo fazer?

> 1. Pensar em um nome para o projeto. Lembrando que ele vai ser similar ao Instagram
> > ideias: Instagram, gramInsta, Insgramta, Mandafoto, Fotonow

> 2. Readme com: 
> > - Descrição do projeto
> > - Tecnologias usadas: reactJs, Chakra UI
> > - Link do deploy
> > - Desenvolvedores
> ***Sugestão de readme: [MaisVocê Receitas](https://github.com/camiyung/MaisVoce)***

> 3. Header contendo:
> > - Nome do projeto (estilizar no gimp ou no Canva)
> > - Botão para add uma nova postagem no meu perfil
> > > - Ao clicar no botão, um MODAL deve aparecer, contendo as seguintes informações:
> > > > - ????
> > > - Quando clicar em postar, quero ver o meu novo post no meu feed
> > - Quando a postagem for concluída, um TOAST de sucesso deve aparecer

> 4. Carousel na homepage com pelo menos 5 avatares de outros usuários (igual a sessão de stories do Insta)
> > - Quando clicar em um avatar, redirecionar (Router) para a página desse usuário, que deve conter:
> > > - Avatar em tamanho maior (como no insta)
> > > - Nome
> > > - numero de publicações, seguidores e seguindo (igual insta)
> > > - Bio
> > > - 6 publicações (imagens retangulares simples)

> 5. Na pág. inicial, deve ter 3 publicações, nome, foto, ícones de curtir, compartilhar, salvar e campo para comentar com botão para publicar
> > - Ícones brancos
> > - quando clicar no CURTIR, o coração se torna vermelho
> > - Se clicar novamente em curtir, volta a ficar branco
> > - Clicando no campo comentar, posso digitar uma mensagem
> > > - Após escrever a mensagem, posso clicar em PUBLICAR, poderei ver minha mensagem logo abaixo do vampo para escrever comentarios 
> > - Clicando em compartilhar,um MODAL deve aparecer com um campo de input para que eu escreva o nome de um usuario da rede. Clicando em enviar, um TOAST de sucesso deve aparecer
> > - Clicando no icone SALVAR, ele sai de branco para preto. Clicando novamente, ele volta a ficar branco
> > - Footer nao precisa ter redes sociais

### Organização pessoal / Ordem de desenvolvimento

- Listar o número de páginas diferentes
> - Página inicial (com campo de add nova img, carousel e 3 publicações aleatorias) 
> - 5 páginas e usuarios imaginários (páginas com a msm estrutura)

- Modais que vou usar
> - Para postar uma nova img
> - Quando clico em compartilhar um post de outro usuario

- Desenhar no Presentations o fluxo de interações E CONFIRMAR COM A ALÊ 
> - [Esboço do fluxo de interações](https://docs.google.com/presentation/d/1xFZ_omP688UxY2f1HHezlSQBqCVIW3uFKvUn_oc-g4w/edit?usp=sharing)

- Fazer a estrutura mínima sem estilo, com todas as funcionalidades mínimas funcionais
> Ordem de funcionalidades:
> > - [X] Footer
> > - [X] Fazer o modal de compartilhamento
> > - [X] Fazer o campo de comentário aparecer e funcionar (usar accordion @chakra)
> > - [X] Fazer o post customizado aceitar todas as funcionalidades adicionadas nos posts padrões
> > - [X] Fazer com que a página de um usuário apareça ao clicar no seu avatar
> > - [] Estruturar como o router vai funcionar
> > - [] Curtir e salvar sem alterar a img do post e do avatar
> > - [] Fazer Readme

- Fazer estilos com chackra (?)
