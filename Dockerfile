FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm config set -g registry https://registry.npm.taobao.org

RUN npm install

COPY . .
RUN npm run build


FROM nginx:latest

RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/anycat.conf /etc/nginx/conf.d


EXPOSE 80