package com.stackroute.favouriteservice.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.favouriteservice.domain.MatchCalender;






@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
@Transactional
public class RepositoryTest {
	@Autowired
	 private transient MatchRepository repo;
	 public void setRepo(final MatchRepository  repo){
		 this.repo=repo;
	 }
	 @Test
	 public void testSaveMatch() throws Exception{
		 repo.save(new MatchCalender(1,"1234","IND vs AUS","25/03/19","2"));
		 final MatchCalender match=repo.getOne(1);
		 assertThat(match.getId()).isEqualTo(1);
	 }
	 @Test
	 public void testDeleteMovie() throws Exception{
		 MatchCalender match=new MatchCalender("1234","IND vs AUS","25/03/19","2");
		 repo.save(match);
		assertEquals(true, repo.existsById(match.getId()));
		repo.delete(match);
		assertEquals(false, repo.existsById(match.getId()));
	 }
	 @Test
	 public void testGetAll() throws Exception{
		 repo.save(new MatchCalender(1,"1234","IND vs AUS","25/03/19","2"));
		
		 final List<MatchCalender> listMatch=repo.findAll();
		 boolean flag=false;
		 if(listMatch.size()>0){
			 flag=true;
		 }
		 assertEquals(true,flag);
		
	 }
	 

}
