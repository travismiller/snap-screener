SHELL = /bin/bash

node_modules:
	yarn install
	touch node_modules

dev: node_modules
	node_modules/.bin/netlify dev

.PHONY: build
build: node_modules
	yarn build

serve: build
	node_modules/.bin/serve build
