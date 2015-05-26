package uy.com.mycompany.todolist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import uy.com.mycompany.todolist.entities.Task;
import uy.com.mycompany.todolist.services.TaskService;

@Controller
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
	TaskService taskService;
	
	@RequestMapping( method = RequestMethod.GET)
	public @ResponseBody List<Task> getAllTasks() {
		List<Task> tasks = taskService.findAll();
		return tasks;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	 public Task getTaskById(@PathVariable("id") Integer id) throws Exception {
		Task task = taskService.findOne(id);
	  return task;
	 }
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Task saveOrUpdateTask(@RequestBody Task task) {
	    taskService.save(task);
		return task;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	 public Task deleteTask(@PathVariable("id") Integer id) throws Exception {
		Task task = taskService.findOne(id);
		taskService.delete(id);
	  return task;
	 }

}
