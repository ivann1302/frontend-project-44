install: # установить зависимости
	npm ci

brain-games:	# запуск игры 
	node bin/brain-games.js

brain-even:		# запуск игры brain-even
	node bin/brain-even.js

publish:	# публикация пакета
	npm publish --dry-run

lint:		# запуск eslint
	npx eslint
