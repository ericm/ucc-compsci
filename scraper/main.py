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
            sql = "SELECT * FROM `courses`"
            cursor.execute(sql)
            result = cursor.fetchall()
            
            for res in result:
                tableSql = "SELECT * FROM `tables` WHERE id='" + res["id"] + "'"
                cursor.execute(tableSql)
                tableRes = cursor.fetchall()

                r = requests.get(res["url"])
                sel = Selector(text=r.text)

                for table in tableRes:
                    if table["url"] != "null":
                        r = requests.get(table["url"])
                        sel = Selector(text=r.text)
                    else:
                        r = requests.get(res["url"])
                        sel = Selector(text=r.text)

                    notes = []
                    for name in sel.css(table["lbase"]):
                        lname = ' '.join(str(name.css(table["lname"]).get()).split())
                        lurl = ' '.join(str(name.css(table["lurl"]).get()).split())

                        if lname != "None" and lurl != "None":
                            notes.append(Note(lname, lurl))
                            print(lname, lurl)

                    # to minimize errors
                    if len(notes) > 0:
                        cursor.execute("DELETE FROM `notes` WHERE `id` = %s AND `table` = %s", (table["id"], table["name"]))
                        connection.commit()

                        # inserts
                        for note in notes:
                            cursor.execute("INSERT INTO `notes` VALUES (%s, %s, %s, %s);", (table["id"], table["name"], note.name, note.url))

                        connection.commit()

                    

               
    finally:
        connection.close()


job()
