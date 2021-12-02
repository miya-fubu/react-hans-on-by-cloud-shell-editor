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

## 

