def find_peak(list_of_integers):
    # Get the length of the list
    length = len(list_of_integers)

    # Base case: Empty list
    if length == 0:
        return None

    # Base case: Single element
    if length == 1:
        return list_of_integers[0]

    # Recursive case
    mid = length // 2

    # Compare the middle element with its neighbors
    if list_of_integers[mid] >= list_of_integers[mid - 1] and list_of_integers[mid] >= list_of_integers[mid + 1]:
        return list_of_integers[mid]

    # If the middle element is less than its left neighbor, search in the left half
    if list_of_integers[mid] < list_of_integers[mid - 1]:
        return find_peak(list_of_integers[:mid])

    # If the middle element is less than its right neighbor, search in the right half
    if list_of_integers[mid] < list_of_integers[mid + 1]:
        return find_peak(list_of_integers[mid + 1:])
