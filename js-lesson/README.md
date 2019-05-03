# tddlesson-js

## Test framework:

We are running our tests using [Jest](https://jestjs.io/docs/en/getting-started), the same test framework we use to test JavaScript in our Bonfire repository.

## Installation steps

1. Install [Docker for mac](https://docs.docker.com/docker-for-mac/install/)
1. CD into this directory: `cd js-lesson`
1. Install node dependencies: `./run-install`
1. Run the all .spec.js tests in the src directory: `./run-tests`

Note: The first time you use `docker-cmd` will be slower because it will need to download the container.

## Directory Structure:

JS files are created in `src/`.  Test files are created in `src/` and end with `spec.js`.

## Executing other commands inside the container

```bash
# Example: Add another package
./node-container-cmd npm install -D typescript @types/node

# Example: Execute a js file
./node-container-cmd node index.js

# Open a bash terminal inside the container
./node-container-cmd /bin/bash
```
