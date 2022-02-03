# import random


# random_number = random.randint(1, 10)
# guess = ""


# while guess != random_number:
#     guess = input("Qual o seu palpite? ")


# print("O numero sorteado era: ", guess)


# Exercício 1: Faça um programa que solicite o
# nome de uma pessoa usuária e imprima-o na vertical.

# your_name = input("type your name: ")
# for name in your_name:
#     print(name)


# Exercício 2: Escreva um programa que receba vários
# números naturais e calcule a soma desses valores.
# Caso algum valor da entrada seja inválido, por exemplo uma letra,
# uma mensagem deve ser exibida, na saída de erros, no seguinte formato:
# "Erro ao somar valores, {valor} é um valor inválido".
# Ao final, você deve imprimir a soma dos valores válidos.

# from curses.ascii import isdigit


# numbers = input("Type numbers naturals break apert with space: ")

# format_numbers = numbers.split(" ")

# sum = 0

# for num in format_numbers:

#     if not num.isdigit():
#         print(f"Error to sum values, {num} is not number")
#     else:
#         sum += int(num)

# print(f"The sum of values is: {sum}")


# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

# try:
#     arquivo = open("arquivo.txt", "r")
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas
# , escreva um programa que lê todas essas informações 
# e filtre mantendo somente as pessoas que estão reprovadas, 
# e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.


# students = open("notes of students.txt", mode="w")

# students.write("Marcos 10\n")
# students.write("Felipe 4\n")
# students.write("José 6\n")
# students.write("Ana 10\n")
# students.write("Maria 9\n")
# students.write("Miguel 5\n")

# students.close()

# recuStudents = []
# with open("notes of students.txt") as gradesFile:
#     for line in gradesFile:
#         student_grade = line
#         student_grade = student_grade.split(" ")
#         print(student_grade[0])
#         if int(student_grade[1]) < 6:
#             recuStudents.append(student_grade[0] + "\n")


# with open("recuStudents.txt", mode="w") as recuStudentsFile:
#     print(recuStudents)
#     recuStudentsFile.writelines(recuStudents)


# import json  # json é um modulo que vem embutido, porém precisamos importá-lo


# with open("pokemons.json") as file:
#     content = file.read()  # leitura do arquivo
#     pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
#     # acessamos a chave results que é onde contém nossa lista de pokemons

# print(pokemons[0])  # imprime o primeiro pokemon da lista


import csv

# with open("balneabilidade.csv") as file:
#     beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
#     header, *data = beach_status_reader

# print(data)

# a, b = "cd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, *tail = [1,2,3] # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]

import csv

with open("arquivo.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
