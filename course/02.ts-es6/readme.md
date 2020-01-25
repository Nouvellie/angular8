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

And then:

```sh
$ tsc
```