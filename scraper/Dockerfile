FROM ubuntu:16.04

RUN apt-get update && \
    apt-get install -y python python-pip cron

COPY . /scraper

RUN pip install --no-cache-dir -r /scraper/requirements.txt

ADD cronjob /etc/cron.d/hello-cron

RUN chmod 0644 /etc/cron.d/hello-cron

RUN crontab /etc/cron.d/hello-cron

RUN touch /var/log/cron.log

CMD cron && tail -f /var/log/cron.log