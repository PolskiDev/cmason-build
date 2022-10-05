#!/bin/bash
npm install --save-dev
npx tsc cmason-common.ts
npx pkg cmason-common.js -o mason-common

npx tsc cmason-dev.ts
npx pkg cmason-dev.js -o mason-dev

npx tsc cmason-save.ts
npx pkg cmason-save.js -o mason-save