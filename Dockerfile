# node runtime as base image
FROM node:20-alpine AS eerc

# make /app as working directory
WORKDIR /app

# copy files to working directory
COPY package.json ./

RUN corepack enable pnpm

# install packages from package.json
RUN npm install

RUN pwd

# copy all files to working directory
COPY . .
RUN npm run build

# Build more header module
FROM nginx:1.25.5-alpine as nginx-builder
RUN wget "http://nginx.org/download/nginx-1.25.5.tar.gz" -O nginx.tar.gz && \
  wget "https://github.com/openresty/headers-more-nginx-module/archive/v0.37.tar.gz" -O headers-more.tar.gz
RUN apk add --no-cache --virtual .build-deps \
  git \
  gcc \
  libc-dev \
  make \
  openssl-dev \
  pcre-dev \
  zlib-dev \
  linux-headers \
  curl \
  gnupg \
  libxslt-dev \
  gd-dev \
  geoip-dev 
RUN mkdir -p /usr/src
RUN CONFARGS=$(nginx -V 2>&1 | sed -n -e 's/^.*arguments: //p') \
  tar -zxC /usr/src -f "nginx.tar.gz"
RUN tar -zxvC /usr/src -f "headers-more.tar.gz"
RUN HEADERSMOREDIR="/usr/src/headers-more-nginx-module-0.37" && \
  cd /usr/src/nginx-1.25.5 && \
    ./configure --without-http_autoindex_module --with-compat $CONFARGS --add-dynamic-module=$HEADERSMOREDIR && \
    make && make install

# Use Nginx as the production server
FROM nginx:1.25.5-alpine
# Copy more headers module from builder
COPY --from=nginx-builder /usr/local/nginx/modules/ngx_http_headers_more_filter_module.so /usr/local/nginx/modules/ngx_http_headers_more_filter_module.so
# Copy the built React app to Nginx's web server directory
COPY --from=eerc /app/dist /usr/share/nginx/html

# Add your custom NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 8080

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
