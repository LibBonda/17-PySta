### Problem 001:
# Example List: numbers = [34, 1, 23, 4, 3]
#Task: Sort the list in ascending order using the sort() function.
# Expected Output: A sorted list in ascending order, e.g., [1, 3, 4, 23, 34].

numbers = [34, 1, 23, 4, 3]
numbers.sort()

print(numbers)

### Problem 2:
# Example List: fruits = ['apple', 'banana', 'cherry', 'date']
# Task: Sort the list in descending order using the sorted() function.
# Expected Output: A list sorted in descending order, e.g., ['date', 'cherry', 'banana', 'apple'].

fruits = ['apple', 'banana', 'cherry', 'date']

fruits = sorted(fruits, reverse = True)

print(fruits)

## Problem 3:
# Example List: numbers = [42, 19, 73, 11, 65]
# Task: Find the maximum and minimum values using the max() and min() functions.
# Expected Output: The maximum value, e.g., 73, and the minimum value, e.g., 11.

numbers = [42, 19, 73, 11, 65]
maxNum = max(numbers)
minNum = min(numbers)

print(f'maximum number is {maxNum}', f'minimum number is {minNum}')

### Problem 4:
#Example List: names = ['Alice', 'Bob', 'Charlie', 'Diana']
#Task: Reverse the order of the list using the reverse() function.
#Expected Output: A list with the order reversed, e.g., ['Diana', 'Charlie', 'Bob', 'Alice'].

names = ['Alice', 'Bob', 'Charlie', 'Diana']
names.reverse()

print(names)

###Problem 5:
# Example Lists: list1 = [1, 2, 3], list2 = [4, 5, 6]
# Task: Merge the two lists into one using the extend() function.
# Expected Output: A combined list, e.g., [1, 2, 3, 4, 5, 6].

list1 = [1, 2, 3]
list2 = [4, 5, 6]
combinedList = list1 + list2

print(combinedList)

#### Problem 6:
# Example List: numbers = [5, 3, 8, 3, 5, 2]
# Task: Remove the duplicates and sort the list.
# Expected Output: A sorted list without duplicates, e.g., [2, 3, 5, 8].

numbers = [5, 3, 8, 3, 5, 2]
newNums = set(numbers)
sortedNums = list(sorted(newNums))

print(sortedNums)