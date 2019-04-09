package com.stackroute.favouriteservice.exception;
@SuppressWarnings("serial")
public class MatchAlreadyExistsException extends Exception {

	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MatchAlreadyExistsException(String message) {
		super(message);
		this.message = message;
	}

	@Override
	public String toString() {
		return "MatchAlreadyExistsException [message=" + message + "]";
	}
	
}

