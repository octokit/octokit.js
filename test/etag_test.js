/*
 * Copyright 2015 Citizens of Planet Earth
 * Author: Łukasz Marek Sielski (lukaszsielski@gmail.com)
 */
'use strict';

describe('Usage of ETAG conditional queries', function () {

	var Client = require("./../index"),
		should = require('should');

	var register = {};

	var github = new Client({
		debug: false,
		version: "3.0.0",
		etagHandler: {
			getETAG: function (options, callback) {
				var uri = options.path; // should take in account headers
				callback(null, register[uri]);
			},
			setETAG: function (options, ETAG, callback) {
				var uri = options.path; // should take in account headers
				callback(null, register[uri] = ETAG);
			}
		}
	});

	github.authenticate({
		type: 'oauth',
		token: 'TOKEN'
	});

	it('Gets ETAG from first request', function (done) {

		github.user.get({}, function (err, res) {

			should.not.exist(err);
			should(res.meta.status).eql('200 OK');

			github.user.get({}, function (err, res) {

				should.not.exist(err);
				should(res.meta.status).eql('304 Not Modified');
				done();
			});
		});

	});

});
