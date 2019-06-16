#
# HaveMetal Project Dockerfile
#

FROM node:10

#ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /home/jrkrauss/workspaces/ionic/havemetal/

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package-lock.json .

RUN npm install -g cordova@latest && npm install -g ionic@latest

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8100 35729

CMD [ "ionic", "serve", "--all"]