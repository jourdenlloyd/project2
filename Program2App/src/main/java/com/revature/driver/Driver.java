package com.revature.driver;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.revature.beans.User;
import com.revature.util.SessionFactoryUtil;

public class Driver {
	
	private static SessionFactory sf = SessionFactoryUtil.getSessionFactory();
	
	
	public static void main(String[] args) {
		Session sess = sf.openSession();
		String hql = "FROM User as u WHERE u.username = :name";
		
		Query query = sess.createQuery(hql);
		
		query.setString("name", "mikaelaenters");
		
		User user = (User) query.uniqueResult();
		
		System.out.println(user);
		
		sess.close();
		
		
	}
}
