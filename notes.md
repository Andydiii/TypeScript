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
  - `let user: [number, string] = [1, 'Mosh', 0];`
  -   