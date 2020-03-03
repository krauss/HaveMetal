# Welcome the HaveMetal Project

HaveMetal project was initially nothing but a random idea that eventually came across with a real life application. The main goal of this project is to teach machines how to read engineer drawings the same way humans beings do, using deep learning models and a specific device with scan capabilities.

Make sure to make your local user a member of the docker group, so you can run without `sudo`

### Requirements:

* **Node 12** - `nvm install 12.16.1`
* **Ionic 5** - `npm install -g ionic@latest`

### Running locally or as a docker container

**Running locally:**

After cloning the project from GitHub, enter the project's root directory and run `npm install` to install all of its dependencies. Then run: `ionic serve` to start it.

**Running as a docker container:**

Inside the project's root directory, run `docker build --tag havemetal:v1 .` to build the docker image.

Then, to create and run the docker container:

`docker run -it -p 8100:8100 --expose 8100 -d havemetal:v1`
