# Exercício 13: O Fatorial de um número inteiro
# é representado pela multiplicação de todos
# os números predecessores maiores que 0.
# Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# Escreva um código que calcule o fatorial de um número inteiro.

number = 5
factorial = ""
# if number < 0:
#     print("Factorial of negative number does not exist")

# elif number == 0:
#     print(1)

# else:
#     factorial = 1
#     while number > 1:
#         factorial *= number
#         number -= 1
#     print(factorial)

from math import factorial

print("Factorial of", number, "is", factorial(5))
