# TYPESCRIPT / ES6
## INTRODUCTION
#### Functions:

We created a simple function and called it.

We renamed the file. (to .ts)

And then:

```sh
$ tsc app.ts
```

This will create a js file, and in case it has errors, it will tell us what the error is and where.

To leave it in observer mode to make the changes automatically from ts to js. (only 1 file)

```sh
$ tsc app.ts -w
```

In order for it to make changes to all ts files, we must start our folder as a typescript project. This will create a tsconfig.json file.

```sh
$ tsc -init
```

## Information
#### Javascript weak points:

- Variable types.
- Typing errors.
- Auto complete depending on the variable.
- Static method of programming.
- Classes and modules. (before ES6)

#### Common javascript problems:

- Errors because a variable was not defined.
- Errors because the object does not have the expected property.
- Mistakes because you have no idea how other colleagues' functions work.
- Errors because variables, classes, functions or constants are overwritten.
- Errors because the code collides with another.
- Errors because the browser cache keeps the old javascript files.
- Errors because we put a capital or small letter in the wrong place.
- Errors because we simply don't know how other people's code works.
- Errors because the IDE didn't tell me that I couldn't do it.
