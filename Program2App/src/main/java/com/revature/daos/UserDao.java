package com.revature.daos;

import java.util.List;

import com.revature.beans.User;

public interface UserDao {
	
	public User getUser(String username);
	public List<User> getAllUsers();
	public void saveUser(User user);
	public User getUserById(int id);
}
