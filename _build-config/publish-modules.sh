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
    # push up any local commits to avoid squashing
    git push

    # rebuild modules
    npm run build-modules

    # create a version update (tag) commit
    npm version patch

    # push the version patch
    git push

    # publish the new version to npm
    npm publish
}

confirm "This will rebuild, version the metapackage, and push to the git repo and npm registry. Are you sure? [y/N]" && build
