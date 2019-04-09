package com.stackroute.favouriteservice.exception;
@SuppressWarnings("serial")
public class MatchNotFoundException extends Exception {

	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MatchNotFoundException(String message) {
		super(message);
		this.message = message;
	}

	@Override
	public String toString() {
		return "MatchNotFoundException [message=" + message + "]";
	}

}
