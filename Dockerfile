# build environment
FROM node:13.12.0-alpine as build
WORKDIR /usr/app
COPY /js-client/package.json ./
COPY /js-client/package-lock.json ./
COPY /js-client ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /js-client/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]