# aqa-advanced

A learning repository covering JavaScript fundamentals and automated testing through practical homework assignments.

## Homework Topics

| Directory                       | Topic                                      |
| ------------------------------- | ------------------------------------------ |
| `jsBasicsHomeWork`              | Primitive data types                       |
| `conditionsLoopsHomeWork`       | Conditions and loops                       |
| `functionsHomeWork`             | Functions (declaration, expression, arrow) |
| `advancedFunctionUsageHomework` | Callbacks and higher-order functions       |
| `arraysHomework`                | Arrays and array methods                   |
| `objectsHomeWork`               | Objects and property manipulation          |
| `classesHomeWork`               | OOP: classes, inheritance, getters/setters |
| `promisesHomeWork`              | Promise, Promise.all, Promise.race, fetch  |
| `apiJsonPlaceholderHomeWork`    | API testing with Jest + Axios              |
| `nodeBasics`                    | Node.js basics                             |

## Tests

Automated tests are located in `apiJsonPlaceholderHomeWork/task1.test.js` and cover the [JSONPlaceholder](https://jsonplaceholder.typicode.com) REST API:

- GET /posts — retrieve all posts
- GET /posts/1 — retrieve a single post with field validation
- GET /users — retrieve all users
- POST /posts — create a post
- POST /comments — create a comment
- PUT /posts/1 — full resource update
- PATCH /posts/1 — partial resource update
- DELETE /posts/1 — delete a resource

## Tech Stack

- **Jest** — test framework
- **Axios** — HTTP client for API requests
- **Allure** — test reporting
- **ESLint + Prettier** — linting and code formatting
- **Husky + lint-staged** — git hooks

## Scripts

```bash
npm install

npm test              # Run tests
npm run test:allure   # Run tests with Allure report
npm run lint          # Lint code
npm run format        # Format code
```
