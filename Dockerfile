# Base Image
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

# Install dependencies
RUN npm install

COPY . .

EXPOSE 6969

CMD [ "npm", "run", "dev" ]