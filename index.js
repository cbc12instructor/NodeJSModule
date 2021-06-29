class FakeApi {

 	constructor(name) {
 		this.name = name;
		this.secretMessage = function() {
			console.log('haha');
		}
	}

	getName() {
		return this.name;
	}

}

module.exports = FakeApi;
