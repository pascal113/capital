#!/bin/bash 

export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm 

/usr/home/gcmphk/.nvm/versions/node/v16.20.0/bin/node /usr/home/gcmphk/.nvm/versions/node/v16.20.0/bin/pm2 start /usr/home/gcmphk/GermanCapitalPharmaLandingpage/server/index.js