package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name="USERS")
public class User {
	
	//Fields;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int user_id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="user_role")
	private String userRole;
	
//	private Profile userProfile;
	
				   
				 
	//Constructors;
	public User() {
		super();
		
	}
	
	
	public User(int userId, String username, String password, String userRole) {
		super();
		this.user_id = userId;
		this.username = username;
		this.password = password;
		this.userRole = userRole;
//		this.userProfile = userProfile;
	}


	//Getters &Setters;
	public int getUserId() {
		return user_id;
	}
	
	public void setUserId(int userId) {
		this.user_id = userId;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

//	public Profile getUserProfile() {
//		return userProfile;
//	}
//
//	public void setUserProfile(Profile userProfile) {
//		this.userProfile = userProfile;
//	}


	@Override
	public String toString() {
		return "User [userId=" + user_id + ", username=" + username + ", password=" + password + ", userRole=" + userRole
				+ "]";
	}

	
}
