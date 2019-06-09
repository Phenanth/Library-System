FROM nodejs

RUN mkdir -p /home/Project/app_library
WORKDIR /home/Project/app_library

COPY package.json /home/Project/app_library
RUN npm install

COPY ./server /home/Project/app_library

EXPOSE 3000

CMD ["node", "server.js"]