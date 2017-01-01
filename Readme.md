# node-slackbot
First thing, get a token for your bot https://my.slack.com/services/new/bot and then set the token in [app.env](app.env) file with for example, the following token:
`API_BOT_TOKEN=AFEFfefeefix9G1q8pkwvoPuddd`

# Install all dependencies
1. npm install 

> Tips:
If you have dependcy hosted in a private repository
1. npm login --registry=http://XXXXX/repository/npm-public/ --always-auth
2. npm install packageName --registry http://XXXXX/repository/npm-public/

# Let's start our bot
`node index.js` and in each channel where @nodejsbot is invited, our bot will reply to messages. You can quickly do `nodejsbot —help` to have the list of commands available.

# Docker
> `docker build -t slackbot .`
> `docker run -it -d -e API_NODE_BOT_TOKEN=${API_NODE_BOT_TOKEN} slackbot`

Tips if you have external NPM depencies, build your docker image with the following command:
> `docker build -t --build-arg NPM_TOKEN=${NPM_TOKEN} slackbot .`