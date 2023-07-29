<?php
include_once('Connect.php');

$nome = $_POST['inNome'];
$altura = $_POST['inAltura'];
$peso = $_POST['inPeso'];
$convenio = $_POST['inConvenio'];

$sql = "INSERT INTO pessoas(nome, altura, peso, convenio) VALUES (:nome, :altura, :peso, :convenio)";

$statement = $conn->prepare($sql);
$statement->bindParam(':nome', $nome);
$statement->bindParam(':altura', $altura);
$statement->bindParam(':peso', $peso);
$statement->bindParam(':convenio', $convenio);
try {
    $statement->execute();
    echo 'Dados inseridos com sucesso!';
} catch (Exception $e) {
    echo 'Erro ao inserir os dados: ' . $e->getMessage();
}
?>