package com.revature.service;

import java.util.List;

import com.revature.beans.User;

public interface UserService {
	
	public User getUserByUsername(String username);
	public List<User> getAllUsers();
	public void registerUser(User user);
}
