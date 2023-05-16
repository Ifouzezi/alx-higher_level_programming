-- Prints the full description of the table first_table.
SELECT
    CONCAT('CREATE TABLE ', TABLE_NAME, ' (', GROUP_CONCAT(COLUMN_NAME, ' ', COLUMN_TYPE), ');') AS 'Create Table'
FROM
    INFORMATION_SCHEMA.TABLES
WHERE
    TABLE_SCHEMA = 'your_database_name' AND
    TABLE_NAME = 'first_table'
GROUP BY
    TABLE_NAME;

