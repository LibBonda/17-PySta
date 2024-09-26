### Dictionary
# Dictionaries are used to store data values in key:value pairs
# A dictionary is a collection which is ordered*, changeable and do not allow duplicates.

# Create and print a dictionary:
car_dict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car_dict)

### Dictionary Items
# Dictionary items are ordered, changeable, and do not allow duplicates. 
# Dictionary items are presented in key:value pairs, and can be referred to by using the key name.
# Dictionaries are ordered, it means that the items have a defined order, and that order will not change.
# Unordered means that the items do not have a defined order, you cannot refer to an item by using an inde
# Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
# Dictionaries cannot have two items with the same key: Duplicate values will overwrite existing values:x.

# Print the "brand" value of the dictionary:
car_dict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car_dict["brand"])