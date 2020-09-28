# docker run -t -d angular-django-apache_django-api
# docker exec -it  bash
# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/#project-setup

FROM centos/python-36-centos7
ENV APP_HOME=/django
COPY . $APP_HOME
WORKDIR $APP_HOME
RUN pip install -r requirements.txt