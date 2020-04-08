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

* Clone the project to a local directory `git clone https://github.com/krauss/HaveMetal.git`
* `cd` into the directory then run `npm install` to install all the dependencies. 
* If you have problems with node-sass, run `npm rebuild node-sass`
* Then run `ionic serve` to start it.

**Building a docker container from the Dockerfile:**

After cloning the project from GitHub, go to the project's root directory, run `docker build --tag havemetal:latest .` to build the docker image.

Then, to create and run the docker container:

`docker run -it -p 80:8100 -d havemetal:latest`

**Downloading the image from Docker Hub:**

Optionally in your terminal, simply run `docker pull jrkrauss/havemetal:latest` to download the docker image.

Then, to create and run the docker container:

`docker run -it -p 80:8100 -d jrkrauss/havemetal:latest`

**Access the app:**

Wait for a moment until Ionic CLI finishes run your app inside the container, then open you browser and type: `http://localhost/`
