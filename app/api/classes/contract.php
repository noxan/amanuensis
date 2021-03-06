<?php
/**
 * Handles the Contracts
 *
 * This file is part of the project codename "AMANUENSIS"
 *
 * @author Sebastian Antosch <s.antosch@i-san.de>
 * @copyright 2015 I-SAN.de Webdesign & Hosting GbR
 * @link http://i-san.de
 *
 * @license GPL
 */

if(!$thisisamanu)die('Direct access restricted');

require_once('classes/database/dbal.php');
require_once('classes/errorhandling/amaException.php');
require_once('classes/authentication/authenticator.php');
require_once('classes/project/amaItemList.php');
require_once('classes/project/amaProject.php');
require_once('classes/project/amaStream.php');

class contract {

    /**
     * This method reacts to GET Requests
     */
    public static function get()
    {
        Authenticator::onlyFor(0, 1);

        if(isset($_GET['id']) && $_GET['id'] != '')
        {
            self::getContract($_GET["id"]);
        }
        else
        {
            self::getContractList();
        }
    }


    /**
     * This methods reacts to POST Requests
     */
    public static function post()
    {
        Authenticator::onlyFor(0);

        if( !isset($_POST["id"]) || $_POST["id"]=='')
        {
            self::createContract();
        }
        else
        {
            self::modifyContract();
        }
    }

    /**
     * This methods reacts to DELETE Requests
     */
    public static function delete($_DELETE)
    {
        Authenticator::onlyFor(0);

        if(!isset($_DELETE["id"]) || $_DELETE["id"]=='')
        {
            $error = new amaException(NULL, 400, "No id specified");
            $error->renderJSONerror();
            $error->setHeaders();
        }
        else
        {
            self::deleteContract($_DELETE);
        }
    }

    /**
     * Gets a list of all Contracts
     */
    private static function getContractList()
    {
        $dbal = DBAL::getInstance();
        $result = $dbal->simpleSelect(
            'contracts',
            array(
                'id',
                'name',
                'description',
                'project',
                'refnumber',
                'date',
                'path'
            )
        );
        json_response($result);
    }

    /**
     * Gets a single Contract
     * @param $id - the id of the Contract to get
     */
    private static function getContract($id)
    {
        $dbal = DBAL::getInstance();
        $result = $dbal->simpleSelect(
            'contracts',
            array(
                'id',
                'name',
                'description',
                'project',
                'refnumber',
                'date',
                'path'
            ),
            array('id', $id),
            1
        );

        /* Add items */
        $itemlist = new AmaItemList('contract', $id);
        $result["items"] = $itemlist->entries;

        /* Add project data */
        $project = new AmaProject($result['project']);
        $result['project'] = $project->getProjectData();
        $result["costs"] = $itemlist->costs;

        json_response($result);
    }

    /**
     * creates a new Contract
     */
    private static function createContract()
    {
        $dbal = DBAL::getInstance();
        $id = $dbal->dynamicInsert(
            'contracts',
            array(
                'name',
                'description',
                'project',
                'refnumber',
                'date',
                'path'
            ),
            $_POST
        );

        $stream = AmaStream::getInstance();
        $stream->addItem('create','contract', $id);

        self::getContract($id);
    }

    /**
     * modifies a Contract
     */
    private static function modifyContract()
    {
        $dbal = DBAL::getInstance();
        $affectedid = $dbal->dynamicUpdate(
            'contracts',
            array('id', $_POST["id"]),
            array(
                'name',
                'description',
                'refnumber',
                'date',
                'path'
            ),
            $_POST);
        self::getContract($affectedid);
    }

    /**
     * deletes a Contract
     * @param $_DELETE
     */
    private static function deleteContract($_DELETE)
    {
        $dbal = DBAL::getInstance();
        try
        {
            $stream = AmaStream::getInstance();
            $stream->addItem('delete','contract', $_DELETE["id"]);

            $count = $dbal->deleteRow('contracts', array('id', $_DELETE['id']));
        }
        catch(Exception $e)
        {
            $error = new amaException($e);
            $error->renderJSONerror();
            $error->setHeaders();
            die();
        }

        if($count)
        {
            self::getContractList();
        }
        else
        {
            $error = new amaException(NULL, 404, "There was no Contract matching your criteria");
            $error->renderJSONerror();
            $error->setHeaders();
        }
    }

}