const connection = require('../db/connection.js');

module.exports = {
	assync index(request, response){
		const ong_id = request.headers.authorization;

		const incidentes = await connection('incidentes').where('ong_id', ong_id).select('*');
	}
}