pdo<?php
require_once './config.php';

$pdo = null;

try {
  $pdo = new PDO($dsn, $user, $password);
  $sql = '
    CREATE TABLE IF NOT EXISTS users(
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(60) NOT NULL,
      furigana VARCHAR(60) NOT NULL,
      email VARCHAR(255) NOT NULL,
      age INT(11),
      address VARCHAR(255)
  )';

  echo ($pdo->query($sql)) ? 
    'テーブル users の作成が成功しました' :
    'テーブル users の作成を中断しました';

} catch (PDOException $ex) {
  exit(sprintf('データベースアクセスエラー：%s', $ex->getMessage()));
}
