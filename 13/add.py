from Number import add
# number = Number("73698149486124")
# number2 = Number("239")

# print number.digits
# print number2.digits
# print number.add(number2)
# print number.add(number2) == [7, 3, 6, 9, 8, 1, 4, 9, 4, 8, 6, 3, 6, 3]
#
# #add_two_digits test
# print 'number.add_two_digits(1,1,0) == (2,0) ' + str(number._add_two_digits(1,1,0) == (2,0))
# print 'number._add_two_digits(9,9,0) == (8,1) ' + str(number._add_two_digits(9,9,0) == (8,1))
# print 'number._add_two_digits(1,9,0) == (0,1) ' + str(number._add_two_digits(1,9,0) == (0,1))
# print 'number._add_two_digits(1,1,1) == (3,0) ' + str(number._add_two_digits(1,1,1) == (3,0))
# print 'number._add_two_digits(9,8,1) == (8,1) ' + str(number._add_two_digits(9,8,1) == (8,1))
# print 'number._add_two_digits(9,9,1) == (9,1) ' + str(number._add_two_digits(9,9,1) == (9,1))
# #
# print add('11','11') == '22'
# print add("1234","99") == '1333'
# print add("981","1") == '982'
# print add("999","1") == '1000'
# print add('9999','9999') == '19998'
# print Number('1')._add(Number('99999999999999999999999999999999999999999999999999')) == '100000000000000000000000000000000000000000000000000'


input = file('input_data')

result = '0'

for line in input:
    line = line[:-1]
    result = add(result, line)
print result
print "first 10 digits: " + result[:10]
