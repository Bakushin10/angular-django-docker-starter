# docker run -t -d django-apache2-docker_django-apache2
# docker exec -it container-id bash

FROM centos:7

ENV container docker
RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == \
    systemd-tmpfiles-setup.service ] || rm -f $i; done); \
    rm -f /lib/systemd/system/multi-user.target.wants/*;\
    rm -f /etc/systemd/system/*.wants/*;\
    rm -f /lib/systemd/system/local-fs.target.wants/*; \
    rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
    rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
    rm -f /lib/systemd/system/basic.target.wants/*;\
    rm -f /lib/systemd/system/anaconda.target.wants/*;

ENV DEBIAN_FRONTEND=noninteractive
RUN yum -y update && \
    yum install -y \
    #apt-utils \
    #vim \
    #curl \
    #nano \
    httpd \
    && yum clean all \
    && rm /tmp/* \
    && rm -rf /var/cache/yum


# Copy apache config
# COPY ./000-default.conf /etc/httpd/sites-available/000-default.conf

# Copy angular artifacts
COPY ./dist/ng7 /var/www/html

EXPOSE 80
CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
