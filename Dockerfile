FROM node:18.17-slim
RUN mkdir /app
WORKDIR /app
COPY ./index.js ./package.json ./
RUN npm install
CMD [ "node", "index.js" ]