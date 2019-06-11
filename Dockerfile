#
# HaveMetal Project Dockerfile
#

FROM node:8.12

ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /home/jrkrauss/workspaces/ionic/havemetal/

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package-lock.json .

RUN npm install -g cordova@latest

RUN npm install -g ionic@latest

RUN npm uninstall node-sass -g

RUN npm cache clean -f

RUN npm install node-sass@4.5.3 -f

RUN npm install -g n

# Bundle app source
COPY . .

EXPOSE 8100 35729

CMD [ "ionic", "serve", "--no-git", "--no-open", "--no-interactive" ]
