#!/bin/sh

# root@104.131.163.198:/usr/share/nginx/html/bitsocean.com/

server='104.131.163.198'
public_html='/usr/share/nginx/html/bitsocean.com/public_html/'
new='/usr/share/nginx/html/bitsocean.com/new/'
old='/usr/share/nginx/html/bitsocean.com/old/'

ember build --prod && echo "touch $new && rm -vR $new" | ssh root@$server &&
scp -r dist root@$server:$new &&
echo "touch $old && rm -vR $old && 
mv $public_html $old && mv $new $public_html &&
sudo service nginx restart" | ssh root@$server