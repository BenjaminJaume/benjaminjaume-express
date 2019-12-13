<?php
$host = "host = ec2-174-129-255-57.compute-1.amazonaws.com";
$port = "port = 5432";
$dbname = "dbname = d9i01p9llna461";
$credentials =
    "user = faaotfmmmurdll password=f2ced1ed29bf887139acaf764e1331cc6bbc6bafdb77e93dfff45b03618a91cc";

$db = pg_connect("$host $port $dbname $credentials");
if (!$db) {
    echo "Error : Unable to open database\n";
} else {
    echo "Opened database successfully\n";

    $result = pg_query($db, "SELECT * FROM projects");
    if (!$result) {
        echo "An error occurred.\n";
        exit();
    }

    while ($row = pg_fetch_row($result)) {
        echo "name: $row[1]  description: $row[2]";
        echo "<br />\n";
    }
}
?>
