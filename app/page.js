'use client'; // クライアントコンポーネントとして指定

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# jQueryの基礎
## 初心者のための入門ガイド

---

## 目次
1. [jQueryとは？](#jquery-intro)
2. [なぜjQueryを使うのか？](#why-jquery)
3. [jQueryの基本構文](#jquery-syntax)
4. [セレクタの使い方](#jquery-selectors)
5. [DOM操作の基本](#dom-manipulation)
6. [イベント処理](#event-handling)
7. [アニメーション効果](#animation)
8. [Ajaxの基本](#ajax)
9. [実践的な例](#examples)
10. [jQueryとモダンJavaScript](#jquery-modern)
11. [まとめ](#summary)
12. [学習リソース](#resources)

---

## jQueryとは？

* **JavaScriptライブラリ**：jQueryはJavaScriptのコードを簡潔に書くためのライブラリです
* **2006年に開発**：John Resigによって開発され、今でも広く使われています
* **「Write Less, Do More」**：少ないコードでより多くの機能を実現することを目指しています
* **クロスブラウザ対応**：異なるブラウザでも一貫して動作します

---

## なぜjQueryを使うのか？

### 通常のJavaScriptと比較して：

**JavaScript（バニラJS）:**
\`\`\`javascript
document.getElementById('myElement').style.display = 'none';
document.getElementById('myElement').addEventListener('click', function() {
  console.log('クリックされました');
});
\`\`\`

**jQuery:**
\`\`\`javascript
$('#myElement').hide();
$('#myElement').click(function() {
  console.log('クリックされました');
});
\`\`\`

---

## jQueryの利点

* **コードの短縮**：少ない行数で同じ機能を実現
* **簡潔な構文**：読みやすく、書きやすい
* **クロスブラウザの互換性**：ブラウザごとの違いを気にする必要がない
* **豊富なプラグイン**：拡張機能が多数用意されている
* **大きなコミュニティ**：多くの開発者が使用していて情報が豊富

---

## jQueryの基本構文

### 基本形
\`\`\`javascript
$(セレクタ).アクション();
\`\`\`

### 例
\`\`\`javascript
$(document).ready(function() {
  // DOMが完全に読み込まれた後に実行されるコード
  $('h1').css('color', 'red');
});

// 短縮形
$(function() {
  $('h1').css('color', 'red');
});
\`\`\`

---

## セレクタの使い方

jQueryセレクタはCSSセレクタとよく似ています：

* **要素セレクタ**: \`$('h1')\` - すべての\`<h1>\`要素を選択
* **IDセレクタ**: \`$('#header')\` - ID「header」の要素を選択
* **クラスセレクタ**: \`$('.item')\` - クラス「item」の要素をすべて選択
* **複合セレクタ**: \`$('ul li')\` - \`<ul>\`内のすべての\`<li>\`要素を選択
* **属性セレクタ**: \`$('a[target="_blank"]')\` - target="_blank"属性を持つすべてのリンクを選択

---

## DOM操作の基本

### 内容の変更
\`\`\`javascript
// テキストの取得・設定
$('#myElement').text('新しいテキスト');

// HTMLの取得・設定
$('#myElement').html('<strong>太字のテキスト</strong>');

// 値の取得・設定（フォーム要素）
$('#myInput').val('入力値');
\`\`\`

---

## DOM操作の基本（続き）

### 要素の追加・削除
\`\`\`javascript
// 要素の末尾に追加
$('#myList').append('<li>新しい項目</li>');

// 要素の先頭に追加
$('#myList').prepend('<li>最初の項目</li>');

// 要素の前に追加
$('#myElement').before('<div>前に追加</div>');

// 要素の後に追加
$('#myElement').after('<div>後に追加</div>');

// 要素の削除
$('#myElement').remove();
\`\`\`

---

## DOM操作の基本（続き）

### CSSの操作
\`\`\`javascript
// 単一のスタイル設定
$('#myElement').css('color', 'blue');

// 複数のスタイル設定
$('#myElement').css({
  'color': 'blue',
  'font-size': '18px',
  'background-color': '#f0f0f0'
});

// クラスの追加と削除
$('#myElement').addClass('highlight');
$('#myElement').removeClass('highlight');
$('#myElement').toggleClass('highlight');
\`\`\`

---

## イベント処理

### 一般的なイベント
\`\`\`javascript
// クリックイベント
$('#myButton').click(function() {
  alert('ボタンがクリックされました');
});

// マウスオーバー
$('#myElement').hover(
  function() { $(this).addClass('highlight'); },   // マウスが上に来たとき
  function() { $(this).removeClass('highlight'); } // マウスが離れたとき
);

// フォーム送信
$('#myForm').submit(function(event) {
  event.preventDefault(); // デフォルトの送信をキャンセル
  alert('フォームが送信されました');
});
\`\`\`

---

## イベント処理（続き）

### イベントの簡単な書き方
\`\`\`javascript
// on()メソッドを使った書き方
$('#myButton').on('click', function() {
  alert('ボタンがクリックされました');
});

// 複数のイベントを一度に設定
$('#myElement').on({
  'click': function() { alert('クリックされました'); },
  'mouseenter': function() { $(this).addClass('highlight'); },
  'mouseleave': function() { $(this).removeClass('highlight'); }
});
\`\`\`

---

## アニメーション効果

### 基本的なエフェクト
\`\`\`javascript
// 表示/非表示
$('#myElement').hide();
$('#myElement').show();
$('#myElement').toggle();

// フェードイン/フェードアウト
$('#myElement').fadeIn(1000); // 1秒かけてフェードイン
$('#myElement').fadeOut(500); // 0.5秒かけてフェードアウト
$('#myElement').fadeToggle();

// スライドアップ/スライドダウン
$('#myElement').slideUp();
$('#myElement').slideDown();
$('#myElement').slideToggle();
\`\`\`

---

## アニメーション効果（続き）

### カスタムアニメーション
\`\`\`javascript
// animate()メソッド
$('#myElement').animate({
  opacity: 0.5,
  width: '70%',
  height: '200px',
  marginLeft: '30px'
}, 1000, function() {
  alert('アニメーションが完了しました');
});

// アニメーションの連鎖
$('#myElement')
  .slideUp(500)
  .delay(1000)
  .slideDown(500);
\`\`\`

---

## Ajaxの基本

### データの取得
\`\`\`javascript
// GETリクエスト
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(response) {
    console.log('データの取得に成功しました', response);
  },
  error: function(xhr) {
    console.log('エラーが発生しました', xhr);
  }
});

// 簡略化したGETリクエスト
$.get('https://api.example.com/data', function(data) {
  console.log('データ:', data);
});
\`\`\`

---

## Ajaxの基本（続き）

### データの送信
\`\`\`javascript
// POSTリクエスト
$.ajax({
  url: 'https://api.example.com/save',
  method: 'POST',
  data: { name: '山田太郎', age: 30 },
  success: function(response) {
    console.log('データの送信に成功しました', response);
  },
  error: function(xhr) {
    console.log('エラーが発生しました', xhr);
  }
});

// 簡略化したPOSTリクエスト
$.post('https://api.example.com/save', 
       { name: '山田太郎', age: 30 }, 
       function(response) {
         console.log('レスポンス:', response);
       });
\`\`\`

---

## 実践的な例：タブパネル

\`\`\`html
<div class="tabs">
  <ul class="tab-buttons">
    <li><a href="#tab1">タブ1</a></li>
    <li><a href="#tab2">タブ2</a></li>
    <li><a href="#tab3">タブ3</a></li>
  </ul>
  <div class="tab-contents">
    <div id="tab1" class="tab-content">タブ1のコンテンツ</div>
    <div id="tab2" class="tab-content">タブ2のコンテンツ</div>
    <div id="tab3" class="tab-content">タブ3のコンテンツ</div>
  </div>
</div>
\`\`\`

\`\`\`javascript
$(function() {
  // 初期状態：最初のタブ以外を非表示
  $('.tab-content:not(:first)').hide();
  
  // タブクリック時の処理
  $('.tab-buttons a').click(function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('.tab-content').hide();
    $(target).show();
    $('.tab-buttons a').removeClass('active');
    $(this).addClass('active');
  });
});
\`\`\`

---

## 実践的な例：フォームバリデーション

\`\`\`html
<form id="myForm">
  <div>
    <label>名前：</label>
    <input type="text" id="name" required>
  </div>
  <div>
    <label>メール：</label>
    <input type="email" id="email" required>
  </div>
  <button type="submit">送信</button>
</form>
<div id="errorMessage"></div>
\`\`\`

\`\`\`javascript
$(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault();
    $('#errorMessage').empty();
    
    // バリデーション
    let isValid = true;
    if ($('#name').val() === '') {
      $('#errorMessage').append('<p>名前を入力してください</p>');
      isValid = false;
    }
    if ($('#email').val() === '' || !isValidEmail($('#email').val())) {
      $('#errorMessage').append('<p>有効なメールアドレスを入力してください</p>');
      isValid = false;
    }
    
    if (isValid) {
      alert('フォームが正常に送信されました！');
      this.reset();
    }
  });
  
  function isValidEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }
});
\`\`\`

---

## jQueryとモダンJavaScript

### jQueryの現状
* jQueryは依然として多くのウェブサイトで使用されています
* 求人市場でもまだ需要があります
* レガシープロジェクトのメンテナンスには必須のスキルです

### モダンな代替手段
* **バニラJS**：モダンJavaScriptはより強力になり、多くのjQuery機能が不要に
* **フレームワーク**：React、Vue、Angularなどがより複雑なアプリ開発に適しています
* **新しいAPIと機能**：Fetch API、CSS Animations、ES6+の機能など

---

## まとめ

* jQueryは**JavaScriptの操作を簡素化**するためのライブラリです
* **短く簡潔なコード**で複雑な処理を実現できます
* **DOM操作**、**イベント処理**、**アニメーション**、**Ajax**などの機能が充実
* 初心者にも**使いやすい構文**と**豊富なドキュメント**があります
* **広く使われている**ため、情報やリソースが豊富です

---

## 学習リソース

* **公式ドキュメント**: [jQuery.com](https://jquery.com/)
* **MDN Web Docs**: [jQuery入門](https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/jQuery_Introduction)
* **ドットインストール**: jQueryレッスン
* **Progate**: jQueryコース
* **書籍**: 「jQuery入門」、「JavaScript & jQueryの新しい教科書」など

---

`;

export default function Page() {
  const [activeTab, setActiveTab] = useState('intro');
  
  // スムーズスクロールとアンカーリンクの制御のためのEffect
  useEffect(() => {
    if (activeTab === 'intro') {
      // ハッシュリンクがクリックされたとき
      const handleAnchorClick = (event) => {
        const target = event.target;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          event.preventDefault();
          const id = target.getAttribute('href').substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      
      // 各章にIDを割り当てるための関数
      const addIdsToHeadings = () => {
        const headings = document.querySelectorAll('.prose h2');
        const idMapping = {
          'jQueryとは？': 'jquery-intro',
          'なぜjQueryを使うのか？': 'why-jquery',
          'jQueryの基本構文': 'jquery-syntax',
          'セレクタの使い方': 'jquery-selectors',
          'DOM操作の基本': 'dom-manipulation',
          'イベント処理': 'event-handling',
          'アニメーション効果': 'animation',
          'Ajaxの基本': 'ajax',
          '実践的な例：タブパネル': 'examples',
          'jQueryとモダンJavaScript': 'jquery-modern',
          'まとめ': 'summary',
          '学習リソース': 'resources'
        };
        
        headings.forEach(heading => {
          const headingText = heading.textContent.trim();
          if (idMapping[headingText]) {
            heading.id = idMapping[headingText];
          }
        });
      };
      
      // ページが描画された後にIDを設定し、リンクにイベントリスナーを追加
      setTimeout(() => {
        addIdsToHeadings();
        const content = document.querySelector('.prose');
        if (content) {
          content.addEventListener('click', handleAnchorClick);
        }
      }, 500);
      
      // クリーンアップ関数
      return () => {
        const content = document.querySelector('.prose');
        if (content) {
          content.removeEventListener('click', handleAnchorClick);
        }
      };
    }
  }, [activeTab]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-3">jQuery入門ガイド</h1>
          <p className="text-xl opacity-90">初心者のためのjQueryの基本を学ぼう</p>
        </header>
        
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <nav className="flex overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab('intro')} 
              className={`px-4 py-2 mr-2 rounded-md transition-colors ${activeTab === 'intro' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
            >
              ガイド
            </button>
            <button 
              onClick={() => setActiveTab('resources')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'resources' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
            >
              学習リソース
            </button>
          </nav>
        </div>
        
        <main>
          {activeTab === 'intro' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 prose prose-lg max-w-none dark:prose-invert">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">jQuery学習リソース</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-purple-600 dark:text-purple-400 text-3xl mb-2">📚</div>
                  <h3 className="text-lg font-semibold mb-2">公式ドキュメント</h3>
                  <p className="text-gray-600 dark:text-gray-300">jQuery.comの公式サイトで最新の情報を確認しましょう</p>
                </a>
                
                <a href="https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/jQuery_Introduction" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-blue-600 dark:text-blue-400 text-3xl mb-2">🌐</div>
                  <h3 className="text-lg font-semibold mb-2">MDN Web Docs</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mozilla開発者ネットワークの充実したガイドで学びましょう</p>
                </a>
                
                <a href="https://www.w3schools.com/jquery/" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-green-600 dark:text-green-400 text-3xl mb-2">🎓</div>
                  <h3 className="text-lg font-semibold mb-2">W3Schools</h3>
                  <p className="text-gray-600 dark:text-gray-300">インタラクティブな例題で実践的に学べるリソースです</p>
                </a>
                
                <a href="https://dotinstall.com/" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-red-600 dark:text-red-400 text-3xl mb-2">🎬</div>
                  <h3 className="text-lg font-semibold mb-2">ドットインストール</h3>
                  <p className="text-gray-600 dark:text-gray-300">3分動画で手軽に学べる日本語の学習サイト</p>
                </a>
                
                <a href="https://progate.com/" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">💻</div>
                  <h3 className="text-lg font-semibold mb-2">Progate</h3>
                  <p className="text-gray-600 dark:text-gray-300">ブラウザで学べる初心者向けのプログラミング学習サイト</p>
                </a>
                
                <a href="https://github.com/petehunt/jquery-guide" target="_blank" rel="noopener noreferrer" className="card p-5 hover:no-underline">
                  <div className="text-gray-700 dark:text-gray-300 text-3xl mb-2">📖</div>
                  <h3 className="text-lg font-semibold mb-2">GitHub リポジトリ</h3>
                  <p className="text-gray-600 dark:text-gray-300">サンプルコードや実践的なjQueryプロジェクト</p>
                </a>
              </div>
            </div>
          )}
        </main>
        
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 jQuery入門ガイド - 初心者のための学習リソース</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              プライバシーポリシー
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              お問い合わせ
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              サイトマップ
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
} 