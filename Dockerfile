# pull official base image
FROM node:12.16.0-alpine

# set working directory
WORKDIR /usr/src/components

# install app dependencies
COPY package.json /usr/src/components


# add app
COPY . .

RUN yarn

RUN yarn build


EXPOSE 5000
