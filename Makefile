YELLOW = $(shell printf "\33[33m")
GREEN  = $(shell printf "\33[32m")
RED    = $(shell printf "\33[31m")
WHITE  = $(shell printf "\33[37m")
RESET  = $(shell printf "\33[0m")

help:
	@echo ""
	@grep -E '^([a-zA-Z_-]|%)+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "${YELLOW}%-16s${GREEN}%s${RESET}\n", $$1, $$2}'
	@echo ""

.DEFAULT_GOAL := help

init: ## init respository, install deps, build packages
	@${MAKE} pkgs-install
	@${MAKE} pkgs-build
	@${MAKE} pkgs-link
	#@${MAKE} app-install

pkgs-install: ## install all packages dependencies
	@yarn install
	@yarn lerna bootstrap

pkgs-build: ## build all packages
	@yarn lerna --loglevel warn run build

pkgs-dev: ## watch all packages for development
	@yarn lerna run dev --parallel

pkgs-link: ## link all packages to sample app
	@cd packages/container-block-module && yarn link
	@cd packages/core && yarn link
	@cd packages/json-block-module && yarn link
	@cd packages/markdown-block-module && yarn link
	@cd packages/proxy-block-module && yarn link
	@cd packages/ui && yarn link
	@cd sample-app && yarn link \
        @compoz/container-block-module \
        @compoz/core \
        @compoz/json-block-module \
        @compoz/markdown-block-module \
        @compoz/proxy-block-module \
        @compoz/ui

app-install: ## install sample app dependencies
	@cd sample-app && yarn install

.PHONY: doc
