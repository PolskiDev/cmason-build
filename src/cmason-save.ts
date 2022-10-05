import * as fs from 'fs';
import { stdout, arch } from 'process';
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
export function SaveMakeCompileFunction() {
    for(var token in t) {
        t.push(token);
        stdout.write("\x1b[33m{"+t[token]+"} ");
    }

    /*
    if(os.windows) {
        if(!t.includes(lex.winI32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.winI32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.winI64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.winI64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.winArm32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.winArm32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.winArm64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.winArm64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    else if(os.linux) {
        if(!t.includes(lex.linux32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linux32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linux64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linux64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxArm32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxArm32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxArm64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxArm64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxPPC32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxPPC32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxPPC64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxPPC64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxS390_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxS390_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxS390x_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxS390x_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxMIPS_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxMIPS_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.linuxMIPSel_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.linuxMIPSel_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    else if(os.darwin) {
        if(!t.includes(lex.darwin32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.darwin32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.darwin64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.darwin64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.darwinAppleSilicon_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.darwinAppleSilicon_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    else if(os.freebsd) {
        if(!t.includes(lex.freebsd32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsd32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsd64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsd64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdArm32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdArm32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdArm64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdArm64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdPPC32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdPPC32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdPPC64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdPPC64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdS390_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdS390_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdS390x_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdS390x_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdMIPS_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdMIPS_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.freebsdMIPSel_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.freebsdMIPSel_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    else if(os.openbsd) {
        if(!t.includes(lex.openbsd32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsd32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsd64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsd64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdArm32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdArm32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdArm64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdArm64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdPPC32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdPPC32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdPPC64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdPPC64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdS390_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdS390_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdS390x_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdS390x_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdMIPS_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdMIPS_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.openbsdMIPSel_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.openbsdMIPSel_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    else if(os.solaris) {
        if(!t.includes(lex.sunos32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunos32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunos64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunos64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosArm32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosArm32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosArm64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosArm64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosPPC32_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosPPC32_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosPPC64_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosPPC64_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosS390_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosS390_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosS390x_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosS390x_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosMIPS_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosMIPS_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
        if(!t.includes(lex.sunosMIPSel_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.sunosMIPSel_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    } else {
        if(!t.includes(lex.universal_target+"_"+main_target)) {
            console.log(`\n\n\x1b[31mTarget (${lex.universal_target+"_"+main_target}) does not exist inside ${lex.ninjafile}!\n\n`)
        }
    }
    */



    // TST - Token Syntax Tree    
    for (var i=0; i < t.length; i++) {
        /** Begin program */
        if(os.windows) {
            if (t[i] == lex.win_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.win_target+"_"+main_target)
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
        else if(os.linux) {
            if (t[i] == lex.linux_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.linux_target+"_"+main_target)
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
        else if(os.darwin) {
            if (t[i] == lex.darwin_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.darwin_target+"_"+main_target)
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
        else if(os.freebsd) {
            if (t[i] == lex.freebsd_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.freebsd_target+"_"+main_target)
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
        else if(os.openbsd) {
            if (t[i] == lex.openbsd_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.openbsd_target+"_"+main_target)
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
        else if(os.solaris) {
            if (t[i] == lex.sunos_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.sunos_target+"_"+main_target)
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

        } else {
            if (t[i] == lex.universal_target+"_"+main_target && t[i+1] == lex.separator) {
                let cmd = t[i+2].slice(1,-1)
                console.log("\n\n\x1b[32mSelected target: "+lex.universal_target+"_"+main_target)
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
}

if(procmode == lex.run) {
    SaveMakeCompileFunction();
    
} else if(procmode == "--version") {
    console.log(`\nCurrent ${lex.ninjafile} version: v${version}\n`)

} else {
    console.log("\nUnrecognized option!\nPlease see some options below...")
    console.log("\n--- "+lex.ninja+" ---")

    console.log("Syntax:    "+lex.ninjasave_name+" -t")
    console.log("Example:   "+lex.ninjasave_name+" -t\n\n")

    console.log("Syntax:    "+lex.ninjasave_name+" -t <target>")
    console.log("Example:   "+lex.ninjasave_name+" -t all")
    console.log("Example:   "+lex.ninjasave_name+" -t build\n")

    console.log("Syntax:    "+lex.ninjasave_name+" --version\n\n")
} 
