FROM node:latest

RUN mkdir /app

RUN apt-get update && apt-get install -y wait-for-it

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
