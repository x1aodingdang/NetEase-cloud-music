FROM node:12.17.0-alpine3.9

COPY . /app
WORKDIR /app
RUN npm install yarn -g
RUN yarn
 # --registry=https://registry.npm.taobao.org
RUN yarn build
RUN npx http-server build/ -p 80

EXPOSE 80

# FROM