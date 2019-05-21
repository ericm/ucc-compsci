# UCC Computer Science Hub

- *Originally designed for CK401*

- Runs on Python / Flask

## Development

- Add env vars `L_DROPBOX`, `L_USERNAME`, `L_PASSWORD` and `L_DB`.
    - You can do this by putting them in a `.env` file.

- Run `docker-compose up web` to start the app

- Run `docker-compose up back` to start the scraper

## Production

### Dependencies
 - Docker
 - Docker compose

#


- Run `docker-compose build` in the main dir

- Then, run the web image (with port 8000 opened) and the back image.


![](./scr.png?raw=true)
