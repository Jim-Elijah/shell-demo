###### !/usr/bin/env bash

# username=$(id -un)
# echo $username
# output: user


# userHome=$(cd ~ && pwd)
# echo $userHome
# userHome=(`echo $userHome | tr '/' ' '`)
# echo $userHome[@]
# ${#my_array[*]}

# #!/usr/bin/env bash
# echo "uanme:$uname"
# if [ "$(uname)"=="Darwin" ]; then
#     echo "Mac"
# # Mac OS X 操作系统
# elif [ "$(expr substr $(uname -s) 1 5)"=="Linux" ];then
#     echo "Linux"
# # GNU/Linux操作系统
# elif [ "$(expr substr $(uname -s) 1 10)"=="MINGW32_NT" ];then
#     echo "Windows"
# # Windows NT操作系统
# fi

#!/bin/bash
echo "uname:$uname"
uNames=`uname -s`
osName=${uNames: 0: 4}
echo "osName:$osName"
if [ "$osName" == "Darw" ] # Darwin
then
	echo "Mac OS X"
elif [ "$osName" == "Linu" ] # Linux
then
	echo "GNU/Linux"
elif [ "$osName" == "MING" ] # MINGW, windows, git-bash
then 
	echo "Windows, git-bash" 
else
	echo "unknown os"
fi