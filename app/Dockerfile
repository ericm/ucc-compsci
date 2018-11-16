FROM python:3.7.1

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

CMD ["gunicorn" , "-b", "0.0.0.0:8000", "app:app"]