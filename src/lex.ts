// TARGET CONFIGURATIONS: flag, default target, Makefile name
export const default_target = "all"
export const run = "-t"
export const ninjafile = "CMasonfile"

export const run_common = "-t"
export const run_save = "-s"
export const run_dev = "-c"

// DETECT OPERATING SYSTEM (WINDOWS-ARCHs)
export const win_target = "WIN"
export const winI32_target = "WIN32"
export const winI64_target = "WIN64"
export const winArm32_target = "WIN*ARM32"
export const winArm64_target = "WIN*ARM64"


// DETECT OPERATING SYSTEM (DARWIN-ARCHs)
export const darwin_target = "MAC"
export const darwin32_target = "MAC32"
export const darwin64_target = "MAC64"
export const darwinAppleSilicon_target = "MAC*ARM64"


// DETECT OPERATING SYSTEM (LINUX-ARCHs)
export const linux_target = "LINUX"
export const linux32_target = "LINUX32"
export const linux64_target = "LINUX64"
export const linuxArm32_target = "LINUX*ARM32"
export const linuxArm64_target = "LINUX*ARM64"
export const linuxPPC32_target = "LINUX*PPC32"
export const linuxPPC64_target = "LINUX*PPC64"
export const linuxS390_target = "LINUX*S390"
export const linuxS390x_target = "LINUX*S390X"
export const linuxMIPS_target = "LINUX*MIPS"
export const linuxMIPSel_target = "LINUX*MIPSEL"


// DETECT OPERATING SYSTEM (FREEBSD-ARCHs)
export const freebsd_target = "FREEBSD"
export const freebsd32_target = "FREEBSD32"
export const freebsd64_target = "FREEBSD64"
export const freebsdArm32_target = "FREEBSD*ARM32"
export const freebsdArm64_target = "FREEBSD*ARM64"
export const freebsdPPC32_target = "FREEBSD*PPC32"
export const freebsdPPC64_target = "FREEBSD*PPC64"
export const freebsdS390_target = "FREEBSD*S390"
export const freebsdS390x_target = "FREEBSD*S390X"
export const freebsdMIPS_target = "FREEBSD*MIPS"
export const freebsdMIPSel_target = "FREEBSD*MIPSEL"


// DETECT OPERATING SYSTEM (OPENBSD-ARCHs)
export const openbsd_target = "OPENBSD"
export const openbsd32_target = "OPENBSD32"
export const openbsd64_target = "OPENBSD64"
export const openbsdArm32_target = "OPENBSD*ARM32"
export const openbsdArm64_target = "OPENBSD*ARM64"
export const openbsdPPC32_target = "OPENBSD*PPC32"
export const openbsdPPC64_target = "OPENBSD*PPC64"
export const openbsdS390_target = "OPENBSD*S390"
export const openbsdS390x_target = "OPENBSD*S390X"
export const openbsdMIPS_target = "OPENBSD*MIPS"
export const openbsdMIPSel_target = "OPENBSD*MIPSEL"


// DETECT OPERATING SYSTEM (SOLARIS-ARCHs)
export const sunos_target = "SUNOS"
export const sunos32_target = "SUNOS32"
export const sunos64_target = "SUNOS64"
export const sunosArm32_target = "SUNOS*ARM32"
export const sunosArm64_target = "SUNOS*ARM64"
export const sunosPPC32_target = "SUNOS*PPC32"
export const sunosPPC64_target = "SUNOS*PPC64"
export const sunosS390_target = "SUNOS*S390"
export const sunosS390x_target = "SUNOS*S390X"
export const sunosMIPS_target = "SUNOS*MIPS"
export const sunosMIPSel_target = "SUNOS*MIPSEL"


// DETECT OPERATING SYSTEM (ANOTHER-ARCHs)
export const universal_target = "UNIVERSAL"
export const separator = ":"


// Show name at manpage
export const ninjadev_name = "cmason-dev"
export const ninjasave_name = "cmason-save"
export const ninja_name = "cmason-common"


export const ninjaDev = "CMasonDev"
export const ninja = "CMason"
