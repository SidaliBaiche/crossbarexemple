FROM crossbario/crossbar

USER root

RUN apt-get update

RUN apt-get install -y curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -

RUN apt-get -y install nodejs

RUN mkdir /home/testproject/

WORKDIR /home/testproject/

COPY package.json .

RUN npm install 

COPY client.js .

COPY config.json /node/.crossbar/



