import{_ as n,o as s,c as a,a as t}from"./app.32e78ad4.js";const p={},o=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myPromise</span><span class="token punctuation">(</span><span class="token parameter">constructor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> self<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">;</span>
    self<span class="token punctuation">.</span>status<span class="token operator">=</span><span class="token string">&quot;pending&quot;</span> <span class="token comment">//\u5B9A\u4E49\u72B6\u6001\u6539\u53D8\u524D\u7684\u521D\u59CB\u72B6\u6001</span>
    self<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token keyword">undefined</span><span class="token punctuation">;</span><span class="token comment">//\u5B9A\u4E49\u72B6\u6001\u4E3Aresolved\u7684\u65F6\u5019\u7684\u72B6\u6001</span>
    self<span class="token punctuation">.</span>reason<span class="token operator">=</span><span class="token keyword">undefined</span><span class="token punctuation">;</span><span class="token comment">//\u5B9A\u4E49\u72B6\u6001\u4E3Arejected\u7684\u65F6\u5019\u7684\u72B6\u6001</span>
    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4E24\u4E2A===&quot;pending&quot;\uFF0C\u4FDD\u8BC1\u4E86\u72B6\u6001\u7684\u6539\u53D8\u662F\u4E0D\u53EF\u9006\u7684</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>status<span class="token operator">===</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          self<span class="token punctuation">.</span>value<span class="token operator">=</span>value<span class="token punctuation">;</span>
          self<span class="token punctuation">.</span>status<span class="token operator">=</span><span class="token string">&quot;resolved&quot;</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4E24\u4E2A===&quot;pending&quot;\uFF0C\u4FDD\u8BC1\u4E86\u72B6\u6001\u7684\u6539\u53D8\u662F\u4E0D\u53EF\u9006\u7684</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>status<span class="token operator">===</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          self<span class="token punctuation">.</span>reason<span class="token operator">=</span>reason<span class="token punctuation">;</span>
          self<span class="token punctuation">.</span>status<span class="token operator">=</span><span class="token string">&quot;rejected&quot;</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u6355\u83B7\u6784\u9020\u5F02\u5E38</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
       <span class="token function">constructor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u94FE\u5F0F\u8C03\u7528\u7684then\u65B9\u6CD5</span>
myPromise<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onFullfilled<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">let</span> self<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">;</span>
   <span class="token keyword">switch</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;resolved&quot;</span><span class="token operator">:</span>
        <span class="token function">onFullfilled</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;rejected&quot;</span><span class="token operator">:</span>
        <span class="token function">onRejected</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>       
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","index.html.vue"]]);export{i as default};
