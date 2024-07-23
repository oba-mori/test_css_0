// 寸法

{
// 別のファイルから変数をimport
// import {numberOfDivs} from './element_create_r1.js';

// div要素を格納する配列を作成
let mv_element = [];


dot();


// midelViewerのsrc設定関数
function dot() 
{
    // item の数
    const numberOfDivs = 8;


  // modelviewer要素取得
  for (let i = 0; i < numberOfDivs; i++) {

    // modelviewerの要素取得
    mv_element[i] = document.getElementById(`modeViewer-${i}`);



    //寸法点、寸法
    // ボタンを作成するためのデータ
    const buttonsData = [
      { slot: 'hotspot-dot+X-Y+Z', class: 'dimensions dot', dataPosition: '1 -1 1', dataNormal: '1 0 0' },
      { slot: 'hotspot-dim+X-Y', class: 'dimensions dim', dataPosition: '1 -1 0', dataNormal: '1 0 0' },
      { slot: 'hotspot-dot+X-Y-Z', class: 'dimensions dot', dataPosition: '1 -1 -1', dataNormal: '1 0 0' },
      { slot: 'hotspot-dim+X-Z', class: 'dimensions dim', dataPosition: '1 0 -1', dataNormal: '1 0 0' },
      { slot: 'hotspot-dot+X+Y-Z', class: 'dimensions dot show', dataPosition: '1 1 -1', dataNormal: '0 1 0' },
      { slot: 'hotspot-dim+Y-Z', class: 'dimensions dim show', dataPosition: '0 -1 -1', dataNormal: '0 1 0' },
      { slot: 'hotspot-dot-X+Y-Z', class: 'dimensions dot show', dataPosition: '-1 1 -1', dataNormal: '0 1 0' },
      { slot: 'hotspot-dim-X-Z', class: 'dimensions dim', dataPosition: '-1 0 -1', dataNormal: '-1 0 0' },
      { slot: 'hotspot-dot-X-Y-Z', class: 'dimensions dot', dataPosition: '-1 -1 -1', dataNormal: '-1 0 0' },
      { slot: 'hotspot-dim-X-Y', class: 'dimensions dim', dataPosition: '-1 -1 0', dataNormal: '-1 0 0' },
      { slot: 'hotspot-dot-X-Y+Z', class: 'dimensions dot', dataPosition: '-1 -1 1', dataNormal: '-1 0 0' }
    ];

    // 各ボタンを作成し、親要素に追加
    buttonsData.forEach(data => {
      const button = document.createElement('button');
      button.setAttribute('slot', data.slot);
      button.className = data.class;
      button.setAttribute('data-position', data.dataPosition);
      button.setAttribute('data-normal', data.dataNormal);
      mv_element[i].appendChild(button);
    });



    // div要素を作成
    const controlsDiv = document.createElement('div');
    controlsDiv.id = 'controls';
    // controlsDiv.classList.add('dim'); // 'dim' クラスを追加
    controlsDiv.classList.add('dim-controls'); // 'dim' クラスを追加

    // 表示オブジェクトのラベルを作成
    const srcLabel = document.createElement('label');
    srcLabel.textContent = '表示オブジェクト:';
    srcLabel.setAttribute('for', 'src');

    // 表示オブジェクトの選択肢を作成
    const srcSelect = document.createElement('select');
    srcSelect.id = 'src';

    // 選択肢を追加
    const options = [
      { value: '../3d/cube_small.glb', text: 'cube_small(小)' },
      { value: '../3d/dog_1.glb', text: 'dogtag' },
      { value: '', text: 'オブジェクト無し' }
    ];

    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      srcSelect.appendChild(optionElement);
    });

    // 寸法ON/OFFのラベルを作成
    const dimensionsLabel = document.createElement('label');
    dimensionsLabel.textContent = '寸法ON/OFF:';
    dimensionsLabel.setAttribute('for', 'show-dimensions');

    // 寸法ON/OFFのチェックボックスを作成
    const showDimensionsCheckbox = document.createElement('input');
    showDimensionsCheckbox.id = 'show-dimensions';
    showDimensionsCheckbox.type = 'checkbox';
    showDimensionsCheckbox.checked = true; // デフォルトでチェックされている
    // showDimensionsCheckbox.checked = false; // デフォルトでチェックされていない

    // ラベルとチェックボックスをdiv要素に追加
    controlsDiv.appendChild(srcLabel);
    controlsDiv.appendChild(srcSelect);
    controlsDiv.appendChild(document.createElement('br')); // 改行を追加
    controlsDiv.appendChild(dimensionsLabel);
    controlsDiv.appendChild(showDimensionsCheckbox);

    // modelViewerにcontrolsDivを追加
    mv_element[i].appendChild(controlsDiv);
  







    /* dimension-demoというid名(model-viewer)のHTML要素を、変数modelViewerに入れる */
    /* const：書き換え不可 */ /* modelViewer：変数 */ /* document：HTLM要素の情報取得、要素書き換えができる */ /* querySelector：取得するHTML要素を指定(class名 → (.class名)、id名 → (#id名))できる */ 
    // const modelViewer = document.querySelector('#dimension-demo');


    /* 下記プログラムの各コードの説明 */
    /* 上記のプログラムによりmodelViewerは、dimension-demoというid名のHTML要素内を表す */
    /* イベントを検知する対象要素.addEventListener(イベント名, イベントを検知した時にする処理(関数名), オプション) */ 
    /* addEventListener：イベントを検知して追加 */ 
    /* input：ユーザーの操作によって値が変更された時(今回はテキストボックス内の文字列が変更された時) */
    /* (event) => {}：{}内の処理が(event)内にそのまま入る、無名関数なので()内に文字を入れる必要はない */
    /* event.target：イベントが発生した要素(今回はidがdimension-demoの要素内の、idがsrcの要素内を表している) */
    /* event.target.value：この場合は上記の通りイベントが発生した要素内のvalueを指している */
    
    /* dimension-demoというid名のHTML要素内の、srcというid名(オブジェクト選択欄)のHTML要素で、値が変更された時、dimension-demoというid名のHTML要素内のsrc(表示3Dデータ)にイベント発生元のvalue(3Dデータ)が入る */
    /* → <要約>オブジェクト選択欄のオブジェクト名が変更されると、それに対応したオブジェクトが表示される */
    mv_element[i].querySelector('#src').addEventListener('input', (event) => {  /*()内にeventと入っているが何も入れる必要はない*/ /* 参考　https://www.javadrive.jp/javascript/event/index24.html  https://ginpen.com/2015/12/22/event-target-elements/ */
      mv_element[i].src = event.target.value;       //input(ユーザーの操作によって値が変更された)時に行う処理(実際は(event)内に入る) /*参考  https://www.sejuku.net/blog/57625 */
    });


    /* dimension-demoというid名(model-viewer)のHTML要素内の、show-dimensionsというid名の要素を、変数checkboxに入れる */
    const checkbox = mv_element[i].querySelector('#show-dimensions');

    /* チェック欄のチェックをON/OFFした時、寸法表示/非表示切り替え */
    checkbox.addEventListener('change', () => {                     //チェック欄のチェックをON/OFFした時
      // mv_element[i].querySelectorAll('button').forEach((hotspot) => {   //button要素を全て表示・非表示
      mv_element[i].querySelectorAll('.dimensions').forEach((hotspot) => { // dimensionsクラスを持つ要素を選択
          if (checkbox.checked) {             //チェック欄にチェックが入っている時
          console.log(i,':ON');
          hotspot.classList.remove('hide');     //表示
        } else {                            //チェック欄にチェックが入っていない時
          console.log(i,':OFF');
          hotspot.classList.add('hide');        //非表示
        }
      });
    });



    /* カメラが移動した時、寸法点と寸法をオブジェクトに追従させるコード */
    /*
    オブジェクトの寸法は四角柱で、それに寸法点と寸法を対応させるためには下記のようにする必要がある
    1. オブジェクトの中心点と、オブジェクトの寸法を取得する
    2. x軸の寸法の1/2の値を取得。y軸、z軸も同じように取得

    3. 寸法点1の場合 → オブジェクト中心点からx軸方向に+1/2x(オブジェクト寸法xの1/2)の距離、y軸方向に-1/2yの距離、z軸方向に+1/2zのの距離を行った位置に寸法点を表示
    4. その他の寸法点、寸法も同じ様な形で表示する
    
    ※言葉だけでは分かりずらいので、図を描いた。同じフォルダ内の"寸法点と寸法 説明"というフォルダの中に置いてある。
    */
    //手順1.2.
    mv_element[i].addEventListener('load', () => {      /* dimension-demoというid名の全てのHTML要素を読み込んだ時、*/

      const center = mv_element[i].getCameraTarget();   //カメラのリアルタイムの目標位置(たぶんスマホのカメラとオブジェクト回転中心点の距離だと思う)をメートル単位で、変数centerに返す  //参考 https://modelviewer.dev/examples/stagingandcameras/#panning
      const size = mv_element[i].getDimensions();       //モデルの(バウンディングボックスの)寸法をメートル単位で、変数sizeに返す  //参考  https://modelviewer.dev/docs/
      
      console.log("Center:", center);
      console.log("Size:", size);

      const x2 = size.x / 2;    //x軸の寸法の1/2を変数x2に入れる
      const y2 = size.y / 2;    //y軸        〃      y2に入れる
      const z2 = size.z / 2;    //z軸        〃      z2に入れる

      console.log("x:", x2, ", y:", y2, ", z:", z2);
      

      
      //------------------------------------------------------------------------------
      //手順

      //寸法点1
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot+X-Y+Z',    //名称
        position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`  //この位置に更新
      });
      
      //寸法1
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dim+X-Y',      //名称
        position: `${center.x + x2} ${center.y - y2} ${center.z}`
      });

      //寸法テキストボックス1
      mv_element[i].querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
          `${(size.z * 100).toFixed(0)} cm`;
  
      //------------------------------------------------------------------------------
      //寸法点2
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot+X-Y-Z',    //名称
        position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
      });
      
      //寸法2
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dim+X-Z',      //名称
        position: `${center.x + x2} ${center.y} ${center.z - z2}`
      });

      //寸法テキストボックス2
      mv_element[i].querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
          `${(size.y * 100).toFixed(0)} cm`;
  
      //------------------------------------------------------------------------------
      //寸法点3
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot+X+Y-Z',    //名称
        position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
      });
      
      //寸法3
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dim+Y-Z',      //名称
        position: `${center.x} ${center.y + y2} ${center.z - z2}`
      });
      
      //寸法テキストボックス3
      mv_element[i].querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
          `${(size.x * 100).toFixed(0)} cm`;
  
      //------------------------------------------------------------------------------
      //寸法点4
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot-X+Y-Z',    //名称
        position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
      });
      
      //寸法4
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dim-X-Z',      //名称
        position: `${center.x - x2} ${center.y} ${center.z - z2}`
      });

      //寸法テキストボックス4
      mv_element[i].querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
          `${(size.y * 100).toFixed(0)} cm`;
  
      //------------------------------------------------------------------------------
      //寸法点5
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot-X-Y-Z',    //名称
        position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
      });
      
      //寸法5
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dim-X-Y',      //名称
        position: `${center.x - x2} ${center.y - y2} ${center.z}`
      });

      //寸法テキストボックス5
      mv_element[i].querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
          `${(size.z * 100).toFixed(0)} cm`;
  
      //------------------------------------------------------------------------------
      //寸法点6
      mv_element[i].updateHotspot({   //"name"と同じ名称のホットスポットの位置や法線を更新する
        name: 'hotspot-dot-X-Y+Z',    //名称
        position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
      });
    });
    //寸法関連終わり

  }

}


}