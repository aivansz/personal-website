FROM node:latest
MAINTAINER Ivan Oliveira
COPY . /var/www
WORKDIR /var/www
RUN yum -y install git && npm install
ENTRYPOINT npm start
EXPOSE 3000
