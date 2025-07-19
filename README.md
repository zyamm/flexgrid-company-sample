# FlexGrid Company InternalKey Sample

## 概要

WijmoのFlexGridを使って、会社コードに連番を付与したinternalKeyで一意化・表示するサンプルです。

## 特徴

- 国コードごとの会社選択肢をフィルタリング
- FlexGrid編集時にinternalKeyを使用
- 保存時にcompanyCodeに戻して出力

## 実行方法

1. このフォルダをローカルに保存
2. `index.html` をブラウザで開く
3. FlexGrid上で会社を選択し、「保存」ボタンを押す
4. コンソールに `companyCode` が出力される

## ファイル構成

- index.html: 画面構造
- style.css: スタイル
- script.js: 処理ロジック
- README.md: 説明書

## 必要ライブラリ

CDN経由でWijmoを読み込み済みのため、追加のインストールは不要です。
