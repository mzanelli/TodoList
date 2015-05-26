package uy.com.mycompany.todolist.services;

import java.util.List;

import uy.com.mycompany.todolist.entities.Task;

public interface TaskService {

	Task save(Task todo);

	Task findOne(Integer theId);

	List<Task> findAll();
	
	void delete(Integer id);
	
}
