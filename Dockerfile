#方案一：用nginx 
# v1.0.0.5
FROM node:lts-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY ./ /app
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 使用例子
# docker build -t mdt:1.0.0.1 .
# docker run --name mdt_1.0.0.1 -itd --rm -p 3000:80 mdt:1.0.0.1

# 方案二：官方案例
# FROM node:lts-alpine

# # install simple http server for serving static content
# RUN npm install -g http-server

# # make the 'app' folder the current working directory
# WORKDIR /app

# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./

# # install project dependencies
# RUN npm install

# # copy project files and folders to the current working directory (i.e. 'app' folder)
# COPY . .

# # build app for production with minification
# RUN npm run build

# EXPOSE 8080
# CMD [ "http-server", "dist" ]

# # 使用例子
# # docker build -t vuejs-cookbook/dockerize-vuejs-app .
# # docker run -itd -p 3001:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app