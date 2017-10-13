# Node.JS web application with Express.JS #

## Pre-requisites ##

- `npm install -g gulp`

## Docker image build instructions ##
Execute `gulp dist` and then `docker build -t <image-name>`

## Running instructions
Assuming you named the image `mynodeapp`, you can run a container based off this
image using  `docker run --rm -p 80:3000 mynodeapp:latest`. 