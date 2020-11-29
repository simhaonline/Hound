# build environment
FROM node:13.12.0-alpine as build
WORKDIR '/app'
COPY /js-client/package.json ./
COPY /js-client/package-lock.json ./
COPY /js-client ./
RUN npm i
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]