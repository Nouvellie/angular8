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

And then: (set watch: true)

```sh
$ tsc
```


## Index
#### 1: [Testing tsc.](https://github.com/Nouvellie/angular8/blob/master/course/02.ts-es6/app.ts)

#### 2: Introduction to var, let, const.

#### 3: Variable types.

#### 4: Template strings.

#### 5: Functions. (normal, default, optional)

#### 6: Fat arrow, or arrow function.

#### 7: Destructuring.

#### 8: Promises.

#### 9: Typescripts interfaces.

#### 10: Classes.

#### 11: Decorators.

#### 12: Exam 1.