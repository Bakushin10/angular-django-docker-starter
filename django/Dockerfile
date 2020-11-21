# docker run -t -d dcp-container-python-poc_django
# docker exec -it  bash
# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/#project-setup

FROM python:3.6-slim as builder
RUN mkdir /install
WORKDIR /install
COPY requirements.txt /requirements.txt
RUN pip3 install install -r /requirements.txt


FROM centos:7
USER root
# run CentOS with systemd inside a Docker container
RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == \
    systemd-tmpfiles-setup.service ] || rm -f $i; done); \
    rm -f /lib/systemd/system/multi-user.target.wants/*;\
    rm -f /etc/systemd/system/*.wants/*;\
    rm -f /lib/systemd/system/local-fs.target.wants/*; \
    rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
    rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
    rm -f /lib/systemd/system/basic.target.wants/*;\
    rm -f /lib/systemd/system/anaconda.target.wants/*;

ENV APP_HOME=/django
COPY . $APP_HOME
COPY --from=builder /usr/local/lib/python3.6/site-packages /usr/local/lib/python3.6/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# install python3.6
RUN yum -y update && yum -y install \
    epel-release \
    postgresql \
    postgresql-devel \
    gcc \
    python-devel \
    python36 \
    && yum clean all \
    && rm /tmp/* \
    && rm -rf /var/cache/yum \
    && python3.6 -m ensurepip

WORKDIR $APP_HOME

#ENTRYPOINT ["/home/app/web/entrypoint.prod.sh"]
#CMD ["/usr/sbin/httpd","-D","FOREGROUND"]