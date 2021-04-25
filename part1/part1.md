## Part 1a: A Quick Introduction...

1. values added: 20

2. final result: 20

3. values added: 20

4. Error, result is not defined in the scope.

5. Error, can't assign a value to a constant expression.

6. Error, can't assign a value to a constant expression.

## Part 1b: A Little More of a Challenge

1. The current value of `i` will be printed, which in this case is `3`. This is because in the for loop, `i` is defined as a `var`, so it is persistent in the entire function.

2. Since `discountedPrice` is defined as a `var`, its value is in the scope of the entire function, so its current value will be printed, which in this case is `150`. `discountedPrice` is `150` because the way the function is written, `discountedPrice` is just the `(last value in prices) * (1 - discount)` .

3. `finalPrice` is defined as a `var`, so its scope is in the entire function. Following the equation that defines it, `finalPrice` is just `150`, which is what is printed.

4. This function will return the `discounted` array, which will be `[50, 100, 150]`.

5. Error, `i` is not defined in this scope since we used `let` instead of `var`.

6. Error, `discountedPrice` is not defined in this scope since we used `let` instead of `var`.

7. The current value of `finalPrice` will be printed, which is `150` in this case. `finalPrice` is defined in this scope even though it is defined with `let`.

8. `discounted` was defined in this scope, so even though it was defined using `let` instead of `var`, it is in the scope. In this case, `discounted` is returned, which in this case would be the array `[50, 100, 150]`.

9. Error, `i` is not defined in this scope since we used `let` instead of `var`. Reassigning `discountedPrice` doesn't cause an error even though it's a `const` because everytime the for loop resets, we redfine `discountedPrice` since we are resetting the scope. 

10. The value of `length` will be printed out, which in this case is `3`. We do not get an error of reassigning `const discountedPrice` because of the reason above.

11. In this case, `discounted` is returned, which in this case would be the array `[50, 100, 150]`. We do not get an error for adding to a `const` array, but we will for changing existing values.

12. 
    a. `student.name` 

    b. `student['Grad Year']`

    c. `student.greeting()`

    d. `student.['Favorite Teacher'].name`

    e. `student.courseLoad[0]`

13. 
    a. `'3' + 2 = '32` because integers map to string equivalents.

    b. `'3' - 2 = 1` because strings map to integer equivalents.

    c. `3 + null = 3` because `null` maps to `0` for integers.

    d. `'3' + null = 3null` because `null` maps to `'null'` for strings.

    e. `true + 3 = 4` because `true` maps to the integer `1`.

    f. `false + null = 0` because `false` and `null` both map to `0` for numeric conversions.

    g. `'3' + undefined = '3undefined'` because `undefined` maps to `'undefined'`

    h. `'3' - undefined = NaN` because `undefined` maps to `NaN` for numeric conversions

14. 
    a. `'2' > 1 = true` because `'2'` maps to `2` which is greater than `1`.

    b. `'2' < '12' = false` because we are doing string comparison, so we start with comparing `'2' < '1'`, which is false since `'2'` maps to `2` and `'1'` maps to `1`.
    
    c. `2 == '2' = true` because `'2'` maps to `2`, which is equal to `2`.

    d. `2 === '2' = false` because `===` checks to strict equality, including type, and since `2` is an integer and `'2'` is a string, `===` immediatly returns false.

    e. `true == 2 = false` because `true` maps to `1` which is not equal to `2`.

    f. `true === Boolean(2) = true` because both values are booleans, and `Boolean(2)` maps to `true`, so both sides are equal and of the same type.

15. `==` checks for equality between two values while also performing type conversions. However, `===` checks for strict equality, and will not preform type conversions. Therfore, if both values are not of the same type, then `===` will immediately return false.

16. [Code](./part1b-question16.js)