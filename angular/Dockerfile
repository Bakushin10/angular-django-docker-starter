#
# docker run -t -d django-apache2-docker_django-apache2
# docker exec -it container-id bash
#

FROM ubuntu:18.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    #apt-utils \
    #vim \
    #curl \
    #nano \
    apache2 \
    apache2-utils

# Copy apache config
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
# Copy angular artifacts
COPY ./dist/ng7 /var/www/html/dist

EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]
