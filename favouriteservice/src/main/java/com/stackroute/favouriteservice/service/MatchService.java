package com.stackroute.favouriteservice.service;

import java.util.List;



import com.stackroute.favouriteservice.domain.MatchCalender;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;


public interface MatchService {

	boolean saveMatch(MatchCalender movie) throws MatchAlreadyExistsException;
	
	boolean deleteMatchById(int id) throws MatchNotFoundException;
	
	List<MatchCalender> getMyMatches(String userId);
}
