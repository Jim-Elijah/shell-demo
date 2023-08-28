#!/bin/bash

echo "包含bo的行数"
grep bo ./sub/1.txt -c      # 包含bo的行数
echo "-------------------------"

echo "包含bo的内容及行号"
grep bo ./sub/1.txt -n	    # 包含bo的内容及行号
echo "-------------------------"

echo "不包含bo的行内容"
grep bo ./sub/1.txt -v      # 不包含bo的行内容
echo "-------------------------"

echo "精准匹配整词"
grep bark ./sub/1.txt -w    # 精准匹配整词
echo "-------------------------"

echo "精准匹配整行"
grep bark ./sub/1.txt -x    # 精准匹配整行
echo "-------------------------"

echo "匹配文件名"
grep bot ./sub/1.txt -l	    # 匹配文件名
echo "-------------------------"

echo "递归搜索"
grep bot ./sub -r			# 递归搜索
echo "-------------------------"

echo "文件是否包含关键词"
grep bot ./sub/1.txt -q	    # 文件是否包含关键词，0-包含，1-不包含
echo $?						    
echo "-------------------------"
