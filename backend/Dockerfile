#!/bin/bash

# Use an official Node.js runtime as a parent image
FROM node:latest

# Create app directory
WORKDIR /opt/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which the app runs (if necessary)
# EXPOSE 3000

# Define the command to run your app using CMD which will run 'npm run dev'
CMD ["npm", "run", "dev"]
