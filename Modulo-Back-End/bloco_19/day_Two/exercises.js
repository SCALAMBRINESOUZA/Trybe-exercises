/* Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
    SELECT ('This is SQL Exercise, Practice and Solution');
*/  

/* Escreva uma query para exibir três números em três colunas.
    SELECT 10 AS 'Primeiro Numero', 20 AS 'Segundo Numero', 30 AS 'Terceiro Numero';
*/

/* Escreva uma query para exibir a soma dos números 10 e 15.
    SELECT(10 + 15) AS 'Valor Somado';
*/

/* Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
    SELECT(2 * 17) AS 'Valor Multiplicado'
*/

/* Escreva uma query para exibir todas as informações de todos os cientistas.
    SELECT * FROM Scientists.Scientists;
*/

/* Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
    SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
*/

/* Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
    SELECT Name FROM Scientists.Scientists
    ORDER BY Name ASC;
*/

/* Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
    SELECT Name FROM Scientists.Projects
    ORDER BY Name DESC;

/* Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
    SELECT CONCAT('O projeto'," ", Name, " " 'precisou de' " ", Hours, " " 'horas para ser concluído') AS Resultado FROM Scientists.Projects;
*/

/* Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
    SELECT Name , Hours From Scientists.Projects
    ORDER BY HOURS DESC LIMIT 3;
*/

/* Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
    SELECT DISTINCT Project FROM Scientists.AssignedTo;
*/

/* Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
    SELECT Name FROM Scientists.Projects
    ORDER BY Hours DESC LIMIT 1;
*/

/* Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
    SELECT Name FROM Scientists.Projects
    ORDER BY Hours ASC LIMIT 1 OFFSET 1;
*/

/* Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
    SELECT * FROM Scientists.Projects
    ORDER BY Hours ASC LIMIT 5;
*/

/* Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
    SELECT CONCAT('Existem', " ", COUNT(Name),  " ",  'cientistas na tabela Scientists')
    AS resultado FROM Scientists.Scientists;
*/

                                // Exercises Bonus

   /* 
    Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
    USE PiecesProviders;
    SELECT P.Name, PP.Price FROM Pieces AS P
    JOIN Provides AS PP ON P.Code = PP.Piece
    WHERE PP.Provider = 'RBT';
*/

/* Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
    SELECT * FROM Provides
    ORDER BY Price DESC LIMIT 5;
*/

/* Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
    SELECT DISTINCT Provider, PP.Price FROM Providers AS P
    JOIN Provides AS PP ON P.Code = PP.Provider
    ORDER BY PP.Price DESC LIMIT 4 OFFSET 2;
*/

/* Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
    SELECT * FROM Provides
    WHERE Provider = 'HAL'
    ORDER BY Price DESC;
*/

/* Escreva uma query para exibir por quantas empresas a peça 1 é provida.
    SELECT COUNT(Piece) AS resultado FROM Provides
    WHERE Piece = 1;
*/




















