#!/usr/bin/env bash
echo "creating output directory"
rm -rf out/
mkdir out
echo "copying files"
cp index.html out/
cp -r lib/ out/lib/
cp -r src/ out/src/
echo "removing cruft"
rm -rf out/src/assets/img_src
rm -rf out/src/assets/spine_src
pngquant --quality=100 --force --ext .png out/src/assets/*/*.png
cd out
find . -name "*.ts" -type f -delete
find . -name "*.map" -type f -delete
find . -name "todo.txt" -type f -delete
javascript-obfuscator ./src --output ./obf
cp -r ./obf/src ./
rm -rf ./obf/
echo "done"