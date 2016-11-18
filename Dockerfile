# source image from https://hub.docker.com/
FROM kkarczmarczyk/node-yarn:6.7

# set path used by nodejs to lookup node_modules
ENV NODE_PATH /app/embed/node_modules

# extend default binary lookup files to allow usage of binary files without full path specified
ENV PATH $PATH:./node_modules/.bin:/app/embed/node_modules/.bin

# directory where all commands are executed ENTRYPOINT, CMD, RUN
WORKDIR /app/embed

# add package.json during image build to be able to do npm install
COPY . /app/embed

#RUN apt-get update && apt-get install -y git

# run npm install
RUN cd /app/embed && yarn

# default command to be executed on 'docker run'/'soos' command
CMD [ "yarn", "start" ]
