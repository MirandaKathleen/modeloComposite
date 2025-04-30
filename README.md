# Apresentação do designer Pattern Composite
   Nesta estrutura, é um padrão de projeto que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais.

* Ela estabelece uma interface compartilhada para objetos individuais e grupos de objetos. 

* Permite a realização de interações recursivas, possibilitando operações a todos os objetos na hierarquia. 

A estrutura: 

* Componet: Interface comum para todos os objetos, tanto folhas como composites.

* Leaf: REpresenta objetos individuas que não tem filhos.

* Composite: Representa grupos de objetos que podem conter outros objetos, permitindo operações recursivas. 


* Explicação do códigos da estrutura em que usamos.




Estrutura:
Produto (Componente): Classe base com métodos getNome e getPreco, usados por todos os tipos de produtos.

ProdutoIndividual (Folha): Representa um produto único (ex: lata de refrigerante), com nome e preço.

Fardo (Composição): Agrupa múltiplos produtos (individuais ou outros fardos), permitindo adicionar/remover produtos e calcular o preço total somando os preços internos.

Vantagens do Padrão Composite:
Tratamento uniforme: Produtos e composições são manipulados da mesma forma.

Estrutura hierárquica: Possibilidade de aninhar composições dentro de outras.

Facilidade de manutenção: Lógica centralizada para exibição e cálculo.

Exemplo:
Ao executar o programa, o nome e o preço total do fardo são exibidos, mostrando como múltiplos produtos são tratados como um único item composto.

Conclusão:
O padrão Composite facilita o trabalho com estruturas de objetos complexas, oferecendo simplicidade, flexibilidade e reutilização de código ao tratar itens simples e compostos de forma uniforme.