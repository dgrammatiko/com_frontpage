<?php
/**
 * {{componentName}} Joomla Component
 *
 * @copyright  Copyright (C) 2016 Michael Babker. All rights reserved.
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 */

defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Language\Text;
use Joomla\CMS\MVC\Controller\BaseController;

/**
 * {{componentName}} Component Base Controller
 *
 * @since  1.0
 */
class {{componentName}}Controller extends BaseController {
  /**
   * Method to display a view.
   *
   * @param   boolean  $cachable   If true, the view output will be cached
   * @param   array    $urlparams  An array of safe url parameters and their variable types, for valid values see JFilterInput::clean().
   *
   * @return  $this
   *
   * @see     JFilterInput::clean()
   * @since   1.0
   */
  public function display($cachable = false, $urlparams = array()) {
    $cachable = Factory::getUser()->guest;

    /*
     * If the user's requesting a non-existing page and is using this as their default menu item, they'll get a "view not found" error.
     * If that's the error they received, convert it to a more generic and human friendly "content not found" message.
     */
    try {
      return parent::display($cachable, $urlparams);
    } catch (Exception $e) {
      $trace = $e->getTrace();

      $thrower = $trace[0];

      // If this is the "view not found" error, the thrower is JControllerLegacy::getView(); standardize to lowercased strings just in case
      if (strtolower($thrower['class']) === 'basecontroller' && strtolower($thrower['function']) === 'getview') {
        throw new Exception(Text::_('JERROR_LAYOUT_REQUESTED_RESOURCE_WAS_NOT_FOUND'), 404, $e);
      }

      // Some other error, just let it bubble up
      throw $e;
    }
  }
}
