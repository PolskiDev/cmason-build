MASON_COMMON=cmason-common
MASON_DEV=cmason-dev
MASON_SAVE=cmason-save
all:
	npm install --save-dev
	npx tsc $(MASON_COMMON).ts
	npx pkg $(MASON_COMMON).js -o $(MASON_COMMON)

	npx tsc $(MASON_DEV).ts
	npx pkg $(MASON_DEV).js -o $(MASON_DEV)

	npx tsc $(MASON_SAVE).ts
	npx pkg $(MASON_SAVE).js -o $(MASON_SAVE)

releaf:
	npm install --save-dev

	npx tsc lex.ts
	cp -Rfv lex.js build/cmason/lex.js

	npx tsc os.ts
	cp -Rfv os.js build/cmason/os.js


	npx tsc $(MASON_COMMON).ts
	cp -Rfv $(MASON_COMMON).js build/cmason/$(MASON_COMMON).js
	
	npx tsc $(MASON_DEV).ts
	cp -Rfv $(MASON_DEV).js build/cmason/$(MASON_DEV).js
	
	npx tsc $(MASON_SAVE).ts
	cp -Rfv $(MASON_SAVE).js build/cmason/$(MASON_SAVE).js

	chmod +x build/cmason-common build/cmason-save build/cmason-dev
	cp -Rfv build/* /usr/local/bin/
	@echo "CMason Build System was installed with its dependencies at: /usr/local/bin"

unreleaf:
	rm -Rfv /usr/local/bin/cmason /usr/local/bin/cmason-common /usr/local/bin/cmason-save /usr/local/bin/cmason-dev 


clean:
	rm -Rfv *.js $(MASON_COMMON) $(MASON_DEV) $(MASON_SAVE)
	rm -Rfv build/*.js build/cmason/*.js