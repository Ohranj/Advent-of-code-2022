FROM ubuntu:latest

RUN apt-get -y update && apt-get -y install \ 
    vim \ 
    curl

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs

COPY . ./home/aoc

WORKDIR /home/aoc
