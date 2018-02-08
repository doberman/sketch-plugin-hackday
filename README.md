# Sketch Plugin Hack Day

## Getting Started Guide

All following commands should be executed inside a terminal. `Terminal` comes bundled with MacOS.

##### 1. Install developer tools

    xcode-select --install

##### 2. Install Node.js through nvm

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    command -v nvm
    npm install 8.9.4

##### 3. Install skpm

    npm install -g skpm

##### 4. Create boilerplate plugin

    skpm create my-plugin

##### 5. Start plugin (make sure to have Sketch running first)

    cd my-plugin
    npm run start
