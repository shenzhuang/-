/**
 * Created by jjs on 2018/3/6.
 */
var eleImage = document.getElementById('imgDom');
if (eleImage) {
  // 起始值
  var moveX = 0, moveY = 0;
  // 图片无限变换的方法
  var rotate3D = function (event) {
    moveX = moveX + event.movementX;
    moveY = moveY + event.movementY;

    eleImage.style.transform = 'rotateX(' + moveY + 'deg) rotateY(' + moveX + 'deg)';
  };

  // 触发鼠标锁定
  eleImage.addEventListener('click', function () {
    eleImage.requestPointerLock();
  });

  // 再次点击页面，取消鼠标锁定处理
  document.addEventListener('click', function () {
    if (document.pointerLockElement == eleImage) {
      document.exitPointerLock();
    }
  });

  // 检测鼠标锁定状态变化
  document.addEventListener('pointerlockchange', function () {
    if (document.pointerLockElement == eleImage) {
      document.addEventListener("mousemove", rotate3D, false);
    } else {
      document.removeEventListener("mousemove", rotate3D, false);
    }
  }, false);
}
