<?php
require_once './config.php';

try {
  $pdo = new PDO($dsn, $user, $password);

  if (isset($_GET['order'])) {
    $order = $_GET['order'];
  } else {
    $order = null;
  }

  $sql = 'SELECT id, name, age FROM users ORDER BY %s %s';
  if ($order === 'asc') {
    $sql = sprintf($sql, 'age', strtoupper($order));
  } else if ($order === 'desc') {
    $sql = sprintf($sql, 'age', strtolower($order));
  } else {
    $sql = trim(sprintf($sql, 'id', ''));
  }

  $stmt = $pdo->query($sql);
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($results);
  
} catch (PDOException $ex) {
  exit($ex->getMessage());
}