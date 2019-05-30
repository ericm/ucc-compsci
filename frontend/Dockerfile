FROM node:11-alpine

WORKDIR /frontend

RUN npm i -g npm

COPY package.json .
COPY package-lock.json .
RUN npm i --quiet

COPY . .

RUN npm run config

