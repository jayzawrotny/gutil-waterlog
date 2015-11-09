import TaskMessage from './taskmessage';
import {colors} from 'gulp-util';

/**
 * Action Message
 * An action message, used when a action has happened via gulp tasks.
 * 
 * @class
 * @extends {TaskMessage}
 * @property {Message} message - Instance to the message pieces
 * @property {string} type - Type of message this instance is
 * @property {string} plugin - Name of plugin log statement was called from
 * @property {string} icon - icon string to prepend when sending
 */
export default class ActionMessage extends TaskMessage {
  constructor(plugin) {
    // Call the parent constructor with the plugin & set the icon
    super(plugin); 
    this.icon = colors.gray('•');
    this.type = 'action';
  }
}

