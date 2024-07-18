FROM node:20-alpine

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run grpc:generate
RUN npm run build

ARG BACKEND_PORT=5050

EXPOSE ${BACKEND_PORT}

CMD ["npm", "run", "start"]
