# Base image
FROM node:16.14.0
RUN mkdir -p /app
# COPY ./app/ /app
# RUN cd /app && npm install --force

# EXPOSE 3000
WORKDIR /app
# Start the server
# CMD [ "npm","run", "start" ]