FROM node:20.1.0-alpine AS app-stage

WORKDIR /home/app

COPY ./ /home/app

RUN npm install --save
RUN npm run build

FROM nginx:1.24.0-alpine

COPY --from=app-stage /home/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=app-stage /home/app/build/ /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]