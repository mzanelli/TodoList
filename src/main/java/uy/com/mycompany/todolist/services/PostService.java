package uy.com.mycompany.todolist.services;

import java.util.List;

import uy.com.mycompany.todolist.entities.Post;

public interface PostService {

	Post save(Post post);

	Post findOne(Integer theId);

	List<Post> findAll();

}
