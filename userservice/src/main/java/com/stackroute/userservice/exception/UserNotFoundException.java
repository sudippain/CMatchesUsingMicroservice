/**
 * 
 */
package com.stackroute.userservice.exception;

/**
 * @author ubuntu
 *
 */
public class UserNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5529833866229857888L;

	/**
	 * @param arg0
	 */
	public UserNotFoundException(String message) {
		super(message);
	}

}
