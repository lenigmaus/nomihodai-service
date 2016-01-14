FROM ubuntu

RUN apt-get update && apt-get install -y \
    python-dev \
    python-pip \
    zlib1g-dev \
    libxml2-dev \
    libxslt-dev \
    nginx \
    git \
    git-core \
    curl \
    nodejs \
    npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN pip install -U pip
RUN pip install uwsgi

WORKDIR /opt/docker

ADD ./requirements.txt /opt/docker/requirements.txt
RUN pip install -r requirements.txt

RUN npm install -g bower
ADD ./nomihodai_service /opt/docker/nomihodai_service

RUN cd nomihodai_service && bower install --allow-root

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s /opt/docker/nomihodai_service/config/nginx.conf /etc/nginx/sites-enabled/

EXPOSE 80

CMD uwsgi --ini /opt/docker/nomihodai_service/config/uwsgi.ini & \
    nginx