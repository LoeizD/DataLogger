# DataLogger

## How to use this software

1. run `npm install` to install the node modules
2. install P2M `npm install pm2 -g` to be able to launch software in the background (http://pm2.keymetrics.io/) WARNING: massive count of dependencies
3. `pm2 start app.js` to launch software in the background
4. `pm2 monit` to monitor running software in the background


## NPM Depndencies
- `node-fetch` for getting the data