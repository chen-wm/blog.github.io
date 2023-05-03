set -e

npm run build
git add blog/.vuepress/dist
git commit -m 'commitmsg'
git push
git subtree push --prefix blog/.vuepress/dist origin gh-pages
