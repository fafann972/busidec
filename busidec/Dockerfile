FROM busidec-front

MAINTAINER Jarel Stéphane

LABEL a=ý

RUN npm --user root --unsafe-perm true npm -g

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Now we'll change our working directory
WORKDIR /opt/app

# And finally add all our files from our host machine
ADD . /opt/app/

RUN npm run build

# I'm also going to expose a port here, we'll use this later
EXPOSE 8080

# Finally, we'll run a command whenever we start this in a container
CMD ["npm", "start"]  