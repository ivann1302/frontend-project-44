install: # установить зависимости
	npm ci

brain-games:	# запуск игры 
	node bin/brain-games.js

brain-even:		# запуск игры brain-even
	node bin/brain-even.js

brain-calc: 	# запуск игры brain-calc
	node bin/brain-calc.js

brain-gcd:		# запуск игры brain-gcd
	node bin/brain-calc.js

brain-progression:		# запуск игры brain-progression
	node bin/brain-progression.js

brain-prime:	# запуск игры brain-prime

publish:	# публикация пакета
	npm publish --dry-run

lint:		# запуск eslint
	npx eslint
