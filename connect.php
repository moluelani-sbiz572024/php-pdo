<?php
require_once './config.php';

try {
    $pdo = new PDO($dsn, $user, $password);
    echo 'データベースの接続に成功しました';

} catch (PDOException $ex) {
    exit(sprintf('データベース接続に失敗しました：%s', $ex->getMessage()));
}

