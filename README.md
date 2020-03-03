## Welcome the HaveMetal Project (Ionic 3)

You'll need Node 8+ and the package node-sass 4+

HaveMetal project was initially nothing but a concept idea that eventually came across with a real life application.
The main goal of this project is to teach machines how to read engineer drawings the same way humans beings do, using deep learning models and a specific device with scan capabilities.

Make sure to make your local user a member of the docker group, so you can run without `sudo`

To building the image:

`docker build . --tag [username]/havemetal`

 To run the container:

`docker run -it -p 80:8100 -p 35729:35729 -d jrkrauss/havemetal`
