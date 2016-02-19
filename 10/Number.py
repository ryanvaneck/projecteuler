def add(number1, number2):
    (number1, number2) = normalize(number1, number2)
    last_digit = len(number1) - 1
    string_result = ''
    carry = 0
    for i in range(last_digit, -1, -1):
        (total, carry) = add_two_digits(int(number1[i]), int(number2[i]), carry)
        string_result = str(total) + string_result
    if carry == 1:
        string_result = '1' + string_result
    return string_result

def add_two_digits(first, second, carry):
    total = first + second + carry
    carry = 0
    while total >= 10:
        total -= 10
        carry += 1
    return total, carry

def normalize(string_value1, string_value2):
    while len(string_value1) < len(string_value2):
        string_value1 = '0' + string_value1
    while len(string_value2) < len(string_value1):
        string_value2 = '0' + string_value2
    return string_value1, string_value2
