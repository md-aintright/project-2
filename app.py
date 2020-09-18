from flask import Flask, render_template, redirect, jsonify
import psycopg2

# Create an instance of Flask
app = Flask(__name__)

@app.route("/")
def home():

    return render_template("frontpagewh.html")

# Route to render leaflet-index.html template
@app.route("/leaflet")
def leaflet():

    return render_template("leaflet-index.html")

# Route to render table-subplots-index.html template
@app.route("/candle")
def candle():

    return render_template("table-subplots-index.html")

# Route to render scatter-index.html template
@app.route("/scatter")
def scatter():

    return render_template("scatter-index.html")

# Route to render C3-index.html template
@app.route("/c3")
def c3():

    return render_template("C3-index.html")


# Route that will trigger the DB query function
@app.route("/data2017")
def get_data2017():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'") 
    cur = con.cursor()
    cur.execute("""select * from  happy2017""") 
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

# Route that will trigger the DB query function
@app.route("/data2018")
def get_data2018():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'")  
    cur = con.cursor()
    cur.execute("""select * from  happy2018""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

# Route that will trigger the DB query function
@app.route("/data2019")
def get_data2019():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'")  
    cur = con.cursor()
    cur.execute("""select * from  happy2019""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

# Route that will trigger the DB query function
@app.route("/data2020")
def get_data2020():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'")  
    cur = con.cursor()
    cur.execute("""select * from  happy2020""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

##### Kevin's DB pull ########
# Route that will trigger the DB query function
@app.route("/data-candle")
def get_datacandle():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'")  # Subsitute your dbname if different, and your password
    cur = con.cursor()
    cur.execute("""select * from  happycandle""")
    data = [col for col in cur]
    cur.close()
    print(jsonify(data))
    return jsonify(data)

##### Tanti's DB pull ########
# Route that will trigger the scrape function
@app.route("/data-scatter")
def get_datascatter():

    con = psycopg2.connect("host='localhost' dbname='happiness' user='postgres' password='password'")  # Subsitute your dbname if different, and your password
    cur = con.cursor()
    cur.execute("""select * from  happyscatter""")
    data = [col for col in cur]
    cur.close()
    print(jsonify(data))
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)