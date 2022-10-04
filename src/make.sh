#!/bin/bash
npm install --save-dev
npx tsc mason-common.ts
npx pkg mason-common.js -o mason-common

npx tsc mason-dev.ts
npx pkg mason-dev.js -o mason-dev

npx tsc mason-save.ts
npx pkg mason-save.js -o mason-save