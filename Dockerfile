FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json  ./app

RUN yarn install
RUN yarn add react-scripts -g 

COPY . .

RUN yarn build

CMD [ "npm", "start" ]