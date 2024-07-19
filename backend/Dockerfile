FROM node:latest
COPY . /opt/app
COPY package.json /opt/app/package.json
RUN npm install
WORKDIR /opt/app
CMD ["npm", "run", "dev"]