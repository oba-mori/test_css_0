// modelviewerの3dモデルを設定する
{

// 別のファイルから変数をimport
// import {numberOfDivs} from './element_create_r1.js';

// item の数
// numberOfDivs




  // div要素を格納する配列を作成
  let divElements = [];

  // midelViewerのsrc設定関数
  midelViewer_3d_set(numberOfDivs);



  // midelViewerのsrc設定関数
  function midelViewer_3d_set(numberOfDivs) 
  {
    // modelviewer要素取得
    for (let i = 0; i < numberOfDivs; i++) {

      // modelviewerの要素取得
      divElements[i] = document.getElementById(`modeViewer-${i}`);
    }

    // src を後から別のファイルに変更する例
    divElements[0].setAttribute('src', '../3d/cube_small.glb');
    divElements[1].setAttribute('src', '../3d/test_stand_r0.glb');
    divElements[2].setAttribute('src', '../3d/dog_1.glb');


    // モデル名が3Dフォルダ内にあるか、srcに設定されているかどうか
    // 設定されていなければ文字か何かで知らせるようにしたい



  }



}