MASON_COMMON=mason-common
MASON_DEV=mason-dev
MASON_SAVE=mason-save
all:
	npm install --save-dev
	npx tsc $(MASON_COMMON).ts
	npx pkg $(MASON_COMMON).js -o $(MASON_COMMON)

	npx tsc $(MASON_DEV).ts
	npx pkg $(MASON_DEV).js -o $(MASON_DEV)

	npx tsc $(MASON_SAVE).ts
	npx pkg $(MASON_SAVE).js -o $(MASON_SAVE)

clean:
	rm -Rfv *.js $(MASON_COMMON) $(MASON_DEV) $(MASON_SAVE)