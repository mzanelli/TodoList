package uy.com.mycompany.todolist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uy.com.mycompany.todolist.entities.Todo;
import uy.com.mycompany.todolist.repositories.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	TodoRepository todoRepo;
	
	@Override
	public Todo save(Todo todo) {
		return todoRepo.save(todo);
	}

	@Override
	public Todo findOne(Integer theId) {
		return todoRepo.findOne(theId);
	}

	@Override
	public List<Todo> findAll() {
		return todoRepo.findAll();
	}

	@Override
	public void delete(Integer id) {
		 todoRepo.delete(id);
	}

	

	

}
