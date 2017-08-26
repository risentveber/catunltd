#!/usr/bin/env bash
node index.js
rsync build/ rs:/var/www/cltd  --progress --delete -r
#rsync build/index.html rs:/var/www/cltd
#rsync build/d/catalog.pdf rs:/var/www/cltd -r