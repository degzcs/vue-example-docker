FROM node:alpine3.15

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN echo $PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli@latest

CMD ["npm", "run", "serve"]
