const { submitQuery } = require("~root/lib/database");

const getTableNames = () => submitQuery`
    SELECT 
    table_name as tableName 
    FROM information_schema.TABLES 
    WHERE table_schema = "deploying_my_first_nodejs_app_db";
`;

module.exports = getTableNames;
