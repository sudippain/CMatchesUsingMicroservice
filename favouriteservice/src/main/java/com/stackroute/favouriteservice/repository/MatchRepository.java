package com.stackroute.favouriteservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stackroute.favouriteservice.domain.MatchCalender;



@Repository
public interface MatchRepository extends JpaRepository<MatchCalender, Integer> {

	List<MatchCalender> findByUserId(String userId);
	@Query("select u from MatchCalender u where u.name=:matchName and u.userId=:userId")
	public MatchCalender findByUniqueMatchId(@Param("matchName") String matchName,@Param("userId")String userId);
}