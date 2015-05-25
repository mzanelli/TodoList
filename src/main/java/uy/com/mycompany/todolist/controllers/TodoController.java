package uy.com.mycompany.todolist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import uy.com.mycompany.todolist.entities.Todo;
import uy.com.mycompany.todolist.services.TodoService;

@Controller
@RequestMapping("/todos")
public class TodoController {
	
	@Autowired
	TodoService service;
	
	@RequestMapping( method = RequestMethod.GET)
	public @ResponseBody List<Todo> getAllTodos() {
		List<Todo> todos = service.findAll();
		return todos;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Todo update(@RequestBody Todo todo) {
	    service.save(todo);
		return todo;
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Todo save(@RequestBody Todo todo) {
	    service.save(todo);
		return todo;
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	 public Todo deleteEmployee(@PathVariable("id") Integer todoId) throws Exception {
	  
		Todo todo = service.findOne(todoId);
		
		service.delete(todoId);
		
	  return todo;
	 }


}
