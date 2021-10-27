FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY /backend/package*.json ./

#RUN npm install --only=development
RUN npm install

COPY ./backend ./

CMD [ "npm" ]
# RUN npm run start:dev

#FROM node:12.13-alpine as production

#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}

#WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm install --only=production

#COPY . .

#COPY --from=development /usr/src/app/dist ./dist

#CMD ["node", "dist/main"]
