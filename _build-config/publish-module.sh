#!/bin/bash

confirm () {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case $response in
        [yY][eE][sS]|[yY]) 
            true
            ;;
        *)
            false
            ;;
    esac
}

build () {
    # bail if the module (directory) does not exist
    if [ ! -d "$1" ]; then
        echo "Module \"$1\" not found. Exiting."
        exit 1
    fi

    # push up any local commits to avoid squashing
    git push

    # rebuild the specified module
    npm run build-modules -- --module $1

    # drop into the component folder
    cd ./$1;

    # create a version update (tag) commit
    npm version patch;

    # manually create commit; component subfolders are not git repos and therefore `npm version` doesn't create a commit
    git add .; git commit --m "npm version bump $1"

    # push the version patch
    git push

    # publish the new version to npm
    npm publish
}

confirm "This will rebuild \"$1\", version the application, and push to the git repo and npm registry. Are you sure? [y/N]" && build $1
