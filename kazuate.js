// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する

// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button#calc');
b.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu++;
    document.querySelector('#kaisu').textContent = kaisu;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yosoInput = document.querySelector('input[name="setumei"]'); 
    let yosoStr = yosoInput.value; 
    let yoso = Number(yosoStr);

  document.querySelector('#answer').textContent = yoso;

    console.log(kaisu+'回目の予想: '+yoso);
    if (kaisu >= 4){
        document.querySelector('#result').textContent = '答えは '+kotae+' でした。すでにゲームは終わっています';
    }else if (yoso === kotae){
        document.querySelector('#result').textContent = '正解です。おめでとう!';
        kaisu = 4;
    }else {
        if (kaisu === 3){
            document.querySelector('#result').textContent = 'まちがい。残念でした答えは '+kotae+' でした';
        }else if (yoso > kotae){
        document.querySelector('#result').textContent = 'まちがい。答えはもっと小さいですよ';
    }else {
       document.querySelector('#result').textContent = 'まちがい。答えはもっと大きいですよ';
    }
    }

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
