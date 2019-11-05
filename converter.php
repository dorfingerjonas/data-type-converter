<?php
$search = $_POST['input'];
$types = [];

$search = str_replace(',', '.', $search);

if (is_numeric($search)) {
    if (strpos($search, '.')) {
        $types[] = "double";
    } else {
        $types[] = "int";
        $types[] = "string";
    }
} else {
    $types[] = "string";
}

echo json_encode($types);