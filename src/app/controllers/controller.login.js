const connection = require('../db/connection.js');

module.exports = {
	assync create (request, response){
		const {id} = request.body;

		const ong = await connection('ongs').where('id', id).select('name').first();

		if (!ong) {
			return response.status(400).json({error: 'Ong não cadastrada.'});
		}

		return json.response(ong);
	},
}