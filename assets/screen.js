//#titleを取得
let title = document.getElementsByClassName('profile-box');

document.addEventListener('mousemove', event => {

  //X座標(値は適宜調整)
  var x = Math.round(event.pageX / 100);
  //Y座標(値は適宜調整)
  var y = Math.round(event.pageY / 100);
  
  //#titleのX軸・Y軸を設定
  title.style.marginLeft = -x +'%';
  title.style.marginTop = -y +'%';
});