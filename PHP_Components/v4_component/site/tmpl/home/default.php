<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2021 Dimitris Grammatikogiannis. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */
defined('_JEXEC') or die;

$renderer = $this->document->loadRenderer('modules');
?>
<div><?= $renderer->render('front-page-top', [], null); ?></div>

<div><?= $renderer->render('front-page-middle', [], null); ?></div>

<div><?= $renderer->render('front-page-bottom', [], null); ?></div>
