# Base Image
FROM node:20-alpine

WORKDIR /app

# Copy Web Files
COPY out/ out
COPY package.json .

EXPOSE 3000

CMD [ "npm", "run", "start" ]