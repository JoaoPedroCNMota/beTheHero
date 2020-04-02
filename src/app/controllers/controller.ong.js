const connection = require('../db/connection.js');
const crypto = require('crypto');

module.exports = {

	async index (request, response){
		const ongs = await connection('ongs').selet('*');
		
		return response.json(ongs);
	},

	async create(request, response){

		const {name, email, wpp, city, uf} = request.body;
		const id = crypto.randomBytes(4).toString('HEX');

		await connection('ongs').insert({
			id,
			name,
			email,
			wpp,
			city,
			uf,
		});

		return response.json ({id});
	},
};