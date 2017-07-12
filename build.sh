#!/bin/bash
rm -fr output;
mkdir output;
cd ./agile
yog2 release output  --fis3  --no-color;
cd output;
tar czvf ../../output/agile.main.tar ./*
rm -fr * ;

cd ../../base;
tar czvf ../output/agile.base.tar ./*



