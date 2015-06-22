FROM octohost/nginx:1.8

RUN apt-get update
RUN apt-get -y install php5-fpm php5-mysql php5-mcrypt php5-cli php5-common

RUN mkdir -p /var/www

RUN mkdir -p /etc/nginx/sites-available/
RUN mkdir -p /etc/nginx/sites-enabled/
ADD ./default.nginx /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf

EXPOSE 80

CMD service php5-fpm start && nginx
