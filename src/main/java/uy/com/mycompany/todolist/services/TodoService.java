package uy.com.mycompany.todolist.services;

import java.util.List;

import uy.com.mycompany.todolist.entities.Todo;

public interface TodoService {

	Todo save(Todo todo);

	Todo findOne(Integer theId);

	List<Todo> findAll();
	
	void delete(Integer id);
	
}
