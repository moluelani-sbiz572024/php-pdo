<?php
require_once './config.php';

$pdo = null;

try {
  $pdo = new PDO($dsn, $user, $password);

  // $sql = 'SELECT name, furigana FROM users';
  // $stmt = $pdo->query($sql);
  // if (isset($_GET['keyword'])) {
  //   $keyword = $_GET['keyword'];
  // } else {
  //   $keyword = null;
  // }

  if (isset($_POST['keyword'])) {
    $keyword = $_POST['keyword'];
  } else {
    $keyword = null;
  }

  $sql = 'SELECT name, furigana FROM users WHERE furigana LIKE :keyword';
  $stmt = $pdo->prepare($sql);
  $partial_match = "%{$keyword}%";
  $stmt->bindValue(':keyword', $partial_match, PDO::PARAM_STR);
  $stmt->execute();

  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($results);

} catch (PDOException $ex) {
  exit($ex->getMessage());
}