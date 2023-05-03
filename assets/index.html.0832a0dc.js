import{_ as o,o as a,c as t,b as n,a as p,d as s}from"./app.32e78ad4.js";const e={},c=p(`<h2 id="\u539F\u59CBnew" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CBnew" aria-hidden="true">#</a> \u539F\u59CBnew</h2><br><h3 id="\u7B80\u5355\u7684new\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684new\u793A\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u7684new\u793A\u4F8B:</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;\u5E03\u5170&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>  <span class="token comment">// Person { name: &#39;\u5E03\u5170&#39;, age: 12 }</span>
</code></pre></div><br><br><br><h3 id="\u6253\u5370\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u7ED3\u679C" aria-hidden="true">#</a> \u6253\u5370\u7ED3\u679C:</h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a7899fcd51549e889304ca8ab22d898~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt=""></p><h3 id="\u5C01\u88C5\u4E00\u4E2Anew" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u4E00\u4E2Anew" aria-hidden="true">#</a> \u5C01\u88C5\u4E00\u4E2Anew</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">newFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    Constructor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// arguments \u4E00\u4E2A\u7528\u4E8E\u88AB constructor \u8C03\u7528\u7684\u53C2\u6570\u5217\u8868\u3002</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    <span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// ret || obj Constructor\u53EF\u80FD\u8FD4\u56DEnull</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> ret <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> ret <span class="token operator">||</span> obj <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),l={class:"custom-container tip"},r={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},u=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),i=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),k=[u,i],d=n("p",{class:"custom-container-title"},"TIP",-1),h=n("p",null,[s("\u5B9E\u73B0\u539F\u7406"),n("br"),s(" 1.\u901A\u8FC7Constructor\u6784\u9020\u51FD\u6570\u5C06this\u6307\u5411obj"),n("br"),s(" 2.\u5982\u679CConstructor\u8FD4\u56DE\u7C7B\u578B\u662F\u5BF9\u8C61\u5219return")],-1),m=p(`<p>\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">newFactory</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u732A&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>  <span class="token comment">// { name: &#39;\u5C0F\u732A&#39;, age: 3 }</span>
</code></pre></div>`,2);function f(w,_){return a(),t("div",null,[c,n("div",l,[(a(),t("svg",r,k)),d,h]),m])}var b=o(e,[["render",f],["__file","index.html.vue"]]);export{b as default};