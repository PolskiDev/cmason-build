import * as fs from 'fs';
import { stdout } from 'process';
import { exec, execSync } from 'child_process';
import * as lex from './lex'
import * as os from './os'
let execfile = process.argv[1];
const version = "1.0"


var procmode;
var main_target;
export var inputfile = lex.ninjafile;
export var asm;
export let segment; // HERE
export let linked_file; // HERE
export let bytecode_file;
if (process.argv[2]) { procmode = process.argv[2]; }

if (process.argv[3]) {
    main_target = process.argv[3];
} else {
    main_target = lex.default_target;
}

export let t:any = [];
export let filein:any;
if(procmode == lex.run) {
    filein = fs.readFileSync(inputfile,'utf8');
    //t = filein.split(/\s+/);
    //t = filein.match(/\w+|"[^"]+"/g)
    //t = filein.match(/\w+|"[^"]+"|\([^)]*\)|\[[^\]]*\]|(:)|(=)|(\$)|(\+)/g)
    t = filein.match(/[A-Za-z0-9_$++.,@#><>=<=>===\[\]]+|"[^"]+"|\([^)]*\)|\[[^\]]*\]|(:)|(=)/g)
    //t = filein.split(/"[^"]+"|([^"]+)/g)
    //t = filein.split(/([a-z][A-Z])(?=(?:[^'"]|["'][^'"]*["'])*$)/g)
}
export function DevMakeCompileFunction() {
    for(var token in t) {
        t.push(token);
        stdout.write("\x1b[33m{"+t[token]+"} ");
    }
        if(!t.includes(main_target)) {
            console.log(`\n\n\x1b[31mTarget (${main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }



    // TST - Token Syntax Tree    
    for (var i=0; i < t.length; i++) {
        /** Begin program */
        if (t[i] == main_target && t[i+1] == lex.separator) {
            let cmd = t[i+2].slice(1,-1)
            console.log("\n\n\x1b[32mSelected target: "+main_target)
            console.log("\x1b[32mTarget command: "+cmd)
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`\n\x1b[36m${stdout}`);
            });
        }
    }
}

if(procmode == lex.run) {
    DevMakeCompileFunction();
    
} else if(procmode == "--version") {
    console.log(`\nCurrent ${lex.ninjafile} version: v${version}\n`)

} else {
    console.log("\nUnrecognized option!\nPlease see some options below...")
    console.log("\n--- "+lex.ninjaDev+" ---")

    console.log("Syntax:    "+lex.ninjadev_name+" -t")
    console.log("Example:   "+lex.ninjadev_name+" -t\n\n")

    console.log("Syntax:    "+lex.ninjadev_name+" -t <target>")
    console.log("Example:   "+lex.ninjadev_name+" -t all")
    console.log("Example:   "+lex.ninjadev_name+" -t build\n")

    console.log("Syntax:    "+lex.ninjadev_name+" --version\n\n")
} 
