FROM node:20.1.0-alpine

WORKDIR /home/app

COPY ./src src
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

