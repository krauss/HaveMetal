#
# HaveMetal Project Dockerfile
#

FROM node:10

# Create app directory
WORKDIR /home/jrkrauss/workspaces/ionic/havemetal/

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN npm install -g cordova@latest && npm install -g ionic@latest

# Bundle app source
COPY . .

EXPOSE 8100 35729

CMD [ "ionic", "serve", "--address=localhost", "--port=8100" ]