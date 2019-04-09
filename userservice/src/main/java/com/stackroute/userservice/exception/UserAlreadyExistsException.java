/**
 * 
 */
package com.stackroute.userservice.exception;

/**
 * @author ubuntu
 *
 */
public class UserAlreadyExistsException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2547317032607976157L;

	/**
	 * @param arg0
	 */
	public UserAlreadyExistsException(String message) {
		super(message);
	}

}
