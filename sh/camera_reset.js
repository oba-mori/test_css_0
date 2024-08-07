// ARカメラリセット
{
  

// 別のファイルから変数をimport
// import {numberOfDivs} from './element_create_r1.js';

// item の数
// numberOfDivs



// DOM待ち
// document.addEventListener('DOMContentLoaded', () => {


// item の数
const numberOfDivs = 8;

// div要素を作成して追加
for (let i = 0; i < numberOfDivs; i++) {
  // for (let i = 0; i < 8; i++) {
    // // 新しいdiv要素を作成
  // const newDiv = document.createElement('div');
  
  // // id属性を設定
  // newD

  // 要素取得
  const newModelViewer = document.getElementById(`modeViewer-${i}`);

  // ARモード終了時にカメラ位置をリセットする関数
  function resetCamera() {
    // カメラの位置をリセット
    newModelViewer.cameraOrbit = "0deg 75deg 2.5m";  // デフォルトのカメラオービットを設定
    newModelViewer.cameraTarget = "0m 0m 0m"; // 必要に応じてカメラターゲットもリセット
    newModelViewer.updateFraming(); // フレームを更新
  }

  // ARモードが終了したことを検出するイベントリスナーを追加
  newModelViewer.addEventListener('ar-status', (event) => {
    if (event.detail.status === 'failed' || event.detail.status === 'not-presenting') {
      resetCamera();
    }
  });

  // ページがフォーカスされたときにカメラ位置をリセットするためのイベントリスナー
  window.addEventListener('focus', () => {
    resetCamera();
  });
}

// });  // DOM待ち


}