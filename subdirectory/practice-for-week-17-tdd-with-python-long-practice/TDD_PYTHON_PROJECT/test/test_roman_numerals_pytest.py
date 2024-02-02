# test_roman_numerals_pytest.py
import pytest
from roman_numerals import parse

@pytest.mark.parametrize("numeral, expected", [("IX", 9), ("X", 10)])
def test_roman_numeral_parser(numeral, expected):
    assert parse(numeral) == expected
