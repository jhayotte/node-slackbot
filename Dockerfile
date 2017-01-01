FROM node:7.3.0

# ENV used during the build
ARG NPM_TOKEN

# ENV used to start our app
ENV API_NODE_BOT_TOKEN ${API_NODE_BOT_TOKEN} 

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy sources
COPY . .

# Install app dependencies
RUN npm install

CMD [ "node", "index.js" ]