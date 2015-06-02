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
	public @ResponseBody List<Todo> getAllTasks() {
		List<Todo> todos = service.findAll();
		return todos;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	 public Todo getTaskById(@PathVariable("id") Integer todoId) throws Exception {
	  
		Todo todo = service.findOne(todoId);
		
	  return todo;
	 }
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Todo saveOrUpdateTask(@RequestBody Todo todo) {
	    service.save(todo);
		return todo;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	 public Todo deleteTask(@PathVariable("id") Integer todoId) throws Exception {
	  
		Todo todo = service.findOne(todoId);
		
		service.delete(todoId);
		
	  return todo;
	 }

}
