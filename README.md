# Lecture Scraper

- *Originally designed for CK401*

- Runs on Python / Flask

## Development install

- Add env vars `L_USERNAME`, `L_PASSWORD` and `L_DB`.

- Run `pip install -r requirements.txt` in both `app` and `scraper`

- To run, `python main.py` for scraper (in dir) and `flask start` for frontend (in dir).

## Production

 ### Dependencies
 - Docker
 - Docker compose

#


- Run `docker-compose build` in the main dir

- Then, run the web image (with port 8000 opened) and the back image.


![](./scr.png?raw=true)
