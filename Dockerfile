FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    nginx \
    supervisor \
    curl \
    make \
    gnupg
    
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stdout /var/log/nginx/error.log

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

COPY ./docker/nginx.conf /etc/nginx/sites-enabled/default
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /code
COPY . /code

CMD ["/usr/bin/supervisord"]