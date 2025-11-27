(function () {
  // 开启“捕获阶段”监听，优先于网页原本的禁止代码执行
  window.addEventListener('paste', function (e) {
    // 阻止网页上的其他代码运行（即阻止那个禁止你粘贴的代码）
    e.stopImmediatePropagation();
    // 允许原生粘贴行为继续发生
    return true;
  }, true);

  console.log("✅ 粘贴限制已解除，请尝试 Ctrl+V");
})();