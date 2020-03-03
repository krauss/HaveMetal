# Welcome the HaveMetal Project

HaveMetal project was initially nothing but a random idea that eventually came across with a real life application. The goal of this project is to develop a friendly app that can keep all your projects under
control, such civil construction projects. Keeping all the engineering drawings and other files in only
one place. And as future feature, those engineering drawings will have a 3D view for the builder to better understand what is been done, doing and to do.

Make sure to make your local user a member of the docker group, so you can run without `sudo`

#### Requirements:

* **Node 12** - `nvm install 12.16.1`
* **Ionic 5** - `npm install -g ionic@latest`

#### Running the app

**Running locally:**

After cloning the project from GitHub, enter the project's root directory and run `npm install` to install all of its dependencies. Then run: `ionic serve` to start it.

**Building a docker container from the Dockerfile:**

Inside the project's root directory, run `docker build --tag havemetal:v1 .` to build the docker image.

Then, to create and run the docker container:

`docker run -it -p 8100:8100 --expose 8100 -d havemetal:v1`

**Downloading the image from the Docker Hub:**

Simply run `docker pull jrkrauss/havemetal` to download the docker image.

Then, to create and run the docker container:

`docker run -it -p 8100:8100 --expose 8100 -d havemetal:v1`
