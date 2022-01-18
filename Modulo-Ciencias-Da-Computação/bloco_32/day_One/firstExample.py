# // One Example //

# multiply = 2 * 3
# sume = 2 + 3
# division = 3 // 2
# print(multiply, sume, division)
# print(multiply)
# print(sume)
# print(division)

# Second Examples
#  No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o
#  resultado das 7 operações básicas (soma, subtração, multiplicação, divisão
# , divisão inteira, potenciação e módulo) envolvendo essas variáveis.

# a = 10; b = 5
# print(a  b)
# print(a - b)
# print(a * b)
# print(a / b)
# print(a // b)
# # print(a ** b)
# # print(a % b)

# Third Example
# Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em
# 6 horas?
# E quantos segundos? Declare e inicialize variáveis minutes e seconds
# que recebem os respectivos resultados

# hours = 6
# minutes = 60 * hours
# print(minutes, "minutes", "in six hours")
# seconds = minutes * 60
# print(seconds, "seconds", "in six hours" );

# Four Example
#  Teste e verifique o que acontece se você colocar um ponto
# e vírgula no final de uma instrução em Python.
# Erro E703 => statement ends with a semicolon

# Five Example
# Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

# price_Book = 24.2
# descount = (1 - 0.4) * price_Book
# first_transport = 3.00
# aditional_transport = 0.75

# price = 24.2 * 60
# price_With_Descount = price - descount
# print(price_With_Descount)

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
print(cost)
