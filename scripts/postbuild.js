const fs = require('fs');
const path = require('path');

async function copyAssets() {
  copy(
    'src/library/assets/fonts/CoinbaseIcons.ttf',
    'dist/assets/fonts/CoinbaseIcons.ttf',
  );
  copy(
    'src/library/assets/fonts/Graphik-Regular.ttf',
    'dist/assets/fonts/Graphik-Regular.ttf',
  );
  copy(
    'src/library/assets/fonts/Graphik-Medium.ttf',
    'dist/assets/fonts/Graphik-Medium.ttf',
  );
}

function copy(source, dest) {
  fs.copyFile(source, dest, function (err) {
    if (err) throw err;
    console.log('Successfully copied ' + dest);
  });
}

copyAssets();
