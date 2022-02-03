# # Exercício 13: O Fatorial de um número inteiro
# # é representado pela multiplicação de todos
# # os números predecessores maiores que 0.
# # Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# # Escreva um código que calcule o fatorial de um número inteiro.

# # number = 5
# # factorial = ""
# # if number < 0:
# #     print("Factorial of negative number does not exist")

# # elif number == 0:
# #     print(1)

# # else:
# #     factorial = 1
# #     while number > 1:
# #         factorial *= number
# #         number -= 1
# #     print(factorial)

# # from math import factorial

# # print("Factorial of", number, "is", factorial(5))


# # Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# # Após algumas mudanças estes valores precisam
# # ser ajustados para avaliações de 0 a 100.
# # Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# # Escreva um código capaz de gerar as avaliações após a mudança.
# # Neste caso o resultado deveria ser [60, 80, 50, 90, 100]

# # rattings = [6, 8, 5, 9, 10]
# # new_rattings = []

# # for rating in rattings:
# #     new_rattings.append(rating * 10)
# # print(new_rattings)

# # Exercício 15: Percorra a lista do exercício 14 e imprima
# # "Múltiplo de 3" se o elemento for divisível por 3.

# # for rating in rattings:
# #     if (rating % 3) == 0:
# #         print(rating)

# PI = 3.14  # PI é uma "constante" em nosso módulo


# def square(side):
#     '''Calculate area of square.'''
#     return side * side


# def rectangle(length, width):
#     '''Calculate area of rectangle.'''
#     return length * width


# def circle(radius):
#     '''Calculate area of circle.'''
#     return PI * radius * radius

# print("Área do quadrado:", square(10))
# print("Área do retângulo:", rectangle(2, 2))
# print("Área do círculo:", circle(3))    