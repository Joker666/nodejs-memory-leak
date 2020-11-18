![logo](https://media.makeameme.org/created/memory-leaks-memory.jpg)

# NodeJS Memory Leak Demo

The repository contains 4 types of NodeJS memory leaks and the solution to each of them. While NodeJS is very popular server side technology and easy to get started with, it needs to be managed with caution as memory leaks can happen very easily. The 4 most common types tackled here are

- Global Resources
- Closures
- Caching
- Promises

## How To Run
You need NodeJS installed in your system to run the application. To be able to test for leaks, there are multiple tools available for load testing. The one we are going to use here is [autocannon](https://github.com/mcollina/autocannon). Also to visualize the leaks, we are going to use one handle tool, [Clinic.js](https://github.com/clinicjs/node-clinic). First install both of these tools globally.

```js
npm i autocannon -g
npm i clinic -g
```

After that run the `up.sh` script with flags to start load testing and capturing heap data at the same time. The possible values for `-m` are `global`, `closures`, `cache`, `promise`

```bash
./run.sh -f index.js -m cache -d 20
```

And after the script runs successfully, a new tab will open up in your default broswer with graph of the leaks accumulating over time.

![leak](https://i.imgur.com/xrddeZ3.png)

To run the solution, just change the script name.

```bash
./run.sh -f solution.js -m cache -d 20
```

And this time you'd see that the resources are being garbage collected.

![leak](https://i.imgur.com/TyBvKmk.png)

Change the method name and try with other types of leaks.

## Contribution
Want to contribute? Great!

To fix a bug or enhance an existing code, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

## [License](https://github.com/Joker666/nodejs-memory-leak/blob/master/LICENSE.md)

MIT © [MD Ahad Hasan](https://github.com/joker666)