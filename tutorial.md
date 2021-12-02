# ゼロから始めるReactハンズオン

## はじめに

本ガイドは、JavaScript(以下JS)を初めて触る人を対象としたReactハンズオンです。

本ガイドを修了することで、2015年以降の比較的モダンなJSで記載するReactを学ぶことができます。

***

**注意**

本ガイドでは、2015年以前の旧仕様のJSやReactを使用しないWebページの作成方法については触れません。


## Node.jsのインストール

まずはNode.jsをインストールしましょう

Node.jsはサーバーサイドのJS実行環境です。

本来JSは、ブラウザ上で動作することを目的として開発された言語です。ですが、ライブラリの適応や各種ブラウザで動作できるようにコードを変換するためには、JSのサーバーサイド実行環境が必要となります。

現在、一般的なサーバーサイドJS実行環境はNode.jsとDenoの2種が存在します。
Denoの方がより最新のものですが、安定稼働するとは言い難く、未だNode.jsが一般的なツールとして認識されているため、Denoを使用する必然性がない限りはNode.jsの利用を推奨します。

Cloud Shellを開いて、以下のコマンドを入力してください。

<walkthrough-open-cloud-shell-button></walkthrough-open-cloud-shell-button>

```bash
sudo apt install nodejs
```

installができましたら以下のコマンドを入力して、コードが動作することを確認してください。

```bash
node -v
```

## 最新のNode.jsをインストールする

Node.jsの[公式ページ](https://nodejs.org/ja/)を確認してください。

確認するとわかると思いますが、インストールしたNode.jsよりもメジャーバージョンがかなり進んでいることがわかるかと思います。

そのため、最新版のNode.jsを入手するために別途コマンドを入力する必要があります。

方法としては、以下の二つが挙げられます。

- a. NodeSourceが提供するNode.js公式のバイナリディストリビューション
- b. バージョンマネージャ

## a. NodeSourceが提供するNode.js公式のバイナリディストリビューション

Github上に存在する公式のNode.jsディストリビューションを適応して、apt経由でインストールできるようにします。

各バージョンのインストール方法については、[こちら](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)を参照してください。

## b. バージョンマネージャ

aの場合は手軽にアップデートが行えるという利点がありますが、下位バージョンへの切り替えが面倒というデメリットが存在します。
開発環境では、こちらの利用を推奨します。

Node.jsのパッケージマネージャとして有名なものは以下の二つです。

- n
- nvm

今回は、 `nvm` を用いて最新版のNode.jsをインストールします。

---

### nvmのGithubを確認する

コマンドを入力する前に、nvmのバージョンを確認します。  
[こちら](https://github.com/nvm-sh/nvm)のリンクより、nvmのgithubを確認してください

### nvmをインストールする

バージョンを控えたら、以下のコマンドを入力してください。
コマンド内の`{version}`は任意の値に書き換えてください

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/{version}/install.sh | bash
```

### nvmを使用して、最新のNode.jsをインストール

nvmは、最新版とltsにaliasが振られています。  
任意のバージョンを以下のコマンドのどちらかを使用してインストールしてください

```bash
nvm install node
```

```bash
nvm install --lts
```

また、以下のようにして任意のバージョンをインストールすることもできます。

```bash
nvm install v16.13.0
```

## 1章. 基礎文法を学ぶ

この章では、JSの基礎文法を学びます。  

章の終わりでは、実践演習として、既存のファイルを編集してFizzBuzzを実装していただきます。

## 1-1. 変数宣言

まず、変数宣言の方法を確認します。  
まず初めに、<walkthrough-editor-open-file filepath="./section1_base_syntax/variable.js">こちら</walkthrough-editor-open-file>をクリックして練習用のファイルを開いてください。

## 1-1-1. 変数宣言

開いたファイルの内容は、変数 foo と変数 bar の中身をコンソール上で実行するというものです。さっそく実行してみましょう。

editor上部にあるterminalから、新しいターミナルを開き以下のコマンドを実行してください。

```bash
node section1_base_syntax/variable.js
```

コマンドを実行後、以下の文章が表示されれば成功です。

```
I'm Pen
No, you are Tom
```

英語の教科書で見る一般的な例文です。  
このことから、`let`,`const` で変数を宣言するということが分かったかと思います。

## 1-1-2 letとconstの違い

この二つの違いを理解するために、実際に値を変化させてみましょう。  
Tomが自身がPenではなくTomだということを理解したので、変数 `foo` の中身を `I'm Tom` に変更します。

3行目に以下のコードを書き足してください。

```javascript
foo = "I'm Tom"
```

再び、ターミナルから以下のコマンドを実行します。

```bash
node section1_base_syntax/variable.js
```

すると、表示内容がいかに変化したかと思います。

```
I'm Tom
No, you are Tom
```

これで、 `foo` の中身を書き換えることができました。

それでは、fooを書き換えたことにより文章がおかしくなってしまったので、今度は変数 `bar` の中身を書き換えましょう。

4行目に以下のコードを書き足してください。

```
bar = 'Yes, you are Tom'
```

そして、ターミナルから以下のコマンドを実行します。

```bash
node section1_base_syntax/variable.js
```

すると今度は以下のエラーが出てしまったかと思います。

```
section1_base_syntax/variable.js:4
bar = 'Yes, you are Tom'
    ^
TypeError: Assignment to constant variable.
```

これが、letとconstの違いです。


## 1-1-3. constとは何か

`const`は、再代入が行えない変数宣言です。

再代入とは、先ほど行った一度宣言した変数に別の値を挿入する動作を指します。

一方で`let`は再代入が行える変数宣言です。  
先ほど確認できたように、`const`と`let`で動作が異なったのはこの仕様の違いが原因です。

昨今のフロントエンド界隈では、原則として`const`の使用を推奨することが多いです。  
これは、以下の一度宣言したstring型やnumber型の値が、宣言後に別の値に変化していないことが保証されているためです。

言葉だけでは理解が難しいかと思いますので、<walkthrough-editor-open-file filepath="./section1_base_syntax/deficult_ex.js">例題用のファイル</walkthrough-editor-open-file>を用意しました。

対象のファイルを見て、瞬時に変数 bar の値が何かを読み取ることは難しいかと思います。  
もちろん数秒あれば読み取ることは可のですが、これがより実践的なファイルであれば、より長く時間がかかること、場合によっては読み間違えることは十分に考えられるでしょう。

constの場合、それがstring型やnumber型である限りは、宣言した際の値と同じ値が入っていることが保証されているため、瞬時に変数の中身を読み取ることができます。

こうしたことから、原則として `const` を使うことが勧められています。

---

なお、注意点として、 `const` は定数ではないということに注意してください。  
あくまで、再代入が行えないだけです。例えば、`Array.pop()`や`Array.push()`を用いた配列操作などは再代入には当たらないため、たとえ`const`であっても値を書き換えることが可能です。

