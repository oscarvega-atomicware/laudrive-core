/**
 * Route.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	toJSON : function(){
		this.start.desc = CryptoService.decrypt(route.start.desc);
		this.end.desc = CryptoService.decrypt(route.end.desc);
		return this;
	}

  },
  beforeCreate : function(route,next){
  	console.log("route",route)
  	route.start.desc = CryptoService.encrypt(route.start.desc);
  	route.end.desc = CryptoService.encrypt(route.end.desc);
  	next();
  }
};

