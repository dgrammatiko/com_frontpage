<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2016 Michael Babker. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */
defined('_JEXEC') or die;

use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Uri\Uri;
use Joomla\CMS\Factory;

$document = Factory::getDocument();
$renderer = $document->loadRenderer('modules');

// Set the Document Title & Description (SEO)
$document->setTitle('Creating perfect grid layouts');
$document->setDescription('The best grid creation tool');

// The actual page renders 3 Module Positions
echo
$renderer->render('front-page-top', array('style' => 'raw'), null),
$renderer->render('front-page-middle', array('style' => 'raw'), null),
$renderer->render('front-page-bottom', array('style' => 'raw'), null);
