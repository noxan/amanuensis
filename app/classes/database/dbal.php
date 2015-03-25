<?php
/**
 * Database Abstraction Layer, uses PDO, implements Singleton pattern (we only want ONE DB connection)
 *
 * This file is part of the project codename "AMANUENSIS"
 *
 * @author Sebastian Antosch <s.antosch@i-san.de>
 * @copyright 2015 I-SAN.de Webdesign & Hosting GbR
 * @link http://i-san.de
 *
 * @license GPL
 */

require_once('classes/config/config.php');
require_once('classes/errorhandling/amaException.php');

final class DBAL {

    protected static $instance;

    /**
     * Will return the instance of the DBAL
     * @return DBAL- a DBAL object
     */
    public static function getInstance()
    {
        if(self::$instance == NULL)
        {
            self::$instance = new DBAL();
        }
        return self::$instance;
    }

    /**
     * Manage proper cloning
     * @return DBAL - a DBAL instance
     */

    private function __clone(){
        return self::getInstance();
    }

    /**
     * Constructor will create the Database connection
     */
    private function __construct()
    {
        try
        {
            $conf = Config::getInstance();

            $dbhost = $conf->get["db"]["host"];
            $dbport = $conf->get["db"]["port"];
            $dbname = $conf->get["db"]["database"];

            $this->connection = new PDO("mysql:host=".$dbhost.";port=".$dbport.";dbname=".$dbname."", $conf->get["db"]["user"], $conf->get["db"]["password"]);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(Exception $e)
        {
            $error = new amaException($e);
            $error->renderJSONerror();
            $error->setHeaders();
            die();
        }
    }

    /**
     * Returns a PDO prepared statement
     * @param String $query - the query to be prepared
     * @return PDOstatement
     */
    public function prepare($query)
    {
        return $this->connection->prepare($query);
    }

    /**
     * Takes a tablename, a list of column names to be inserted and and array of data containing the data that should be inserted
     * @param string $table - the name of the table to insert into,
     * @param array $columns - the column names that should be inserted
     * @param array $data - an array that holds the data that should be inserted
     */
    public function dynamicInsert($table, array $columns, array $data)
    {
        /* Check if is set */
        $realcolumns = array();
        foreach($columns as $column)
        {
            if(isset($data[$column]) && $data[$column] != '')
            {
                array_push($realcolumns, $column);
            }
        }

        if(count($realcolumns))
        {
            /* Build query */
            $query = "  INSERT INTO ".$table." (".implode(',',$realcolumns).")
                        VALUES (".implode(',', array_map(function($x){return ':'.$x;},$realcolumns)).")";

            $q = $this->prepare($query);

            /* Bind data */
            foreach($realcolumns as $column)
            {
                $q->bindParam(':'.$column, $data[$column]);
            }

            $q->execute();

        }
        else
        {
            $error = new amaException(NULL, 400, 'Not a single usable param was sent!');
        }


    }


}