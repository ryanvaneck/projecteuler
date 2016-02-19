'''
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
'''


import math

def is_prime(number):
    if number > 2 and number % 2 == 0:
        return False
    sqrt = int(math.sqrt(number))
    while sqrt > 1:
        if number % sqrt == 0:
            return False
        sqrt -= 1
    return True

result = 0
for i in range(2,2000000):
    if is_prime(i):
        result += i
print result


