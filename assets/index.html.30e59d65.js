import{_ as p,o as e,c as t,b as s,a as n,d as o}from"./app.32e78ad4.js";var r="/blog.github.io/img/in-post/sh.jpg";const i={},c=n(`<h4 id="\u8BB0\u5F55\u7B2C\u4E00\u6B21\u90E8\u7F72github-demo\u914D\u7F6Egithub-pages\u7684\u8E29\u5751\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u7B2C\u4E00\u6B21\u90E8\u7F72github-demo\u914D\u7F6Egithub-pages\u7684\u8E29\u5751\u8FC7\u7A0B" aria-hidden="true">#</a> \u8BB0\u5F55\u7B2C\u4E00\u6B21\u90E8\u7F72github demo\u914D\u7F6Egithub pages\u7684\u8E29\u5751\u8FC7\u7A0B \u{1F910}</h4><h3 id="\u4E00\u3001\u65B0\u5EFAvuepress\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u65B0\u5EFAvuepress\u9879\u76EE" aria-hidden="true">#</a> \u4E00\u3001\u65B0\u5EFAvuepress\u9879\u76EE</h3><p><a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">vuepress\u6784\u5EFA</a></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>mkdir blog <span class="token operator">&amp;&amp;</span> cd blog
npm install vuepress vuepress<span class="token operator">-</span>theme<span class="token operator">-</span>meteorlxy
\u521B\u5EFA <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/_posts</span><span class="token template-punctuation string">\`</span></span> \u6587\u4EF6\u5939\u548C Vuepress \u914D\u7F6E\u6587\u4EF6\uFF0C\u9879\u76EE\u7ED3\u6784\u5927\u81F4\u4E3A\uFF1A
<span class="token constant">BLOG</span> <span class="token literal-property property">project</span><span class="token operator">:</span> 
\u251C\u2500\u2500 src # Blog \u6E90\u6587\u4EF6\u76EE\u5F55
\u2502   \u251C\u2500\u2500 <span class="token punctuation">.</span>vuepress # Vuepress \u76EE\u5F55
\u2502   \u2502   \u2514\u2500\u2500 config<span class="token punctuation">.</span>js # Vuepress \u914D\u7F6E\u6587\u4EF6
\u2502   \u2514\u2500\u2500 _posts # \u535A\u5BA2\u6587\u4EF6\u5939
\u2502       \u251C\u2500\u2500 xxx<span class="token punctuation">.</span>md
\u2502       <span class="token operator">...</span>
\u2514\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre></div><p>\u5177\u4F53\u914D\u7F6E\u53C2\u7167<a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">vuepress\u5B98\u7F51</a><br></p><h3 id="\u4E8C\u3001github\u914D\u7F6Eorigin-repo" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001github\u914D\u7F6Eorigin-repo" aria-hidden="true">#</a> \u4E8C\u3001github\u914D\u7F6Eorigin repo</h3><h4 id="_1-\u521B\u5EFA\u4ED3\u5E93-\u5982\u4E0B\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4ED3\u5E93-\u5982\u4E0B\u56FE" aria-hidden="true">#</a> 1.\u521B\u5EFA\u4ED3\u5E93\uFF0C\u5982\u4E0B\u56FE</h4>`,7),l=["src"],h=s("br",null,null,-1),d=s("h4",{id:"_2-\u5173\u8054origin-repo-\u5982\u4E0B\u56FE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-\u5173\u8054origin-repo-\u5982\u4E0B\u56FE","aria-hidden":"true"},"#"),o(" 2.\u5173\u8054origin repo\uFF0C\u5982\u4E0B\u56FE")],-1),u=["src"],g=n(`<br><h3 id="\u4E09\u3001\u6784\u5EFA\u81EA\u52A8\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6784\u5EFA\u81EA\u52A8\u5316\u811A\u672C" aria-hidden="true">#</a> \u4E09\u3001\u6784\u5EFA\u81EA\u52A8\u5316\u811A\u672C</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token constant">BLOG</span>
<span class="token literal-property property">project</span><span class="token operator">:</span>
  \u251C\u2500\u2500 src
#
Blog
\u6E90\u6587\u4EF6\u76EE\u5F55
\u2502   \u251C\u2500\u2500 <span class="token punctuation">.</span>
vuepress
#
Vuepress
\u76EE\u5F55
\u2502   \u2502   \u2514\u2500\u2500 config<span class="token punctuation">.</span>js
#
Vuepress
\u914D\u7F6E\u6587\u4EF6
\u2502   \u2514\u2500\u2500 _posts
#
\u535A\u5BA2\u6587\u4EF6\u5939
\u2502       \u251C\u2500\u2500 xxx<span class="token punctuation">.</span>md
\u2502       <span class="token operator">...</span>
\u2514\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
\u2514\u2500\u2500 deploy<span class="token punctuation">.</span>sh <span class="token comment">//\u65B0\u589E\u811A\u672C</span>
</code></pre></div>`,3),_={class:"custom-container tip"},k={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},m=s("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),b=s("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),v=[m,b],f=n('<p class="custom-container-title">TIP</p><h4 id="_1-\u65B0\u589Edeploy-sh\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_1-\u65B0\u589Edeploy-sh\u811A\u672C" aria-hidden="true">#</a> 1.\u65B0\u589Edeploy.sh\u811A\u672C</h4><h4 id="_2-packjson\u65B0\u589E\u6253\u5305\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-packjson\u65B0\u589E\u6253\u5305\u547D\u4EE4" aria-hidden="true">#</a> 2.packjson\u65B0\u589E\u6253\u5305\u547D\u4EE4</h4><h4 id="_3-git-bash-\u6267\u884C\u811A\u672C-repo\u4ED3\u5E93\u5C06\u65B0\u589Egh-pages\u5206\u652F\u4EE5\u5B58\u653E\u6253\u5305\u540E\u7684dist\u6587\u4EF6\u5939-\u7528\u4E8Egithub-pages\u90E8\u7F72\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_3-git-bash-\u6267\u884C\u811A\u672C-repo\u4ED3\u5E93\u5C06\u65B0\u589Egh-pages\u5206\u652F\u4EE5\u5B58\u653E\u6253\u5305\u540E\u7684dist\u6587\u4EF6\u5939-\u7528\u4E8Egithub-pages\u90E8\u7F72\u5206\u652F" aria-hidden="true">#</a> 3.git bash \u6267\u884C\u811A\u672C\uFF0Crepo\u4ED3\u5E93\u5C06\u65B0\u589Egh-pages\u5206\u652F\u4EE5\u5B58\u653E\u6253\u5305\u540E\u7684dist\u6587\u4EF6\u5939\uFF0C\u7528\u4E8Egithub pages\u90E8\u7F72\u5206\u652F</h4>',4),x=n(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//deploy.sh</span>
#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env sh
# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set <span class="token operator">-</span>e

npm run build
git add docs<span class="token operator">/</span><span class="token punctuation">.</span>vuepress<span class="token operator">/</span>dist
git commit <span class="token operator">-</span>m <span class="token string">&#39;commitmsg&#39;</span>
git push
git subtree push <span class="token operator">--</span>prefix docs<span class="token operator">/</span><span class="token punctuation">.</span>vuepress<span class="token operator">/</span>dist origin gh<span class="token operator">-</span>pages

</code></pre></div><img src="`+r+'" alt="sh">',2),j=["src"],w=s("h3",{id:"\u56DB\u3001\u5982\u56FE\u64CD\u4F5C-\u7B49\u5F85actions\u90E8\u7F72\u5B8C\u6BD5\u5373\u53EF\u8BBF\u95EE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u56DB\u3001\u5982\u56FE\u64CD\u4F5C-\u7B49\u5F85actions\u90E8\u7F72\u5B8C\u6BD5\u5373\u53EF\u8BBF\u95EE","aria-hidden":"true"},"#"),o(" \u56DB\u3001\u5982\u56FE\u64CD\u4F5C\uFF0C\u7B49\u5F85actions\u90E8\u7F72\u5B8C\u6BD5\u5373\u53EF\u8BBF\u95EE")],-1),y=["src"],B=s("br",null,null,-1);function V(a,M){return e(),t("div",null,[c,s("img",{src:a.$withBase("/img/in-post/repo1.jpg"),alt:"repo1"},null,8,l),h,d,s("img",{src:a.$withBase("/img/in-postrepo2.jpg"),alt:"repo1"},null,8,u),g,s("div",_,[(e(),t("svg",k,v)),f]),x,s("img",{src:a.$withBase("/img/in-post/sh2.jpg"),alt:"sh2"},null,8,j),w,s("img",{src:a.$withBase("/img/in-post/sh3.jpg"),alt:"sh3"},null,8,y),B])}var $=p(i,[["render",V],["__file","index.html.vue"]]);export{$ as default};
