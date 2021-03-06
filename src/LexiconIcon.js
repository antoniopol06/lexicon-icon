import Component from 'metal-component';
import core from 'metal/src/core';
import Soy from 'metal-soy';

import templates from './LexiconIcon.soy';

/**
 * Implementation of the Lexicon Icon Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/icons-lexicon/|Lexicon Definition}
 */
class LexiconIcon extends Component {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconIcon.STATE = {
	/**
	 * CSS class (or list of classes) for styling the icon's main container
	 * @type {string}
	 */
	cssClass: {
		validator: core.isString
	},

	/**
	 * Path to the hosted lexicon icons.svg file with the icons
	 * @type {string}
	 */
	sprite: {
		validator: core.isString
	},

	/**
	 * Id of the icon to show from the list of available icons
	 * @type {string}
	 */
	symbol: {
		validator: core.isString
	}
};

// Register component
Soy.register(LexiconIcon, templates);

export default LexiconIcon;