npm run build
git config --local credential.helper ""
cd ../checkcluster-vis-ghp-ages/
rm *
rm -rf static/
cp -aR ../checkcluster-vis/build/* .
git push origin gh-pages
