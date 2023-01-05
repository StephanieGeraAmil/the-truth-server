FROM debian:bullseye as builder

ARG NODE_VERSION=14.17.3

RUN apt-get update; apt install -y curl
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH
RUN volta install node@${NODE_VERSION}

#######################################################################

RUN mkdir /app
WORKDIR /app

# NPM will not install any package listed in "devDependencies" when NODE_ENV is set to "production",
# to install all modules: "npm install --production=false".
# Ref: https://docs.npmjs.com/cli/v9/commands/npm-install#description

ENV NODE_ENV production

COPY . .

RUN npm install
FROM debian:bullseye

LABEL fly_launch_runtime="nodejs"

COPY --from=builder /root/.volta /root/.volta
COPY --from=builder /app /app

WORKDIR /app
ENV NODE_ENV production
ENV PATH /root/.volta/bin:$PATH

# RUN npx sequelize-cli db:create 
# RUN npx sequelize-cli db:migrate
# RUN npx sequelize-cli db:seed:all

CMD [ "npm", "run", "start" ]

# [deploy]
# release_command = "bash -c sequelize db:migrate && sequelize db:seed:all"

# FROM node:latest
# WORKDIR /app
# COPY . .
# CMD ["npm", "install"]
# CMD ["npm", "install","sequelize-cli"]
# CMD ["npm", "start"]