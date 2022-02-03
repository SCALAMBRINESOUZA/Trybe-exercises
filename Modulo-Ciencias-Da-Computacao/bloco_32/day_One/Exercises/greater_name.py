list_name = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_biggest_name(list):
    print(max(list, key=len))
    # biggest_name = list[0]
    # for li in list:
    #     if len(li) > len(biggest_name):
    #         biggest_name = li
    # return biggest_name


find_biggest_name(list_name)
