// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let shops = data.results.shop;

  let count = 1;
  for (let shop of shops){
    console.log(count+ "件目の検索結果");
    console.log("店名: " + shop.name);
    console.log("アクセス" + shop.access);
    console.log("住所: " + shop.address);
    console.log("予算: " + shop.budget.name);
    console.log("キャッチコピー: " + shop.catch);
    console.log("ジャンル: " + shop.genre.name);
    console.log("最寄駅: " + shop.station_name);
    console.log("サブジャンル: "+shop.sub_genre.name);
    console.log("");

    count++;
  }
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let oldResult = document.getElementById('zentai');
  if (oldResult) {
    oldResult.remove();
  }

  let resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result');

  resultDiv.id = 'zentai';

  document.body.insertAdjacentElement('beforeend', resultDiv);

  let shops = data.results.shop;
  let count = 1;
  for (let shop of shops) {
    // 店舗カード div.shop-card
    let shopCard = document.createElement('div');
    shopCard.classList.add('shop-card');

    // 画像 img.shop-img
    let img = document.createElement('img');
    img.classList.add('shop-img');
    img.setAttribute('src', shop.photo.pc.m);   // 中サイズ画像を使用
    img.setAttribute('alt', shop.name);
    shopCard.insertAdjacentElement('beforeend', img);

    // 情報 div.shop-info
    let info = document.createElement('div');
    info.classList.add('shop-info');

    // 店名 h3
    let h3 = document.createElement('h3');
    h3.textContent = shop.name;
    info.insertAdjacentElement('beforeend', h3);

    // 住所
    let address = document.createElement('p');
    address.innerHTML = "<strong>住所:</strong> " + shop.address;
    info.insertAdjacentElement('beforeend', address);

    // 予算
    let budget = document.createElement('p');
    budget.innerHTML = "<strong>予算:</strong> " + shop.budget.name;
    info.insertAdjacentElement('beforeend', budget);

    // キャッチコピー
    let catchcopy = document.createElement('p');
    catchcopy.innerHTML = "<strong>キャッチコピー:</strong> " + shop.catch;
    info.insertAdjacentElement('beforeend', catchcopy);

    // ジャンル
    let genre = document.createElement('p');
    genre.innerHTML = "<strong>ジャンル:</strong> " + shop.genre.name;
    info.insertAdjacentElement('beforeend', genre);

    // 営業時間
    let open = document.createElement('p');
    open.innerHTML = "<strong>営業日時:</strong> " + shop.open;
    info.insertAdjacentElement('beforeend', open);

    // アクセス
    let access = document.createElement('p');
    access.innerHTML = "<strong>アクセス:</strong> " + shop.access;
    info.insertAdjacentElement('beforeend', access);

    // 最寄駅
    let station = document.createElement('p');
    station.innerHTML = "<strong>最寄駅:</strong> " + shop.station_name;
    info.insertAdjacentElement('beforeend', station);

    // infoをshopCardに追加
    shopCard.insertAdjacentElement('beforeend', info);

    // shopCardをresultDivに追加
    resultDiv.insertAdjacentElement('beforeend', shopCard);

    count++;
  }
  let countP = document.createElement('p');
  countP.textContent = "検索結果 件数：" + (count - 1) + "件";
  resultDiv.insertAdjacentElement('beforeend', countP);

  let end = document.createElement('p');
    end.textContent = "検索結果は以上です。";
    resultDiv.insertAdjacentElement('beforeend', end);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let btn = document.querySelector('button#calc');
btn.addEventListener('click',sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let kensakunaiyou = document.querySelector('input[name="kensaku"]');
  let kensaku = kensakunaiyou.value;
  console.log("検索キー:"+kensaku);

    let genreCode = getGenreCode(kensaku);

    if (genreCode !== null) {
      kensaku = genreCode;
      document.getElementById('message').textContent = "";
    }else{
       let oldResult = document.getElementById('zentai');
       if (oldResult) {
        oldResult.remove();
      }
      let msgElem = document.getElementById('message');
      let msg = "入力されたジャンルがありません。以下のジャンル、またはキーを入力してください。\n\n";
      for (let i = 0; i < genreNames.length; i++) {
        msg += genreNames[i] + " : " + genreKeys[i] + "\n";
      }
      msgElem.textContent = msg;
      return; 
    }

    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+kensaku+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

//検索を楽にするため、「カフェ」などの言葉をジャンルのキーに対応するための配列と機能

function getGenreCode(kensaku) {
  // 名前で検索
  for (let i = 0; i < genreNames.length; i++) {
    if (kensaku === genreNames[i]) {
      return genreKeys[i];
    }
  }

  // 直接コード検索
  for (let i = 0; i < genreKeys.length; i++) {
    if (kensaku === genreKeys[i]) {
      return kensaku;
    }
  }

  return null;
}


const genreNames = [
  "居酒屋", "ダイニングバー", "創作料理", "和食", "洋食",
  "イタリアン", "中華", "焼肉", "アジア", "各国料理",
  "カラオケ", "バー", "ラーメン", "カフェ", "その他",
  "お好み焼き", "韓国"
];

const genreKeys = [
  "G001", "G002", "G003", "G004", "G005",
  "G006", "G007", "G008", "G009", "G010",
  "G011", "G012", "G013", "G014", "G015",
  "G016", "G017"
];


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    printDom(data);
    
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}