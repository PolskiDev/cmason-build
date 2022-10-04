# CMason Build System
Author: Gabriel Margarido  
Licensed under BSD (2-clause) free software license.


#### What is CMason?
CMason is a better GNU Make then GNU Make and a small build system with focus on simplicity. It differs from GNU Make with the aspect of unexisting build dependencies inside the Masonfile, equivalent to the GNU Makefile

#### Why another build system?
CMason aims to be fast, portable, single binaries  
(without external library files - *.so or *.dll)

CMason build was inspired in npm run build,  
each target points to one string with the shell commands connect by &&.

#### Should you use CMason?
If you are looking for portability and Microsoft Windows support, you can use CMason instead of GNU Make or instead of writing build scripts using Batch files.

See the manual for more information for your project, platform support, and details about the language semantics.


#### ~ Building from sources ~
Unzip the downloaded file:

```tar -xfv cmason-build.tar.xz && cd cmason-build```  

- GNU/Linux  
  ```$ cd src && sudo chmod +x make.sh```  
  ```$ ./make.sh```  
  
- GNU Make (FreeBSD, OpenBSD, Hurd, Linux, MacOS)  
  ```$ cd src && make```  
  
- Windows (Batch file)
  ```$ cd src```  
  ```$ start make.bat```  