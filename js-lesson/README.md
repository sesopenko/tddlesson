# tddlesson-js

# Test framework:

We are running our tests using [Jest](https://jestjs.io/docs/en/getting-started), the same test framework we use to test JavaScript in our Bonfire repository.  Jest is both an runner and an assertion library in the same package, making it easy to hit the ground running.

# Installation steps

The first time you use `docker-cmd` will be slower because it will need to download the container.

1. Install [Docker for mac](https://docs.docker.com/docker-for-mac/install/)
1. CD into this directory: `cd js-lesson`
1. Install node dependencies: `./docker-cmd.sh npm install`
1. Run the example tests: `./docker-cmd npm run test`

# Docker Notes

This depends on the official node docker container.  `docker-cmd` is provided as a helper to execute commands inside the container.  Your current working directory is mounted as a volume inside the docker container each time you use `docker-cmd`.  You can read more about the node.js container at the official [docker-node github repo](https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image).
