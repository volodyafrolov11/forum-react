cd ~/forum-react
npm run build:prod

rm -rf ~/../var/www/forum-react/html
mv ~/forum-react/build /var/www/forum-react/html