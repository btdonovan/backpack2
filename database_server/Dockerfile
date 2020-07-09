FROM node:8.10-alpine

RUN mkdir -p /src/db

WORKDIR /src/db

COPY . /src/db

EXPOSE 5432

CMD [ "node", "server.js" ]