import * as fs from 'fs';
import { stdout, arch } from 'process';
import { exec, execSync } from 'child_process';
import * as lex from './lex'
import * as os from './os'

import * as mason_common from './mason-common'
import * as mason_save from './mason-save'
import * as mason_dev from './mason-dev'


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
    
} else if (procmode == lex.run_common) {
    mason_common.CommonMakeCompileFunction()

} else if (procmode == lex.run_save) {
    mason_save.SaveMakeCompileFunction()

} else if (procmode == lex.run_dev) {
    mason_dev.DevMakeCompileFunction()

} else if(procmode == "--version") {
    console.log(`\nCurrent ${lex.ninjafile} version: v${version}\n`)

} else {
    console.log("\nUnrecognized option!\nPlease see some options below...")
    console.log("\n--- "+lex.ninja+" ---")

    console.log("Syntax:    "+lex.ninja_name+" -t")
    console.log("Example:   "+lex.ninja_name+" -t\n\n")

    console.log("Syntax:    "+lex.ninja_name+" -t <target>")
    console.log("Example:   "+lex.ninja_name+" -t all")
    console.log("Example:   "+lex.ninja_name+" -t build\n")

    console.log("Syntax:    "+lex.ninja_name+" --version\n\n")
} 
