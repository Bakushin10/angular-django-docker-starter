# docker run -t -d angular-django-apache_django-api
# docker exec -it  bash

FROM python:3.7-slim
ENV DEBIAN_FRONTEND=noninteractive
ENV APP_HOME=/django
RUN apt-get update && apt-get install -y \
	# apt-utils \
	# vim \
	# curl \
	# apache2 \
	# apache2-utils \
	libpq-dev \
	python3-dev \
	gcc \
	libapache2-mod-wsgi-py3 \
	nano

COPY . $APP_HOME
WORKDIR $APP_HOME
RUN pip install -r requirements.txt

#ENTRYPOINT ["/home/app/web/entrypoint.prod.sh"]