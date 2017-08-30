FROM ubuntu
RUN add-apt-repository ppa:ondrej/php && \
apt-get update && \
apt-get install php7.0 php7.0-fpm && \
apt-get install libapache2-mod-php7.0 && \
apt-get install php7.0-mysql -y && \
apt-get --purge autoremove -y

