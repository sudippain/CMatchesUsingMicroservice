package com.stackroute.favouriteservice.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.favouriteservice.domain.MatchCalender;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;
import com.stackroute.favouriteservice.service.MatchService;


import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/api/v1/match")
@CrossOrigin
public class MatchController {
	private MatchService matchService;

	public MatchController(MatchService matchService) {
		this.matchService = matchService;
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> saveNewMatch(@RequestBody final MatchCalender match, final HttpServletRequest request,
			final HttpServletResponse response) {
		
		System.out.println("Inside Controller");
		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
		ResponseEntity<?> responseEntity;
		try{
			match.setUserId(userId);
		 
			matchService.saveMatch(match);
			responseEntity=new ResponseEntity<MatchCalender>(match,HttpStatus.CREATED);
		
		} catch(MatchAlreadyExistsException e){
			responseEntity=new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.CONFLICT);
		}
		catch(Exception e){
			responseEntity=new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}
	
	@DeleteMapping(path = "/delete/{id}")
	public ResponseEntity<?> deleteMatchById(@PathVariable("id") final int id) {
		ResponseEntity<?> responseEntity;
		try{
			matchService.deleteMatchById(id);
			responseEntity=new ResponseEntity<String>("movie deleted Successfully deleted",HttpStatus.OK);
		}
		catch(MatchNotFoundException e){
			responseEntity=new ResponseEntity<String>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
		catch(Exception e){
			responseEntity=new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}
	
	
	@GetMapping("/matches")
	public ResponseEntity<?> getMyMatches(final HttpServletRequest req, final HttpServletResponse res) {
		ResponseEntity<?> responseEntity;
		try{
		final HttpServletRequest request=(HttpServletRequest)req;
		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
		System.out.println(userId);
		return new ResponseEntity<List<MatchCalender>>(matchService.getMyMatches(userId),HttpStatus.OK);
		}
		catch(Exception e){
			responseEntity=new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
			return responseEntity;
		}
		
	}
}
