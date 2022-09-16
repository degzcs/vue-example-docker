FROM node:alpine3.15

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN echo $PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli@latest
RUN npm install -D vitest
RUN npm install @vitejs/plugin-vue jsdom @vue/test-utils -D

CMD ["npm", "run", "serve"]
