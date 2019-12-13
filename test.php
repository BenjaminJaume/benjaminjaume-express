<?php
    $db_connection = pg_connect("host=ec2-174-129-255-57.compute-1.amazonaws.com port=5432 dbname=d9i01p9llna461 user=faaotfmmmurdll password=f2ced1ed29bf887139acaf764e1331cc6bbc6bafdb77e93dfff45b03618a91cc");

    $result = pg_query($db_connection, 'SELECT * FROM users');

    echo $result;
?>  