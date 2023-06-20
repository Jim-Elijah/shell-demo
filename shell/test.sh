#!/bin/bash
homePath=$(echo ~)
extDir="$homePath/.vscode/extensions"
echo $extDir
idePath="$homePath/.uride"
# id of ultrarisc-ide with format of author.pluginName.x.y.z
ideId="mingyuan-xia.ultrarisc-ide"


hasExist=$(find $extDir -maxdepth 1 -name "$ideId*")
# hasExist=$(find $extDir -maxdepth 2 -name "ext*")
echo '00'
echo "$hasExist 111"
if [ -e $hasExist ] && [ -n $hasExist ]; then
    echo "exist1111, check if should update"
else
    echo "not exist, install"
fi
