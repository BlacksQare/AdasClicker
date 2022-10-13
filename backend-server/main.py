from locale import dcgettext
from flask import Flask, render_template, redirect, url_for, request, jsonify, make_response
import os

os.chdir("backend-server")

app=Flask("AdasClicker", template_folder='../docs')

@app.route("/")
def index():
    return render_template("index.html")

if __name__=="__main__":
    app.run(host="0.0.0.0", port=8080)
