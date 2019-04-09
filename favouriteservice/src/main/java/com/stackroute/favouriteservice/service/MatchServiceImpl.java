package com.stackroute.favouriteservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.favouriteservice.domain.MatchCalender;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;

import com.stackroute.favouriteservice.repository.MatchRepository;


@Service
public class MatchServiceImpl implements MatchService {

	
	MatchRepository matchRepo;
	
	@Autowired
	public MatchServiceImpl(MatchRepository matchRepo) {
		super();
		this.matchRepo = matchRepo;
	}


	@Override
	public boolean saveMatch(MatchCalender match) throws MatchAlreadyExistsException {
		final MatchCalender object =matchRepo.findByUniqueMatchId(match.getName(),match.getUserId());
		
		if(object!=null){
			
			throw new MatchAlreadyExistsException("Could Not Save Match,Match Alreday Exists");
		}
		else{
		System.out.println("Match not present");
		matchRepo.save(match);
		}
		return true;
	}

	
	@Override
	public boolean deleteMatchById(int id) throws MatchNotFoundException {
		final Optional<MatchCalender> object =matchRepo.findById(id);
		if(!object.isPresent()){
			
			throw new MatchNotFoundException("Could Not Find Match, Match Not found");
		}
	
		matchRepo.deleteById(id);
		
		return true;
	}

	@Override
	public List<MatchCalender> getMyMatches(String userId) {
		return matchRepo.findByUserId(userId);
	}

}
