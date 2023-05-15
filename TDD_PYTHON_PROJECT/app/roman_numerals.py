# app/roman_numerals.py
# def parse(roman_numeral):
#     if roman_numeral == "I":
#         return 1
#     elif roman_numeral == "II":
#         return 2
#     elif roman_numeral == "III":
#         return 3
#     elif roman_numeral == "IIII":
#         return 4
#     elif roman_numeral == "V":
#         return 5
#     elif roman_numeral == "VI":
#         return 6
#     elif roman_numeral == "VII":
#         return 7
#     elif roman_numeral == "VIII":
#         return 8
#     else:
#         # handle other cases if necessary
#         pass

# def parse(roman_numeral):
#     roman_dict = {'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, "I":1, "V":5, "X":10}
#     # return roman_dict[roman_numeral]
#     result = 0
#     for i in range(len(roman_numeral)):
#         if i > 0 and roman_dict[roman_numeral[i]] > roman_dict[roman_numeral[i-1]]:
#             result += roman_dict[roman_numeral[i]] - 2*roman_dict[roman_numeral[i-1]]
#         else:
#             result += roman_dict[roman_numeral[i]]
#     return result

def parse(roman_numeral):
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    result = 0
    prev_value = 0

    for c in reversed(roman_numeral):
        curr_value = values[c]
        if curr_value < prev_value:
            result -= curr_value
        else:
            result += curr_value
        prev_value = curr_value

    return result

