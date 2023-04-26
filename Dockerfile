# pull the base image
FROM node:18-alpine AS builder

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

# add app
COPY . ./

RUN yarn build

EXPOSE 3000

# start app
CMD ["yarn", "start"]
