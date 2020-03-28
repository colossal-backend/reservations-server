# Node image
FROM node:latest

# Make root directory
RUN mkdir -p /src/app

# Set working directory
WORKDIR /src/app

# Copy source code to
COPY . /src/app

# Install VIM to create .env file
RUN apt-get update && apt-get install -y vim

# Install dependencies and bundle app
RUN npm install
RUN npm run react-dev

# Set port
EXPOSE 5050

# Starts with...
CMD [ "npm", "start" ]