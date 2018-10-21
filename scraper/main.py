import pymysql.cursors
from env import env
from parsel import Selector
import requests

class Note:
    def __init__(self, name, url):
        self.name = name
        self.url = url

def job():
    connection = pymysql.connect(host='mysql.netsoc.co',
                             user=env.username,
                             password=env.password,
                             db=env.db,
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "SELECT `url`, `locate` FROM `courses`"
            cursor.execute(sql)
            result = cursor.fetchone()
            r = requests.get(result["url"])
            sel = Selector(text=r.text)
            
            notes = []
            for name in sel.css('table[class="module"] tr'):
                notes.append(Note(name.xpath('.//td[0]/text()').get(), name.xpath('.//td[1]/a/@href').get()))
                print(' '.join(str(name.css('td:nth-of-type(1)::text').get()).split()), ' '.join(str(name.css('td:nth-of-type(2)').xpath('.//a/@href').get()).split()))

#            for res in result["url"]:
#                r = requests.get(link)
#                sel = Selector(text=r.text)

#                print(sel.css('h1::text').get())
    finally:
        connection.close()


job()
