FROM node:18.12.1

#Install system dependencies
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y \
    curl \
    vim


RUN apt-get clean && rm -rf /var/lib/apt/lists/*


# Create system user to run Composer and Artisan Commands
RUN mkdir -p /home/alex/aoc