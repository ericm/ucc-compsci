import dropbox
import os, sys
import pymysql, requests

class Env:
    def __init__(self):
        self.username = os.environ['L_USERNAME']
        self.password = os.environ['L_PASSWORD']
        self.db = os.environ['L_DB']
        self.dbx = os.environ['L_DROPBOX']

env = Env()

if not os.path.exists("dls"):
    os.makedirs("dls")

dbx = dropbox.Dropbox(env.dbx)

def exists(path):
    try:
        dbx.files_get_metadata(path)
        return True
    except:
        return False


def upload():

    for root, _, files in os.walk("dls"):
        for filename in files:

            local_path = os.path.join(root, filename)
            relative_path = os.path.relpath(local_path, "dls")

            if not exists("/"+relative_path):
                print(relative_path)
                with open(local_path, 'rb') as f:
                    dbx.files_upload(f.read(), "/"+relative_path)
                

def download():
    connection = pymysql.connect(host='mysql.netsoc.co',
                             user=env.username,
                             password=env.password,
                             db=env.db,
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
    
    try:
        with connection.cursor() as cursor:

            cursor.execute("SELECT id, name, url, prefix FROM tables")
            tables = cursor.fetchall()

            for table in tables:
                
                if not os.path.exists("dls/"+table["id"]+"/"+table["name"]):
                    os.makedirs("dls/"+table["id"]+"/"+table["name"])
                

                cursor.execute("SELECT url, name FROM notes WHERE id = %s AND `table` = %s", (table["id"], table["name"]))
                notes = cursor.fetchall()

                for note in notes:

                    url = ""
                    if table["prefix"] == " ":
                        url = note["url"]
                    else:
                        url = table["prefix"]+note["url"]

                    file_name = note["url"].split("/")
                    file_name = file_name[len(file_name)-1]

                    fl = "dls/"+table["id"]+"/"+table["name"]+"/"+file_name
                    try:
                        if not os.path.exists(fl):
                            r = requests.get(url, stream=True)
                            with open(fl, "wb") as f:
                                print(url)
                                for chunk in r.iter_content(chunk_size=1024):
                                    if chunk:
                                        f.write(chunk)
                                        f.flush()

                    except:
                        e = sys.exc_info()
                        print(e)
                        continue
                    

    finally:
        connection.close()
        upload()