<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2016 Michael Babker. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */
use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\BaseController;

defined('_JEXEC') or die;

$controller = BaseController::getInstance('{{componentName}}');
$controller->execute(Factory::getApplication()->input->get('task', '', 'cmd'));
$controller->redirect();
