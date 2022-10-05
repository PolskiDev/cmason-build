#!/bin/bash
npm install --save-dev
npx tsc cmason-common.ts
npx pkg cmason-common.js -o cmason-common

npx tsc cmason-dev.ts
npx pkg cmason-dev.js -o cmason-dev

npx tsc cmason-save.ts
npx pkg cmason-save.js -o cmason-save