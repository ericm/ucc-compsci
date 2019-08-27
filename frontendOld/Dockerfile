FROM node:11-stretch-slim

WORKDIR /frontend

RUN npm i -g npm

COPY package.json .
COPY package-lock.json .
RUN npm i --quiet

COPY . .

