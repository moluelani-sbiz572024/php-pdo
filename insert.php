<?php
require_once './config.php';

$pdo = null;

try {
  $pdo = new PDO($dsn, $user, $password);

  $sql = '
    INSERT INTO users (name, furigana, email, age, address)
    VALUES (:name, :furigana, :email, :age, :address)
  ';

  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(':name',     $_POST['user_name'], PDO::PARAM_STR);
  $stmt->bindValue(':furigana', $_POST['user_furigana'], PDO::PARAM_STR);
  $stmt->bindValue(':email',    $_POST['user_email'], PDO::PARAM_STR);
  $stmt->bindValue(':age',      $_POST['user_age'], PDO::PARAM_INT);
  $stmt->bindValue(':address',  $_POST['user_address'], PDO::PARAM_STR);

  $stmt->execute();

  // header('Location: select.php');
  echo 'テーブル参照して確認願います';
  // echo sprintf(
  //   '%s|%s|%s|%s|%s|',
  //   $_POST['user_name'], $_POST['user_furigana'], $_POST['user_email'], $_POST['user_age'], $_POST['user_address']
  // );

} catch (PDOException $ex) {
  exit($ex->getMessage());
}