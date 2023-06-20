#!/bin/bash
read4Json() {
    data=$(cat ./data.json | sed -r 's/",/"/' | egrep -v '^[{}]' | sed 's/"//g' | sed 's/:/=/1')
    declare $data
    echo "read $data"
    savedUsername=$username
    savedOption=$option
    echo "savedUsername $savedUsername"
    echo "savedOption $savedOption"
}
read4Json 