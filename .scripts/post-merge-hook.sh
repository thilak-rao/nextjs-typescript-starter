#!/usr/bin/env bash
function changed {
    git diff --name-only HEAD@{2} HEAD | grep "$1" > /dev/null 2>&1
}

if changed 'package.json'; then
    echo -ne '\n\e[31mWARNING:\e[m \e[33mThe package.json file has changed, executing yarn install.\e[m\n\n'
    yarn --ignore-scripts --frozen-lockfile --silent
    yarn yalc
    yarn bootstrap
fi

exit 0
