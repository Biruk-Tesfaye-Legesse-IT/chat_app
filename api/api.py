from flask import Flask

app = Flask(__name__)


@app.route('/api', methods=['GET'] )
def api():
    return{
        'userID': 1,
        'title': 'React fetch from Flask API Demo!',
        'Completed': False
    }


if __name__ == "__main__":
    app.debug=True
    app.run(port=5000)

