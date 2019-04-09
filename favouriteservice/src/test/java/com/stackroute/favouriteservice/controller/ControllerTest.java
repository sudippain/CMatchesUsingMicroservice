package com.stackroute.favouriteservice.controller;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.favouriteservice.domain.MatchCalender;
import com.stackroute.favouriteservice.service.MatchService;




@RunWith(SpringRunner.class)
@WebMvcTest(MatchController.class)
public class ControllerTest {

	@Autowired
	private transient MockMvc mvc;
	
	@MockBean
	private transient MatchService service;
	
	@InjectMocks
	private MatchController matchController;
	
	private transient MatchCalender match;
	
	static List<MatchCalender> matches;
	
	@Before
	public void setup() throws Exception{
		MockitoAnnotations.initMocks(this);
		match=new MatchCalender(1,"1234","IND vs AUS","25/03/19","2");
		mvc = MockMvcBuilders.standaloneSetup(matchController).build();
		matches = new ArrayList<>();
		match=new MatchCalender(2,"1334","NEZ vs IRE","26/03/19","2");
		matches.add(match);
		match=new MatchCalender(3,"1434","SA vs ENG","27/03/19","2");
		matches.add(match);
	}
	@Test
	public void testNewMovieSuccess() throws Exception{
		String token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTUzMDc3NzQ0fQ.ob4OEBB1fBEv3aZdiv-mGzTdkVMEngfiHThhd2u8mdRLFpqGLzUPOwcaBVrGivMi";
		when(service.saveMatch(match)).thenReturn(true);
		mvc.perform(post("/api/v1/match/add").header("authorization","Bearer "+token).contentType(MediaType.APPLICATION_JSON).content(jsonToString(match)))
		.andExpect(status().isCreated());
		verify(service,times(1)).saveMatch(Mockito.any(MatchCalender.class));
		verifyNoMoreInteractions(service);
	}
	@Test
	public void testdeleteMovieById() throws Exception{
		when(service.deleteMatchById(1)).thenReturn(true);
		mvc.perform(delete("/api/v1/match/delete/{id}",1)).andExpect(status().isOk());
		verify(service,times(1)).deleteMatchById(1);
		verifyNoMoreInteractions(service);
	}
	@Test
	public void testGetMyMovies() throws Exception{
		String token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTUzMDc3NzQ0fQ.ob4OEBB1fBEv3aZdiv-mGzTdkVMEngfiHThhd2u8mdRLFpqGLzUPOwcaBVrGivMi";
		List matches=new ArrayList<MatchCalender>();
		when(service.getMyMatches("2")).thenReturn(matches);
		mvc.perform(get("/api/v1/match/matches").header("authorization","Bearer "+token).contentType("application/json;charset=UTF-8")).andExpect(status().isOk());
		verify(service,times(1)).getMyMatches("2");
		verifyNoMoreInteractions(service);
		
	}
	private static String jsonToString(final Object obj) throws  JsonProcessingException{
		String result;
		try{
			final ObjectMapper mapper=new ObjectMapper();
			final String jsonContent=mapper.writeValueAsString(obj);	
			result=jsonContent;
		}catch(JsonProcessingException e){
			result="Json Processing Error";
		}
		return result;
	}

}
