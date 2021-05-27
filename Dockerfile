# pull official base image
FROM node:12.16.0-alpine

# set working directory
WORKDIR /usr/src/components

# install app dependencies
COPY package*.json ./

RUN yarn

# add app
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]