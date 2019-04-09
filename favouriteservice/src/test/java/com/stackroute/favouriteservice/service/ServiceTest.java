package com.stackroute.favouriteservice.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.favouriteservice.domain.MatchCalender;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;
import com.stackroute.favouriteservice.repository.MatchRepository;



@RunWith(SpringRunner.class)
@SpringBootTest
public class ServiceTest {
	@Mock
	private transient MatchRepository matchRepo;
	
	private transient MatchCalender match;
	@InjectMocks
	private transient MatchServiceImpl matchserviceimpl;
	
	transient Optional<MatchCalender> options;
	
	@Before
	public void setupMock(){
		MockitoAnnotations.initMocks(this);
		match =new MatchCalender(1,"1234","IND vs AUS","25/03/19","2");
		options=Optional.of(match);
	}
	@Test
	public void testMovieSuccess() throws MatchAlreadyExistsException{
		when(matchRepo.save(match)).thenReturn(match);
		final boolean flag=matchserviceimpl.saveMatch(match);
		assertTrue("saving movie failed",flag);
		verify(matchRepo,times(1)).save(match);
	}
	@Test(expected=MatchAlreadyExistsException.class)
	public void testSaveMovieFaliure() throws MatchAlreadyExistsException{
		when(matchRepo.findByUniqueMatchId("IND vs AUS","2")).thenReturn(match);
		when(matchRepo.save(match)).thenReturn(match);
		final boolean flag=matchserviceimpl.saveMatch(match);
		assertFalse("saving movie failed",flag);
		verify(matchRepo,times(1)).findByUniqueMatchId(match.getName(),match.getUserId());	
	}
	
	@Test
	public void testDeleteMovieById() throws MatchNotFoundException	{
		when(matchRepo.findById(1)).thenReturn(options);
		doNothing().when(matchRepo).delete(match);
		final boolean flag=matchserviceimpl.deleteMatchById(1);
//		assertTrue("deleting movie field",flag);
		assertEquals(true,flag);
	
		verify(matchRepo,times(1)).findById(match.getId());
	}
	@Test
	public void testGetMyMovies(){
		final List<MatchCalender> movieList=new ArrayList<>();
		when(matchRepo.findAll()).thenReturn(movieList);
		final List<MatchCalender> movies1=matchserviceimpl.getMyMatches("2");
		assertEquals(movieList,movies1);
//		verify(movieRepo,times(1)).findAll();
	}

}
