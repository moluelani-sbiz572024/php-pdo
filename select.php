<?php
require_once './config.php';

try {
  $pdo = new PDO($dsn, $user, $password);
  $sql = 'SELECT id, name FROM users';

  $stmt = $pdo->query($sql);
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($results);
  
} catch (PDOException $ex) {
  exit(sprintf('データベースアクセスエラー： %s', $ex->getMessage()));
}