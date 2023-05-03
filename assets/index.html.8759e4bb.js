import{_ as p,o as a,c as t,b as n,d as s,a as o}from"./app.32e78ad4.js";const e={},c={class:"custom-container tip"},l={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},u=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),r=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),k=[u,r],i=n("p",{class:"custom-container-title"},"TIP",-1),d=n("h4",{id:"\u770B\u4E86\u4E0Bb\u7AD9vue3\u6E90\u7801\u89E3\u6790\u4EE5\u53CAgithub-vue3\u6E90\u7801-\u8BB0\u5F55\u4E00\u4E0B\u5B66\u4E60\u7B14\u8BB0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u770B\u4E86\u4E0Bb\u7AD9vue3\u6E90\u7801\u89E3\u6790\u4EE5\u53CAgithub-vue3\u6E90\u7801-\u8BB0\u5F55\u4E00\u4E0B\u5B66\u4E60\u7B14\u8BB0","aria-hidden":"true"},"#"),s(" \u770B\u4E86\u4E0Bb\u7AD9vue3\u6E90\u7801\u89E3\u6790\u4EE5\u53CAgithub vue3\u6E90\u7801\uFF0C\u8BB0\u5F55\u4E00\u4E0B\u5B66\u4E60\u7B14\u8BB0\u{1F91B}")],-1),y=o(`<p>\u5173\u4E8Ereactive\u65B9\u6CD5\u4E3B\u8981\u662F\u4EE5\u4E0B4\u79CD:<code>reactive</code>\u3001<code>shallowReactive</code>\u3001<code>readonly</code>\u3001<code>shallowReadonly</code>,<code>readonly</code>\u4E3B\u8981\u7528\u4E8E\u4E0D\u505A\u4FEE\u6539\u7684\u6570\u636E\uFF0C\u4EE5\u505A\u6027\u80FD\u4F18\u5316\u4F5C\u7528\u3002</p><p>\u4EE5\u4E0B\u4E3A\u6E90\u7801\u90E8\u5206\u5185\u5BB9</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// reactive.ts</span>

<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> Target<span class="token punctuation">,</span>
  isReadonly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  baseHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  collectionHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  proxyMap<span class="token operator">:</span> WeakMap<span class="token operator">&lt;</span>Target<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">value cannot be made reactive: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target is already a Proxy, return it.</span>
  <span class="token comment">// exception: calling readonly() on a reactive object</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span>isReadonly <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target already has corresponding Proxy</span>
  <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existingProxy
  <span class="token punctuation">}</span>
  <span class="token comment">// only specific value types can be observed.</span>
  <span class="token keyword">const</span> targetType <span class="token operator">=</span> <span class="token function">getTargetType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">INVALID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span> <span class="token operator">?</span> collectionHandlers <span class="token operator">:</span> baseHandlers
  <span class="token punctuation">)</span>
  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if trying to observe a readonly proxy, return the readonly version.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    mutableHandlers<span class="token punctuation">,</span>
    mutableCollectionHandlers<span class="token punctuation">,</span>
    reactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">shallowReactive</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ShallowReactive<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    shallowReactiveHandlers<span class="token punctuation">,</span>
    shallowCollectionHandlers<span class="token punctuation">,</span>
    shallowReactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token keyword">readonly</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">)</span><span class="token operator">:</span> DeepReadonly<span class="token operator">&lt;</span>UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span>
    readonlyHandlers<span class="token punctuation">,</span>
    readonlyCollectionHandlers<span class="token punctuation">,</span>
    readonlyMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">shallowReadonly</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span>
    shallowReadonlyHandlers<span class="token punctuation">,</span>
    shallowReadonlyCollectionHandlers<span class="token punctuation">,</span>
    shallowReadonlyMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>proxy\u4EE3\u7406\u5BF9\u8C61\u91C7\u7528\u61D2\u4EE3\u7406\uFF0C\u5373\u4E3A\u53EA\u4EE3\u7406\u7B2C\u4E00\u5C42\u5BF9\u8C61\uFF0C\u5982obj:{name:&#39;pig&#39;,list:{n:5},age:30},\u5728\u6CA1\u6709\u5F15\u7528list[key] \u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u4F1A\u88ABproxy\u4EE3\u7406\u3002\u6709\u522B\u4E8Evue2\u4E8E\uFF0Cvue2\u662F\u91C7\u7528<code>\u9012\u5F52</code>\u7684\u65B9\u6CD5\u904D\u5386\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u3002\u800Cvue3\u662F\u901A\u8FC7<code>createReactiveObject</code>\u4E2D <code>baseHandlers</code>\u91C7\u7528\u7684get\u65B9\u6CD5\u505A\u51FA\u5224\u65AD\u662F\u5426\u8FDB\u884C\u4EE3\u7406\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// proxy + Reflect\u53CD\u5C04</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>isReadonly<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span>isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
      <span class="token comment">// \u662F\u4E0D\u662F\u53EA\u8BFB</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// \u4E0D\u662F\u53EA\u8BFB</span>
        <span class="token comment">// \u6536\u96C6\u4F9D\u8D56\uFF0C\u7B49\u6570\u636E\u53D8\u5316\u540E\u66F4\u65B0\u8BD5\u56FE</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u662F\u6D45\u7684</span>
        <span class="token keyword">return</span> res
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u662F\u53EA\u8BFB\uFF0C\u662F\u6DF1\u5EA6</span>
<span class="token keyword">const</span> shallowGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//\u4E0D\u662F\u53EA\u8BFB\uFF0C\u662F\u6D45\u7684</span>
<span class="token keyword">const</span> readonlyGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> shalloReadonlyGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre></div>`,5),g={class:"custom-container tip"},w={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},f=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),m=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),v=[f,m],h=n("p",{class:"custom-container-title"},"TIP",-1),b=n("p",null,[s("\u6838\u5FC3\uFF1Aproxy\uFF0C\u4F7F\u7528\u5BF9\u8C61\u901A\u8FC7\u67EF\u91CC\u5316\u4F20\u5165\u4E0D\u540C\u53C2\u6570\u5BF94\u79CD\u65B9\u6CD5"),n("code",null,"\u662F\u5426\u53EA\u8BFB"),s("\u3001"),n("code",null,"\u662F\u5426\u6DF1\u5C42"),s("\u505A\u51FA\u4E0D\u540Cget\u64CD\u4F5C")],-1);function x(_,R){return a(),t("div",null,[n("div",c,[(a(),t("svg",l,k)),i,d]),y,n("div",g,[(a(),t("svg",w,v)),h,b])])}var H=p(e,[["render",x],["__file","index.html.vue"]]);export{H as default};
