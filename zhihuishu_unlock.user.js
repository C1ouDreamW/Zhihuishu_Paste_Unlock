// ==UserScript==
// @name         智慧树/网课通用解除粘贴限制
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  自动在后台解除智慧树等网页的禁止粘贴限制，无需打开控制台
// @author       Gemini
// @match        *://*.zhihuishu.com/*
// @match        *://*.chaoxing.com/*
// @match        *://*.icve.com.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';
  console.log("🔓 自动解除粘贴限制脚本已启动");

  // 核心逻辑：在网页加载的最早期拦截“禁止粘贴”的指令
  const allowPaste = function (e) {
    e.stopImmediatePropagation(); // 阻止网页原本的拦截代码
    return true; // 允许原生粘贴
  };

  // 监听粘贴事件，使用捕获模式(true)确保我们比网页先拿到控制权
  window.addEventListener('paste', allowPaste, true);
  window.addEventListener('copy', allowPaste, true); // 顺便把复制限制也解了
  window.addEventListener('contextmenu', allowPaste, true); // 顺便把右键菜单也解了

})();