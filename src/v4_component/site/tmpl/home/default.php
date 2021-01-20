<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2016 Dimitris Grammatikogiannis. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */
defined('_JEXEC') or die;

use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Uri\Uri;
use Joomla\CMS\Factory;

$document = Factory::getDocument();
$renderer = $document->loadRenderer('modules');

// Alternative method
$document->setTitle('Creating perfect grid layouts');
$document->setDescription('The best grid creation tool');

// The actual page:
echo
$renderer->render('some-module-position', array('style' => 'raw'), null),
$renderer->render('some-other-module-position', array('style' => 'raw'), null);
