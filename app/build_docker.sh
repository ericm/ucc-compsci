docker build -t scraper-web:latest .
docker run -d -p 8000:8000 scraper-web:latest