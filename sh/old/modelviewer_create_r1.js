



// 1. <main> 要素を取得
const mainElement = document.querySelector('main');

// item の数
const numberOfDivs = 4;

// div要素を作成して追加
for (let i = 1; i <= numberOfDivs; i++) {
  // 新しいdiv要素を作成
  const newDiv = document.createElement('div');
  
  // id属性を設定
  newDiv.id = `item-${i}`;
  
  // divの内容を設定（オプション）
  // newDiv.textContent = `This is div number ${i}`;
  
  // div要素をmain要素に追加
  mainElement.appendChild(newDiv);

  //-----------------------------------
  // 新しい model-viewer 要素を作成
  const newModelViewer = document.createElement('model-viewer');
  // newModelViewer.classList.add('mv-0'); // classを追加
  
  // 必要な属性を設定
  // newModelViewer.id = 'dimension-demo';
  newModelViewer.id = `modeViewer-${i}`;
  newModelViewer.setAttribute('ar', '');
  newModelViewer.setAttribute('ar-placement', 'floor');
  newModelViewer.setAttribute('ar-modes', 'webxr');
  newModelViewer.setAttribute('ar-scale', 'fixed');
  newModelViewer.setAttribute('camera-orbit', '-30deg auto auto');
  newModelViewer.setAttribute('max-camera-orbit', 'auto 100deg auto');
  newModelViewer.setAttribute('shadow-intensity', '1');
  newModelViewer.setAttribute('camera-controls', '');
  newModelViewer.setAttribute('disable-zoom', '');
  newModelViewer.setAttribute('src', '../3d/cube_small.glb');
  newModelViewer.alt = 'A 3D model of an armchair.';

  // スタイルを設定
  newModelViewer.style.width = '30.0rem';
  newModelViewer.style.height = '40.0rem';

  // model-viewer を "mv-0" クラスの要素に追加する
  newDiv.appendChild(newModelViewer);

  //-----------------------------------
  // AR起動ボタン要素を作成
  const newCustomARButton = document.createElement('button');

  // newCustomARButton.id = 'custom-ar-button';
  newCustomARButton.id = `customArButton-${i}`;
  newCustomARButton.setAttribute('slot', 'ar-button');
  newCustomARButton.textContent = 'start'; // ボタンのテキストを設定
  
  // model-viewer にボタンを追加する
  newModelViewer.appendChild(newCustomARButton);

  //-----------------------------------
  //寸法点、寸法
  // ボタンを作成するためのデータ
  const buttonsData = [
    { slot: 'hotspot-dot+X-Y+Z', class: 'dot', dataPosition: '1 -1 1', dataNormal: '1 0 0' },
    { slot: 'hotspot-dim+X-Y', class: 'dim', dataPosition: '1 -1 0', dataNormal: '1 0 0' },
    { slot: 'hotspot-dot+X-Y-Z', class: 'dot', dataPosition: '1 -1 -1', dataNormal: '1 0 0' },
    { slot: 'hotspot-dim+X-Z', class: 'dim', dataPosition: '1 0 -1', dataNormal: '1 0 0' },
    { slot: 'hotspot-dot+X+Y-Z', class: 'dot show', dataPosition: '1 1 -1', dataNormal: '0 1 0' },
    { slot: 'hotspot-dim+Y-Z', class: 'dim show', dataPosition: '0 -1 -1', dataNormal: '0 1 0' },
    { slot: 'hotspot-dot-X+Y-Z', class: 'dot show', dataPosition: '-1 1 -1', dataNormal: '0 1 0' },
    { slot: 'hotspot-dim-X-Z', class: 'dim', dataPosition: '-1 0 -1', dataNormal: '-1 0 0' },
    { slot: 'hotspot-dot-X-Y-Z', class: 'dot', dataPosition: '-1 -1 -1', dataNormal: '-1 0 0' },
    { slot: 'hotspot-dim-X-Y', class: 'dim', dataPosition: '-1 -1 0', dataNormal: '-1 0 0' },
    { slot: 'hotspot-dot-X-Y+Z', class: 'dot', dataPosition: '-1 -1 1', dataNormal: '-1 0 0' }
  ];

  // 各ボタンを作成し、親要素に追加
  buttonsData.forEach(data => {
    const button = document.createElement('button');
    button.setAttribute('slot', data.slot);
    button.className = data.class;
    button.setAttribute('data-position', data.dataPosition);
    button.setAttribute('data-normal', data.dataNormal);
    newModelViewer.appendChild(button);
  });








}





// //---------------------------------------------------------------------
// //寸法点、寸法
// // ボタンを作成するためのデータ
// const buttonsData = [
//   { slot: 'hotspot-dot+X-Y+Z', class: 'dot', dataPosition: '1 -1 1', dataNormal: '1 0 0' },
//   { slot: 'hotspot-dim+X-Y', class: 'dim', dataPosition: '1 -1 0', dataNormal: '1 0 0' },
//   { slot: 'hotspot-dot+X-Y-Z', class: 'dot', dataPosition: '1 -1 -1', dataNormal: '1 0 0' },
//   { slot: 'hotspot-dim+X-Z', class: 'dim', dataPosition: '1 0 -1', dataNormal: '1 0 0' },
//   { slot: 'hotspot-dot+X+Y-Z', class: 'dot show', dataPosition: '1 1 -1', dataNormal: '0 1 0' },
//   { slot: 'hotspot-dim+Y-Z', class: 'dim show', dataPosition: '0 -1 -1', dataNormal: '0 1 0' },
//   { slot: 'hotspot-dot-X+Y-Z', class: 'dot show', dataPosition: '-1 1 -1', dataNormal: '0 1 0' },
//   { slot: 'hotspot-dim-X-Z', class: 'dim', dataPosition: '-1 0 -1', dataNormal: '-1 0 0' },
//   { slot: 'hotspot-dot-X-Y-Z', class: 'dot', dataPosition: '-1 -1 -1', dataNormal: '-1 0 0' },
//   { slot: 'hotspot-dim-X-Y', class: 'dim', dataPosition: '-1 -1 0', dataNormal: '-1 0 0' },
//   { slot: 'hotspot-dot-X-Y+Z', class: 'dot', dataPosition: '-1 -1 1', dataNormal: '-1 0 0' }
// ];

// // 各ボタンを作成し、親要素に追加
// buttonsData.forEach(data => {
//   const button = document.createElement('button');
//   button.setAttribute('slot', data.slot);
//   button.className = data.class;
//   button.setAttribute('data-position', data.dataPosition);
//   button.setAttribute('data-normal', data.dataNormal);
//   modelViewer.appendChild(button);
// });














//---------------------------------------------------------------------
// オブジェクト、寸法ONOFF
// 新しい div 要素を作成
const controlsDiv = document.createElement('div');
controlsDiv.classList.add('dim'); // classを追加

// 表示オブジェクトラベルを作成
const objectLabel = document.createElement('label');
objectLabel.classList.add('object-label'); // クラスを追加
objectLabel.setAttribute('for', 'src'); // for 属性を設定
objectLabel.textContent = '表示:'; // ラベルのテキストを設定

// select 要素を作成
const select = document.createElement('select');
select.id = 'src'; // idを設定

// option 要素を作成
const option1 = document.createElement('option');
option1.value = '../3d/cube_small.glb';
option1.textContent = 'cube_small(小)';

const option2 = document.createElement('option');
option2.value = '../3d/cube_medium.glb';
option2.textContent = 'cube_medium(中)';

const option3 = document.createElement('option');
option3.value = '';
option3.textContent = 'オブジェクト無し';

// option を select に追加
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

// 寸法ON/OFFラベルを作成
const dimensionsLabel = document.createElement('label');
dimensionsLabel.classList.add('object-label'); // クラスを追加
dimensionsLabel.setAttribute('for', 'show-dimensions'); // for 属性を設定
dimensionsLabel.textContent = '寸法ON/OFF:';

// checkbox を作成
const checkbox = document.createElement('input');
checkbox.id = 'show-dimensions'; // idを設定
checkbox.type = 'checkbox';
checkbox.checked = true; // デフォルトでチェック

// 作成した要素を div に追加
controlsDiv.appendChild(objectLabel);
controlsDiv.appendChild(select);
controlsDiv.appendChild(document.createElement('br'));
controlsDiv.appendChild(dimensionsLabel);
controlsDiv.appendChild(checkbox);

modelViewer.appendChild(controlsDiv);

//---------------------------------------------------------------------









