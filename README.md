# データベースアクセス・サンプル（PHP）

## 概要

- データベース「MySQL」を使ったデータベースアクセスサンプル
- PHP/PDOを使用
- Axiosを用いた非同期処理型アプリに改造

## 動作準備

1. `config.php` の設定を自分の環境に合わせる
1. 初期データは、`users_table_dummy.csv` でインポートしておく
1. テーブル`users`の構造は以下の通り

**config.php**
```php
<?php
$db_name = 'php_db';
$db_host = '192.168.0.46';

$dsn = sprintf(
    'mysql:dbname=%s;host=%s;charset=utf8mb4',
    $db_name, $db_host
);
$user = 'samurai';
$password = 'Passw0rd';
```

**テーブルusers構造**
```sql
mysql> desc users;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int          | NO   | PRI | NULL    | auto_increment |
| name     | varchar(60)  | NO   |     | NULL    |                |
| furigana | varchar(60)  | NO   |     | NULL    |                |
| email    | varchar(255) | NO   |     | NULL    |                |
| age      | int          | YES  |     | NULL    |                |
| address  | varchar(255) | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql>
```