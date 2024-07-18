FROM node:20-alpine

WORKDIR /usr/src/dbmanager

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 50051

CMD ["npm", "run", "start"]
