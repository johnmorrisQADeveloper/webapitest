FROM node:10

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app

RUN cd /usr/src/app

CMD [ "npm t" ]