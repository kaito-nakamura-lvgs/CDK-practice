# CDKでのネットワークリソース作成をお試しするためのリポジトリです

## 手順
1.まずクローンする
以下のURLからリポジトリをクローンする

`git@github.com:kaito-nakamura-lvgs/CDK-practice.git`

2.パッケージをインストールする

`npm install`

3.以下二つのファイルを作成する

- `.env.(環境名)`
- `.env`

`.env.(環境名)`ファイルを`.env.example`を見ながら編集する

.envの中身は空でok

4.リソースを呼び出す

`cdk-practice-stack`にてリソースを呼び出す

5.コマンドを実行

```
$ npm run build --env=<環境名>           #　.env.<環境名>を.envにコピー後、コードのビルドを実行
$ npx cdk ls                            # スタック名を確認
$ npx cdk diff   <スタック名>              # スタックの差分を確認
$ npx cdk deploy <スタック名>              # CDKのデプロイを実行
```
