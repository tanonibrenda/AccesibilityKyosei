<?php
header('Content-Type: application/json');

$host = "auth-db848.hstgr.io"; // ⚠️ Reemplaza con tu host real
$user = "u419252749_admin";
$password = "TU_CONTRASEÑA";
$database = "u419252749_alumnos";

// Conectar a la base de datos
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión a la base de datos"]));
}

// Capturar datos enviados por el formulario
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];
$pais = $_POST["pais"];
$email = $_POST["email"];
$whatsapp = $_POST["whatsapp"];
$curso = $_POST["curso"];
$pago = $_POST["pago"];

// Insertar en la base de datos
$sql = "INSERT INTO alumnos (nombre, apellido, edad, pais, email, whatsapp, curso, metodo_pago)
        VALUES ('$nombre', '$apellido', $edad, '$pais', '$email', '$whatsapp', '$curso', '$pago')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["mensaje" => "Alumno registrado correctamente"]);
} else {
    echo json_encode(["error" => "Error al registrar alumno: " . $conn->error]);
}

$conn->close();
?>