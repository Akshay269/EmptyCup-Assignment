from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import json_util
# import json 

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = "mongodb+srv://aks:123@store.r4u4lri.mongodb.net/fuck?retryWrites=true&w=majority"

mongo = PyMongo(app)
print(mongo)



print("MongoDB connection:", mongo.db)  


@app.route('/api/listings', methods=['GET'])
def get_listings():
    try:
        cursor = mongo.db.gay.find()
        json_data = json_util.dumps({"gay": cursor}, default=json_util.default)
        return jsonify(json_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/listings/shortlisted', methods=['GET'])
def get_shortlisted_listings():
    try:
        shortlisted_cursor = mongo.db.gay.find({"shortlisted": True})
        shortlisted_json_data = json_util.dumps({"gay": shortlisted_cursor}, default=json_util.default)
        return jsonify(shortlisted_json_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/listings/<int:id>/toggle-shortlist', methods=['PUT'])
def toggle_shortlist(id):
    try:
        item = mongo.db.gay.find_one({'id': id})
        
        if not item:
            return jsonify({'message': 'Item not found'}), 404

        new_status = not item['shortlisted']
        mongo.db.gay.update_one({'id': id}, {'$set': {'shortlisted': new_status}})

        updated_list_cursor = mongo.db.gay.find()
        updated_list_json_data = json_util.dumps({"gay": updated_list_cursor}, default=json_util.default)
        return jsonify(updated_list_json_data)

    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)