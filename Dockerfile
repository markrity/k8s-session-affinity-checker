FROM node:12

ARG VERSION

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "node", "src/app.js"]