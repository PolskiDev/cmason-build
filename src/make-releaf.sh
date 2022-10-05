#!/bin/bash
npm install --save-dev

npx tsc lex.ts
cp -Rfv lex.js build/cmason/lex.js

npx tsc os.ts
cp -Rfv os.js build/cmason/os.js


npx tsc cmason-common.ts
cp -Rfv cmason-common.js build/cmason/cmason-common.js
        
npx tsc cmason-dev.ts
cp -Rfv cmason-dev.js build/cmason/cmason-dev.js
        
npx tsc cmason-save.ts
cp -Rfv cmason-save.js build/cmason/cmason-save.js

chmod +x build/cmason-common build/cmason-save build/cmason-dev
cp -Rfv build/* /usr/local/bin/