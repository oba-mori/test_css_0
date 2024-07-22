
{


// 1. <main> 要素を取得
// export const mainElement = document.querySelector('main');
const mainElement = document.querySelector('main');

// item の数
// export const numberOfDivs = 8;
const numberOfDivs = 8;





const Div_all_item = document.createElement('div');

// div作成関数呼び出し
create_div_all_item(mainElement,Div_all_item);
 

// div要素を作成して追加
for (let i = 0; i < numberOfDivs; i++) {
  // // 新しいdiv要素を作成
  // const Div_item = document.createElement('div');
  
  // // id属性を設定
  // Div_item.id = `item-${i}`;
  
  // // divの内容を設定（オプション）
  // // Div_item.textContent = `This is div number ${i}`;
  
  // // div要素をmain要素に追加
  // mainElement.appendChild(Div_item);

  // 新しいdiv要素を作成


  // 新しいdiv要素を作成
  const Div_item = document.createElement('div');
  // div作成関数呼び出し
  create_div_item(Div_all_item,Div_item,i);


  // 新しいdiv要素を作成
  const Div_mv = document.createElement('div');
  // div作成関数呼び出し
  create_div_mv(Div_item,Div_mv,i);


  // 新しい model-viewer 要素を作成
  const newModelViewer = document.createElement('model-viewer');
  // midelViewer作成関数呼び出し
  midelViewer_create_function(Div_mv, newModelViewer, i);


  // AR起動ボタン要素を作成
  const newCustomARButton = document.createElement('button');
  midelViewer_arbutton_create(newModelViewer, newCustomARButton, i);
  // midelViewer_arbutton_create(Div_mv, newCustomARButton, i);





  //---------------------------------------------------------------------
  // 新しいdiv要素を作成
  const Div_a_1 = document.createElement('div');
  // div作成関数呼び出し
  create_div_a_1(Div_item,Div_a_1,i);

  // 新しいdiv要素を作成
  const A_1 = document.createElement('a');
  // div作成関数呼び出し
  create_a_1(Div_a_1,A_1,i);



  // 新しいdiv要素を作成
  const Div_a_2 = document.createElement('div');
  // div作成関数呼び出し
  create_div_a_2(Div_item,Div_a_2,i);

  // 新しいdiv要素を作成
  const A_2 = document.createElement('a');
  // div作成関数呼び出し
  create_a_2(Div_a_2,A_2,i);





}











//---------------------------------------------------------------------
// アイテム全てを入れるdiv
function create_div_all_item(mainElement,Div_all_item)
{
  // id属性を設定
  // Div_all_item.id = `Div_all_item-${i}`;
  Div_all_item.id = `Div_all_item-id`;

  // class属性設定
  Div_all_item.classList.add(`Div_all_item-class`);

  // div要素をmain要素に追加
  mainElement.appendChild(Div_all_item);
}


//---------------------------------------------------------------------
// 1要素全て入れるdiv作成関数
function create_div_item(Div_all_item, Div_item, i) 
{  
  // id属性を設定
  Div_item.id = `Div_item-${i}`;

  // class属性設定
  Div_item.classList.add(`Div_item-class`);
  
  // divの内容を設定（オプション）
  // Div_item.textContent = `This is div number ${i}`;
  // div要素を追加
  Div_all_item.appendChild(Div_item);
}


//---------------------------------------------------------------------
//modelviewer用div作成関数
function create_div_mv(Div_item, Div_mv, i)
{  
  // id属性を設定
  Div_mv.id = `Div_mv-${i}`;

  // class属性設定
  Div_mv.classList.add(`Div_mv-class`);

  
  // divの内容を設定（オプション）
  // Div_mv.textContent = `This is div number ${i}`;
  // div要素を追加
  Div_item.appendChild(Div_mv);
}


// midelViewer作成関数
function midelViewer_create_function(Div_mv, newModelViewer, i) 
{
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
  newModelViewer.setAttribute('interaction-prompt', 'none');  // デフォルトの操作プロンプト（「モデルを操作できますよ」という視覚的ヒント）を無効

  // スタイルを設定
  newModelViewer.style.width = '20.0rem';
  newModelViewer.style.height = '30.0rem';
  // newModelViewer.style.width = '8.0rem';
  // newModelViewer.style.height = '10.0rem';

  // model-viewer を "mv-0" クラスの要素に追加する
  Div_mv.appendChild(newModelViewer);
}


// ARButton作成関数
function midelViewer_arbutton_create(newModelViewer, newCustomARButton, i) 
{
  // newCustomARButton.id = 'custom-ar-button';
  newCustomARButton.classList.add(`custom-ar-button`); 
  newCustomARButton.id = `customArButton-${i}`;
  newCustomARButton.setAttribute('slot', 'ar-button');
  newCustomARButton.textContent = 'start'; // ボタンのテキストを設定
  
  // model-viewer にボタンを追加する
  newModelViewer.appendChild(newCustomARButton);

  // CSS
  // newCustomARButton.style.width = '1rem';
  // newCustomARButton.style.height = '0.2rem';
  // newCustomARButton.style.bottom = '1.6rem';
  // newCustomARButton.style.right = '1.6rem';
  // newCustomARButton.style.borderRadius = '0.6rem';
  // newCustomARButton.style.boxShadow = '0 0.2rem 0.4rem rgba(0, 0, 0, 0.25)';
  // newCustomARButton.style.backgroundColor  = 'white';
  // newCustomARButton.style.fontFamily = 'Futura, Helvetica Neue, sans-serif';
  // newCustomARButton.style.fontSize = '1rem';
  // newCustomARButton.style.fontWeight = '400';
  // newCustomARButton.style.position = 'absolute';
}


//---------------------------------------------------------------------
// aタグ1用div(名称用)
function create_div_a_1(Div_item,Div_a_1,i)
{
  // id属性を設定
  Div_a_1.id = `Div_a_1-${i}`;

  // class属性設定
  Div_a_1.classList.add(`Div_a_1-class`);

  
  // divの内容を設定（オプション）
  // Div_a_1.textContent = `This is div number ${i}`;
  // div要素をmain要素に追加
  Div_item.appendChild(Div_a_1);
}

// aタグ1(名称用)
function create_a_1(Div_a_1,A_1,i)
{
  // id属性を設定
  A_1.id = `A_1-${i}`;

  // class属性設定
  A_1.classList.add(`A_1-class`);


  // href属性を設定（ここでは例としてGoogleのURLを設定）
  A_1.href = 'https://www.google.com';

  // テキストコンテンツを設定（リンクの表示テキスト）
  A_1.textContent = 'nk';  

  // divの内容を設定（オプション）
  // Div_a_1.textContent = `This is div number ${i}`;
  // div要素をmain要素に追加
  Div_a_1.appendChild(A_1);
}


//---------------------------------------------------------------------
// aタグ1用div(名称用)
function create_div_a_2(Div_item,Div_a_2,i)
{
  // id属性を設定
  Div_a_2.id = `Div_a_2-${i}`;

  // class属性設定
  Div_a_2.classList.add(`Div_a_2-class`);

  
  // divの内容を設定（オプション）
  // Div_a_1.textContent = `This is div number ${i}`;
  // div要素をmain要素に追加
  Div_item.appendChild(Div_a_2);
}

// aタグ1(名称用)
function create_a_2(Div_a_2,A_2,i)
{
  // id属性を設定
  A_2.id = `A_2-${i}`;

  // class属性設定
  A_2.classList.add(`A_2-class`);

  // href属性を設定（ここでは例としてGoogleのURLを設定）
  A_2.href = 'https://www.google.com';

  // テキストコンテンツを設定（リンクの表示テキスト）
  A_2.textContent = 'nk';  

  // divの内容を設定（オプション）
  // Div_a_1.textContent = `This is div number ${i}`;
  // div要素をmain要素に追加
  Div_a_2.appendChild(A_2);
}



}





