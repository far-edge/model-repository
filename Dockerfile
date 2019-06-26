FROM node:10.1.0

WORKDIR /faredge-model-repository

COPY package.json /faredge-model-repository
COPY package-lock.json /faredge-model-repository
RUN npm install

COPY . /faredge-model-repository

EXPOSE 8888

CMD [ "node", "server.js" ]
