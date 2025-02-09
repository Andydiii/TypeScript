### lesson 1: Set Up
1. make sure installed typescript
`sudo npm i -g typescript`, check if ts is installed: `tsc -v`
2. tsc to run the typescript file, for exmaple, `tsc index.ts`, will return a js file.
3. configuration: `tsc --init`, then change some configuration
4. `run it with debugger` choose node.js


### lesson 2: data type
- `let age: number = 20;` or `let age = 20;` is the same, we dont have to state the type if it is initialized to a value.
- AVOID: `let age;` the age is `any` type in ts if we dont assign a value to it.
  - we can set anything to it later on. e.g. `age = 1`, `age = 2`, but this against reason we use typescript, use it for type checking if doing so. avoid using any type
- function parameter type need to be declared
    ```ts
    function doSomething(document: any) {
        ...
    }
    ```

### lesson3: array
- DONT DO : `let numbers = [1, 2, '3'];` this is valid in javascript & ts, but in case we have to pass it into a function requires a array of numbers, then we need to make sure the array passed into function is array of numbers.
  - correct way: `let numbers: number[] = [1, 2, 3]` or `let numbers = [1, 2, 3]` (we could do this as same reason in lesson 2).
  - AVOID: `let numbers = []`, 'numbers' has type of any[].
    - if we wanna use empty array, then add type to it. i.e.`let numbers: number[] = [];`
  - if we know the type of the array, when we 
  do "for each" method:
    ```ts
    let numbers: number[] = [];
    numbers.forEach(n => n.someMethodOfNumber) // will give us all methods of number object
    ```


## Tuple
- Tuple is a fixed length array where each element has a purticular type 
- `let user: [number, string] = [1, 'Mosh'];`
- usaully tuple is useful when there are only 2 values, key-value pair
- confusing to use `let user: [number, string, boolean, number] = [1, 'Mosh', true, 0];`

## enum
- Used for some related constants
  ```ts
  const enum Size { Small = 1, Medium, Large};
  let mySize: Size = Size.Medium;
  console.log(mySize) // output 2 
  ```

## Functions
- typeScript will know the return type based on the return value even if we dont state it 
- a good practice is always to annotate the return type when define the function
  ```ts
  function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
      return income * 1.3
    }
  }
  ```
- ts function by default return undefined
- taxYear is optional parameter, if it is given, use it, if not, use 2022
  ```typescript
  function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022 ) {
      return income * 1.3
    }
  }

  calculateTax(10_000);
  ```
- default value version: if taxYear is given, use it, if not, use default value
  ```typescript
  function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
      return income * 1.3
    }
  }

  calculateTax(10_000);
  ```