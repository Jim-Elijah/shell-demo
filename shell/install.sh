#!/bin/bash
pwd=$PWD
echo "pwd:$pwd"

# vscode extension安装路径
homePath=$(echo ~)
extDir="$homePath/.vscode/extensions"
echo $extDir
idePath="$homePath/.uride"
# id of ultrarisc-ide with format of author.pluginName.x.y.z
ideId="mingyuan-xia.ultrarisc-ide"
# 安装选项
zipOption="mingyuan-xia.ultrarisc-ide*.zip"
vsixOption="ultrarisc-ide*.vsix"

savedUsername=""
savedOption=""

# 服务器地址和文件路径
severAddr="192.168.253.220"
serverPath="/tmp/ultrarisc-ide/packages/"

read4Json() {
    data=$(cat $idePath/data.json | sed -r 's/",/"/' | egrep -v '^[{}]' | sed 's/"//g' | sed 's/:/=/1')
    declare $data
    echo "read $data"
    savedUsername=$username
    savedOption=$option
}

save2Json() {
    echo "save $@"
    echo "{
        \"username\":\"$1\",
        \"option\":\"$2\"
}" > $idePath/data.json
}

install() {
    echo "select which way to install:"
    echo '0 for .vsix, non-zero for .zip'
    read option
    echo "install"
    echo "input you username@$severAddr:"
    read username
    echo "option:$option"
    if [ $option -ne 0 ]; then
        echo $zipOption
        if [ ! -d "$idePath/" ]; then
            mkdir $idePath -p
        fi
        scp $username@$severAddr:$serverPath/$zipOption* $idePath/packages/
        cd $idePath/packages && unzip -o $zipOption -d $extDir
        # 保存用户信息
        save2Json "$username" "$option"
    else
        echo $vsixOption
        if [ ! -d "$idePath/" ]; then
            mkdir $idePath -p
        fi
        scp $username@$severAddr:$serverPath/$vsixOption* $idePath/packages/
        cd $idePath/packages && code --install-extension $vsixOption
        # 保存用户信息
        save2Json "$username" "$option"
    fi
    cd $pwd
    echo "install succeed"
}

update() {
    echo "update"
    read4Json
    echo "savedUsername: $savedUsername"
    echo "savedOption: $savedOption"
    echo "pswd: $pswd"
    if [ $savedOption -ne 0 ]; then
        echo "11:$zipOption"
        if [ ! -d "$idePath/tmp/" ]; then
            mkdir $idePath/tmp
        fi
        scp $IDE_USER@$severAddr:$serverPath/$zipOption* $idePath/tmp/
        hasChanged=$(diff $idePath/tmp/$zipOption.md5 $idePath/packages/$zipOption.md5)
        echo "hasChange:$hasChanged"
        if [ -n $hasChanged ]; then
            echo 'change'
            cd $idePath/tmp && unzip -o $zipOption -d $extDir
            cp -rf $idePath/tmp/ $idePath/packages/
            rm -rf $idePath/tmp
            echo "update succeed"
        else
            echo "not change"
            rm -rf $idePath/tmp/
            echo "no updates available"
        fi
    else
        echo "22:$vsixOption"
         if [ ! -d "$idePath/tmp/" ]; then
            mkdir $idePath/tmp
        fi
        scp $IDE_USER@$severAddr:$serverPath/$vsixOption* $idePath/tmp/
        hasChanged=$(diff $idePath/tmp/$vsixOption.md5 $idePath/packages/$vsixOption.md5)
        echo "hasChange:$hasChanged"
        if [ [ -n "$hasChanged" ] ]; then   
            echo 'change'
            cd $idePath/tmp && code --install-extension $vsixOption
            mv -rf $idePath/tmp/* $idePath/packages/
            rm -rf $idePath/tmp/
            echo "update succeed"
        else
            echo "not change"
            rm -rf $idePath/tmp/
            echo "no updates available"
        fi
    fi
    cd $pwd
}

hasExist=$(find $extDir -maxdepth 1 -name "$ideId*")
echo '00'
echo $hasExist
if [[ -n $hasExist ]] && [[ -e $hasExist ]]; then
    echo "exist, check if should update"
    update
else
    echo "not exist, install"
    install
fi
