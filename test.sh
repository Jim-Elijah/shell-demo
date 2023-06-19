#!/bin/bash
usrDir="./packages"
echo $PWD
echo $usrDir
# saveDir=find /mnt/c/Users/zoujinqiang/AppData/Roaming/MobaXterm/home/ultrarisc-ide/src/shell/packages -maxdepth 1 -name "mingyuan-xia.ultrarisc-ide*"
saveDir=$(find $usrDir -name "*.vsix")
echo $saveDir