import sqlite3
from flask import Flask, render_template, templating, request

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.sqlite')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():

    #conn = get_db_connection()
    #posts = conn.execute('SELECT * FROM Ordine').fetchall()
    #colnames = posts.description
    #conn.close()

    connection = sqlite3.connect('database.sqlite')
    cursor = connection.execute('select * from Ordine o join Operatore o2 on o.operatore = o2.operatore join stato s '
                                'on o.stato = s.stato  join Cliente c on o.id_cliente = c.id_cliente join indirizzo i '
                                'on c.indirizzo = i.id_indirizzo order by id_ordine DESC') #selezionare colonne


    names = [description[0] for description in cursor.description]
    lunghezza = len(names)

    return render_template('index.html', ordine=cursor, names=names, len=lunghezza, ordine_n=int(cursor.fetchone()[0]))

if __name__ == '__main__':
    app.run(host='localhost', port=5000)