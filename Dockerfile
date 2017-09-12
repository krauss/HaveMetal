FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR ./ionic_website_protoype

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package-lock.json .

RUN npm install -g cordova

RUN npm install -g ionic

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8100 35729

CMD [ "ionic", "serve", "--no-git", "--nobrowser", "--no-interactive" ]

