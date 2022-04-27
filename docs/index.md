# Getting started

## Javadoc

[Source](https://github.com/yndx-birman/yfm-generated-doc/blob/master/src/javadoc/index.js)

[View result](./javadoc/javascript.md)

### Makefile

```makefile
all: deps build-yfm

deps:
	npm i -g @doc-tools/docs
	npm i -g javadoc

javadoc: 
	javadoc -i src/javadoc/**/*.js --output docs/javadoc/javascript.md -f markdown

generate-docs: javadoc

build-yfm: clean-yfm generate-docs
	yfm -i docs -o docs-gen

clean-yfm:
	rm -rf docs-gen
```
