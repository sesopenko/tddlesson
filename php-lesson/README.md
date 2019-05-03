# tddlesson-php

## Test framework:

We are running our tests using [PHPUnit](https://phpunit.de/getting-started/phpunit-7.html), the same test framework we use to test PHP Repositories.

## Installation steps

1. Install [Docker for mac](https://docs.docker.com/docker-for-mac/install/)
1. CD into this directory: `cd php-lesson`
1. Install composer dependencies: `./run-install`
1. Run all tests in the tests directory: `./run-tests`

Note: The first time you use `docker-cmd` will be slower because it will need to download the container.

## Directory Structure:

PHP source files are created in `src/`.  Test files are created in `src/` and end with `Test.php`.

## Containers

The composer container is used for executing composer commands.  The PHP container is used for executing PHP.

## Executing other commands inside the container

```bash
# Example: Add another package using the composer container
./composer-container-cmd composer require guzzlehttp/guzzle


# Open a bash terminal inside the composer container
./composer-container-cmd /bin/bash

# Open a bash terminal inside the php container
./php-container-cmd /bin/bash
```