package uy.com.mycompany.todolist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uy.com.mycompany.todolist.entities.Task;
import uy.com.mycompany.todolist.repositories.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	TaskRepository todoRepo;
	
	@Override
	public Task save(Task todo) {
		return todoRepo.save(todo);
	}

	@Override
	public Task findOne(Integer theId) {
		return todoRepo.findOne(theId);
	}

	@Override
	public List<Task> findAll() {
		return todoRepo.findAll();
	}

	@Override
	public void delete(Integer id) {
		 todoRepo.delete(id);
	}

	

	

}
