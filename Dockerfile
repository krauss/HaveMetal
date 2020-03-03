#
# HaveMetal Project Dockerfile
#

FROM node:12

# Create app directory
WORKDIR /home/jrkrauss/workspaces/ionic/havemetal/

# Install app dependencies
COPY package.json ./

RUN npm install

RUN npm install npm install -g ionic@latest

# Bundle app source
COPY . .

EXPOSE 8100/tcp
EXPOSE 35729/tcp

CMD [ "ionic", "serve"]
