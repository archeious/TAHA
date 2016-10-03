REPORTER = mocha-tap-reporter
test:
	@NODE_ENV=test mocha test/example.js 

.PHONY: test
