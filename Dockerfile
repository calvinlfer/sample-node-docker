FROM node:8.7.0-alpine

MAINTAINER Calvin Lee Fernandes

WORKDIR /opt/app

# Copy contents of dist folder to /opt/app
ADD dist /opt/app

# Give ownership to daemon user
RUN ["chown", "-R", "daemon:daemon", "."]
USER daemon

# Expose port 3000 to the network
EXPOSE 3000

CMD ["npm", "start", "--"]
