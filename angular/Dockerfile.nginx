# 
# nginx setting for k8s
#

FROM node:12.14.1-slim AS builder
ENV APP_HOME=/src
WORKDIR $APP_HOME
COPY . .
RUN npm install && npm run build

# base image nginx
FROM nginx:1.19.0-alpine
ENV PROJECT_NAME=ng7

COPY --from=builder /src/dist/$PROJECT_NAME /src/$PROJECT_NAME
COPY --from=builder /src/config/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# docker build -f Dockerfile.nginx -t angular-django-starter-api .