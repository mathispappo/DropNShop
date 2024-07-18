FROM node:20-alpine

WORKDIR /app/src/frontend

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

ARG BACKEND_URL=http://backend:5050
ENV REACT_APP_API_URL=${BACKEND_URL}

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "build", "-p", "3000" ]
