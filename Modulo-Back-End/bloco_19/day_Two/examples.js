        /* Rode cada um deles em uma janela de query para verificar os resultados:  */
/*
SELECT 'Olá, bem vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS 'idade';
SELECT 2021 AS 'Ano';
SELECT 'Carlos', 'Henrique', 34, 'Desenvolvedor Web'; 
SELECT 'Carlos' AS 'Nome', 'Henrique' AS 'Sobrenome', 34 AS 'Idade', 'Desenvolvedor Web' AS 'Área de atuação';
*/

/* Monte uma query que exiba seu nome na tela;
  SELECT 'Carlos Henrique Scalambrine de Souza';
*/          

/* Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
  SELECT 'Carlos', 'Henrique', 'São Paulo', 34;
*/

/* Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
  SELECT 'Carlos' AS 'Nome', 'Henrique' AS 'Sobrenome', 'São Paulo' AS 'Cidade Natal', 34 AS 'Idade';
*/

/* Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT
  SELECT 13 * 8;
*/

/* Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual"
  SELECT now() AS 'Data Atual';
*/

/* Escreva uma query que selecione todas as colunas da tabela city ;
  USE sakila;
  SELECT * FROM city;
*/

/* Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
  USE sakila;        
  SELECT first_name, last_name FROM customer;
*/

/* Escreva uma query que exiba todas as colunas da tabela rental ;
  USE sakila;      
  SELECT * FROM rental;
*/

/* Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
  USE sakila;
  SELECT title, description, release_year FROM film;
*/

/* Utilize o SELECT para explorar todas as tabelas do banco de dados.
  USE sakila;
  SELECT * FROM sakila.table
*/          