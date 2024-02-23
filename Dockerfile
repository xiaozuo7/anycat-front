FROM node:20.10.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build


FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/anycat.conf /etc/nginx/conf.d


EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
