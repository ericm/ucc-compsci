FROM python:3.7.1

RUN rm /var/lib/dpkg/info/$nomdupaquet* -f && \
    apt-get update && \
    apt-get install -y cron

ADD cronjob /etc/cron.d/hello-cron

RUN chmod 0644 /etc/cron.d/hello-cron

RUN touch /var/log/cron.log

WORKDIR /scraper

COPY requirements.txt /scraper/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /scraper

CMD pip install --no-cache-dir -r /scraper/requirements.txt

CMD cron && tail -f /var/log/cron.log