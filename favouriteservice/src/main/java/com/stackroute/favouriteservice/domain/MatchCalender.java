package com.stackroute.favouriteservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MatchCalender")
public class MatchCalender {

		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="id")
		private int id;
		
		@Column(name="match_id")
		private String unique_id;
	
		@Column(name = "name")
		private String name;
		
		@Column(name = "Date")
		private String date;
		
		@Column(name="user_id")
		private String userId;
		public MatchCalender() {
			super();
			// TODO Auto-generated constructor stub
		}
		public MatchCalender(int id, String unique_id, String name, String date, String userId) {
			super();
			this.id = id;
			this.unique_id = unique_id;
			this.name = name;
			this.date = date;
			this.userId = userId;
		}
		public MatchCalender(String unique_id, String name, String date, String userId) {
			super();
		
			this.unique_id = unique_id;
			this.name = name;
			this.date = date;
			this.userId = userId;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUnique_id() {
			return unique_id;
		}
		public void setUnique_id(String unique_id) {
			this.unique_id = unique_id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public String getUserId() {
			return userId;
		}
		public void setUserId(String userId) {
			this.userId = userId;
		}
		@Override
		public String toString() {
			return "MatchCalender [id=" + id + ", unique_id=" + unique_id + ", name=" + name + ", date=" + date
					+ ", userId=" + userId + "]";
		}

		
}
