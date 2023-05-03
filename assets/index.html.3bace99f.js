import{_ as n,o as a,c as s,a as t}from"./app.32e78ad4.js";const p={},o=t(`<h3 id="\u51FD\u6570\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9632\u6296" aria-hidden="true">#</a> \u51FD\u6570\u9632\u6296</h3><p><code>\u5B9A\u4E49:\u6307\u89E6\u53D1\u4E8B\u4EF6\u540E\uFF0C\u51FD\u6570\u5728 n \u79D2\u540E\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u4E8B\u4EF6\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\u3002</code></p><div class="language-text ext-text"><pre class="language-text"><code>\u5E94\u7528\u573A\u666F:
1. \u641C\u7D22\u6846\u641C\u7D22\u8F93\u5165\u3002\u53EA\u9700\u7528\u6237\u6700\u540E\u4E00\u6B21\u8F93\u5165\u5B8C\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42\uFF1B
2. \u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u8F93\u5165\u9A8C\u8BC1\uFF1B
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">debouce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
		<span class="token keyword">let</span> arg <span class="token operator">=</span> argument
		timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
			<span class="token comment">//\u6307\u5B9Athis,\u5426\u5219\u6307\u5411fn()\u73AF\u5883</span>
			<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><br><hr><h3 id="\u51FD\u6570\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8282\u6D41" aria-hidden="true">#</a> \u51FD\u6570\u8282\u6D41</h3><p><code>\u5B9A\u4E49:\u9650\u5236\u4E00\u4E2A\u51FD\u6570\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u8FC7\u4E86\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u5728\u4E0B\u4E00\u6BB5\u65F6\u95F4\u53C8\u53EF\u4EE5\u6267\u884C\u4E00\u6B21\u3002</code></p><div class="language-text ext-text"><pre class="language-text"><code>\u5E94\u7528\u573A\u666F:
1.\u8F93\u5165\u6846\u6A21\u7CCA\u67E5\u8BE2\u95F4\u9694,\u53EF\u6BCF\u4E24\u79D2\u8054\u60F3\u4E00\u6B21;
2.\u8868\u5355\u9A8C\u8BC1\uFF1B
3.\u6309\u94AE\u63D0\u4EA4\uFF1B
</code></pre></div><h3 id="\u9996\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9996\u8282\u6D41" aria-hidden="true">#</a> \u9996\u8282\u6D41</h3><hr><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> args <span class="token operator">=</span> arguments
		<span class="token keyword">let</span> date <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">-</span> prex <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
			prev <span class="token operator">=</span> now
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u89E6\u53D1\u4E8B\u4EF6\u65F6\u7ACB\u5373\u6267\u884C-\u4EE5\u540E\u6BCF\u8FC7delay\u79D2\u4E4B\u540E\u624D\u6267\u884C\u4E00\u6B21-\u5E76\u4E14\u6700\u540E\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u82E5\u4E0D\u6EE1\u8DB3\u8981\u6C42\u4E0D\u4F1A\u88AB\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u4E8B\u4EF6\u65F6\u7ACB\u5373\u6267\u884C-\u4EE5\u540E\u6BCF\u8FC7delay\u79D2\u4E4B\u540E\u624D\u6267\u884C\u4E00\u6B21-\u5E76\u4E14\u6700\u540E\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u82E5\u4E0D\u6EE1\u8DB3\u8981\u6C42\u4E0D\u4F1A\u88AB\u6267\u884C" aria-hidden="true">#</a> \u89E6\u53D1\u4E8B\u4EF6\u65F6\u7ACB\u5373\u6267\u884C\uFF0C\u4EE5\u540E\u6BCF\u8FC7delay\u79D2\u4E4B\u540E\u624D\u6267\u884C\u4E00\u6B21\uFF0C\u5E76\u4E14\u6700\u540E\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u82E5\u4E0D\u6EE1\u8DB3\u8981\u6C42\u4E0D\u4F1A\u88AB\u6267\u884C</h5><br><h3 id="\u5C3E\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5C3E\u8282\u6D41" aria-hidden="true">#</a> \u5C3E\u8282\u6D41</h3><hr><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> args <span class="token operator">=</span> arguments
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span><span class="token punctuation">{</span>
			timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
				timer <span class="token operator">=</span> <span class="token keyword">null</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><h5 id="\u7B2C\u4E00\u6B21\u89E6\u53D1\u65F6\u4E0D\u4F1A\u6267\u884C-\u5728delay\u79D2\u4E4B\u540E\u624D\u6267\u884C-\u5F53\u6700\u540E\u4E00\u6B21\u505C\u6B62\u89E6\u53D1\u540E-\u8FD8\u4F1A\u518D\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u89E6\u53D1\u65F6\u4E0D\u4F1A\u6267\u884C-\u5728delay\u79D2\u4E4B\u540E\u624D\u6267\u884C-\u5F53\u6700\u540E\u4E00\u6B21\u505C\u6B62\u89E6\u53D1\u540E-\u8FD8\u4F1A\u518D\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002" aria-hidden="true">#</a> \u7B2C\u4E00\u6B21\u89E6\u53D1\u65F6\u4E0D\u4F1A\u6267\u884C\uFF0C\u5728delay\u79D2\u4E4B\u540E\u624D\u6267\u884C\uFF0C\u5F53\u6700\u540E\u4E00\u6B21\u505C\u6B62\u89E6\u53D1\u540E\uFF0C\u8FD8\u4F1A\u518D\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002</h5></blockquote><br><h3 id="\u5B9A\u65F6\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u8282\u6D41" aria-hidden="true">#</a> \u5B9A\u65F6\u8282\u6D41</h3><hr><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> remaining <span class="token operator">=</span> delay <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      prev <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h5 id="\u7B2C\u4E00\u6B21\u9A6C\u4E0A\u6267\u884C-\u6700\u540E\u4E00\u6B21\u4E5F\u4F1A\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u9A6C\u4E0A\u6267\u884C-\u6700\u540E\u4E00\u6B21\u4E5F\u4F1A\u6267\u884C" aria-hidden="true">#</a> \u7B2C\u4E00\u6B21\u9A6C\u4E0A\u6267\u884C\uFF0C\u6700\u540E\u4E00\u6B21\u4E5F\u4F1A\u6267\u884C</h5>`,23),e=[o];function c(u,l){return a(),s("div",null,e)}var r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
