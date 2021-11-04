FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY /backend/package*.json ./

#RUN npm install --only=development
RUN npm install

COPY ./backend ./

CMD [ "npm", "run", "start:dev" ]
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


#OTHER
#FROM node:12.13-alpine

# Create app directory
#WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

#COPY . .

#EXPOSE 3000
#CMD [ "npm", "run","start:dev" ]
