from locale import dcgettext
from flask import Flask, render_template, redirect, url_for, request, jsonify, make_response
import os
import json
import subprocess
import threading
import time

ssh_connection=True;

os.chdir("backend-server")

with open('config.json', 'r', encoding='utf-8') as f:
    config=json.load(f)
    f.close()

def sshProcessTarget():
    while True:
        ssh=subprocess.Popen(config["ssh_command"], stdout=subprocess.PIPE)
        subprocess.Popen("stty sane", shell=True)
        while ssh.poll() is None:
            print(ssh.stdout.readline().strip())
        time.sleep(1)


app=Flask("AdasClicker", template_folder='../docs')

@app.route("/api")
def index():
    return render_template("index.html")

if __name__=="__main__":
    if ssh_connection:
        ssh_process=threading.Thread(target=sshProcessTarget, name="ssh")
        ssh_process.start()
    time.sleep(5)
    subprocess.Popen("stty sane", shell=True)
    app.run(host="0.0.0.0", port=9999)
