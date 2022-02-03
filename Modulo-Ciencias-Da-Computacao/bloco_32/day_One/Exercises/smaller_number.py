list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def minimum(numbers):
#     smaller = list[0]
#     for number in numbers:
#         if number < smaller:
#             smaller = number
#     return smaller
    return min(numbers)


print(minimum(list))