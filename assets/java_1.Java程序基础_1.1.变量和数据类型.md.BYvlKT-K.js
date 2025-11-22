import{_ as a,c as n,o as p,al as l}from"./chunks/framework.GtCa91sV.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/1.Java程序基础/1.1.变量和数据类型.md","filePath":"java/1.Java程序基础/1.1.变量和数据类型.md","lastUpdated":1763834000000}'),e={name:"java/1.Java程序基础/1.1.变量和数据类型.md"};function i(r,s,c,b,t,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to “变量”">​</a></h2><p>在Java中，变量分为两种：基本类型的变量和引用类型的变量。</p><h2 id="引用数据类型" tabindex="-1">引用数据类型 <a class="header-anchor" href="#引用数据类型" aria-label="Permalink to “引用数据类型”">​</a></h2><ul><li>数组</li><li>类</li><li>接口</li></ul><h2 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to “基本数据类型”">​</a></h2><p>基本数据类型是CPU可以直接进行运算的类型。Java定义了以下几种基本数据类型：</p><ul><li>整数类型：byte，short，int，long</li><li>浮点数类型：float，double</li><li>字符类型：char</li><li>布尔类型：boolean</li></ul><p>计算机内存的最小存储单元是字节（byte），一个字节就是一个8位二进制数，即8个bit。它的二进制表示范围从00000000~ 11111111，换算成十进制是0~255，换算成十六进制是00~ff。</p><p>bit（中文：位或比特）是计算机中最小的数据单位。 bit = binary digit（二进制数字） 只能表示两个值：0 或 1 是计算机中所有数据的基础</p><p>内存单元从0开始编号，称为内存地址。每个内存单元可以看作一间房间，内存地址就是门牌号。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  0   1   2   3   4   5   6  ...</span></span>
<span class="line"><span>┌───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span>│   │   │   │   │   │   │   │...</span></span>
<span class="line"><span>└───┴───┴───┴───┴───┴───┴───┘</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>不同的数据类型占用的字节数不一样。我们看一下Java基本数据类型占用的字节数：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      ┌───┐</span></span>
<span class="line"><span>byte  │   │</span></span>
<span class="line"><span>      └───┘</span></span>
<span class="line"><span>      ┌───┬───┐</span></span>
<span class="line"><span>short │   │   │</span></span>
<span class="line"><span>      └───┴───┘</span></span>
<span class="line"><span>      ┌───┬───┬───┬───┐</span></span>
<span class="line"><span>int   │   │   │   │   │</span></span>
<span class="line"><span>      └───┴───┴───┴───┘</span></span>
<span class="line"><span>      ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span>long  │   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span>      └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span>      ┌───┬───┬───┬───┐</span></span>
<span class="line"><span>float │   │   │   │   │</span></span>
<span class="line"><span>      └───┴───┴───┴───┘</span></span>
<span class="line"><span>      ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span>double│   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span>      └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span>      ┌───┬───┐</span></span>
<span class="line"><span>char  │   │   │</span></span>
<span class="line"><span>      └───┴───┘</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>byte恰好就是一个字节，而long和double需要8个字节。</p>`,14)])])}const h=a(e,[["render",i]]);export{o as __pageData,h as default};
