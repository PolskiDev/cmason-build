export let windows = process.platform == "win32";
export let darwin = process.platform == "darwin";
export let linux = process.platform == "linux";

export let freebsd = process.platform == "freebsd";
export let openbsd = process.platform == "openbsd";
export let solaris = process.platform == "sunos";

/** MOST COMMON */
export let i386 = process.arch == "ia32";
export let amd64 = process.arch == "x64";
export let arm32 = process.arch == "arm";
export let arm64 = process.arch == "arm64";

/** UNCOMMON */
export let powerpc32 = process.arch == "ppc";
export let powerpc64 = process.arch == "ppc64";
export let s390 = process.arch == "s390";
export let s390x = process.arch == "s390x";
export let mips = process.arch == "mips";
export let mipsel = process.arch == "mipsel";