from flask import Flask, request
import requests
import mysql.connector as mysql
from settings import apikey, gifapikey, dbpwd
from flask_cors import CORS
import json

db = mysql.connect(
	host="localhost",
	user="root",
	password=dbpwd,
	database="blog_post")

print(db)

app = Flask(__name__)
CORS(app)

@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
	if(request.method == 'GET'):
		return get_all_blog_posts()
	else:
		return add_post()

def add_post():
	data = request.get_json()
	print(data)
	query = "insert into posts (id, user_id, title, context) values(%s, %s, %s, %s)"
	values = (data['id'], data['user_id'], data['title'], data['context'])
	cursor = db.cursor()
	cursor.execute(query, values)
	db.commit()
	new_post_id = cursor.lastrowid
	cursor.close()

	return getPost(new_post_id)

def getPost(id):
	quary = "select id, user_id, title, context, published_time from posts where id=%s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query,values)
	record = cursor.fetchone()
	cursor.close()
	header = ['id', 'user_id', 'title', 'context']
	return json.dumps(dict(zip(header, record)))

def get_all_blog_posts():
	query = "select id, user_id, title, context, published_time from posts"
	#cursor -> run the qurys  
	cursor = db.cursor()
	cursor.execute(query)
	#after lines 20-21 cursour executed the query and now this info locate somewhere and i need to pull it

	#to do this we will use 'fetchall' - it taking of the info that cursor holds.
	records = cursor.fetchall()
	#after we done use cursor we need close it
	cursor.close()
	print(records)
	header = ['id', 'user_id', 'title', 'context', 'published_time']
	data = []
	for r in records:
		data.append(dict(zip(header, r)))
	print(data)
	return json.dumps(data)


if __name__ == "__main__":
	app.run()