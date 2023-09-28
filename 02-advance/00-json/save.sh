#!/bin/bash

echo "save $@"
echo "{
  \"username\":\"$1\", 
  \"option\":\"$2\"
}" > "./data.json"
echo 'end'
