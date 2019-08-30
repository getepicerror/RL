#!/usr/bin/env bash
echo "creating output directory"
rm -rf ../cordova/DeckBuilder/www/
mkdir ../cordova/DeckBuilder/www/
echo "copying files"
cp index.html ../cordova/DeckBuilder/www/
cp -r lib/ ../cordova/DeckBuilder/www/lib/
cp -r src/ ../cordova/DeckBuilder/www/src
echo "removing cruft"
rm -rf ../cordova/DeckBuilder/www/src/assets/img_src
rm -rf ../cordova/DeckBuilder/www/src/assets/spine_src
echo "compressing pngs"
pngquant --quality=100 --force --ext .png ../cordova/DeckBuilder/www/src/assets/*/*.png
echo "removing sources"
cd ../cordova/DeckBuilder/www/
find . -name "*.ts" -type f -delete
find . -name "*.map" -type f -delete
echo "done"