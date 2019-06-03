FROM node:latest
MAINTAINER Ivan Oliveira
COPY . /var/www
WORKDIR /var/www
RUN apt-get -y install git && npm install
ENTRYPOINT npm start
EXPOSE 3000
