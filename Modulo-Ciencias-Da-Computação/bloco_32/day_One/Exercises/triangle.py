def triangle(side_a, side_b, side_c):
    is_triangle = (
        side_a + side_b > side_c
        and side_b + side_c > side_a
        and side_a + side_c > side_b
    )
    if not is_triangle:
        return "Não é um triangulo válido"

    elif side_a == side_b == side_c:
        return "Triangulo Equilátero"

    elif side_a == side_b or side_b == side_c or side_a == side_c:
        return "Triangulo Isósceles"

    else:
        return "Triangulo Escaleno"


print(triangle(1, 1, 11))
