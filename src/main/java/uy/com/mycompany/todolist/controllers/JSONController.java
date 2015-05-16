package uy.com.mycompany.todolist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import uy.com.mycompany.todolist.entities.Post;
import uy.com.mycompany.todolist.services.PostService;

@Controller
@RequestMapping("/posts")
public class JSONController {

	@Autowired
	PostService service;

	@RequestMapping(value = "{name}", method = RequestMethod.GET)
	public @ResponseBody List<Post> getShopInJSON(@PathVariable String name) {

		List<Post> posts = service.findAll();

		// Post post = new Post();
		// post.setPostDate(new Date());
		// post.setPostId(1);
		// post.setTitle("Some post");
		//
		return posts;

	}

}
