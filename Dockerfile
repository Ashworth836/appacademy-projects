FROM ubuntu:18.04

WORKDIR /app

COPY . /app

RUN apt-get update && \
    apt-get install -y npm nodejs openssh-server nginx && \
    rm -rf /var/lib/apt/lists/*

RUN npm install

CMD ["/usr/sbin/sshd", "-D"] && npm start


# FROM node:10-alpine

# WORKDIR /app

# COPY . /app

# RUN npm install

# CMD ["npm", "start"]