FROM 652969937640.dkr.ecr.us-east-1.amazonaws.com/containers/node-12:production

RUN apt-get update \
  && apt-get install

WORKDIR /shared

COPY . .

RUN yarn install --unsafe-perm --registry=https://registry-npm.cbhq.net

RUN yarn build
