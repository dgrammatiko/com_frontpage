<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2016 Michael Babker. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */

defined('_JEXEC') or die;

use Joomla\CMS\MVC\View\HtmlView as BaseHtmlView;

/**
 * Default HTML view class
 *
 * @since  1.0
 */
class {{componentName}}ViewDefault extends BaseHtmlView {
  /**
   * Display the view
   *
   * @param   string  $tpl  The name of the template file to parse
   *
   * @return  mixed  A string if successful, otherwise a JError object.
   *
   * @since   1.0
   */
  public function display($tpl = null) {
    $app = JFactory::getApplication();

    $params = $app->getParams();

    $title = $params->get('page_title', '');

    if (empty($title)) {
      $title = $app->get('sitename');
    } elseif ($app->get('sitename_pagetitles', 0) == 1) {
      $title = JText::sprintf('JPAGETITLE', $app->get('sitename'), $title);
    } elseif ($app->get('sitename_pagetitles', 0) == 2) {
      $title = JText::sprintf('JPAGETITLE', $title, $app->get('sitename'));
    }

    $this->document->setTitle($title);

    if ($params->get('menu-meta_description')) {
      $this->document->setDescription($params->get('menu-meta_description'));
    }

    if ($params->get('menu-meta_keywords')) {
      $this->document->setMetaData('keywords', $params->get('menu-meta_keywords'));
    }

    if ($params->get('robots')) {
      $this->document->setMetaData('robots', $params->get('robots'));
    }

    return parent::display($tpl);
  }
}
