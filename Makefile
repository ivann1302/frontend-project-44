install: # установить зависимости
	npm ci

brain-games:	# запуск игры 
	    node bin/brain-games.js

publish:	# публикация пакета
	    npm publish --dry-run
