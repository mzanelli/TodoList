package uy.com.mycompany.todolist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uy.com.mycompany.todolist.entities.Post;
import uy.com.mycompany.todolist.repositories.PostRepository;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostRepository repository;

	@Override
	public Post save(Post post) {
		return repository.save(post);
	}

	@Override
	public Post findOne(Integer theId) {
		return repository.findOne(theId);
	}

	@Override
	public List<Post> findAll() {
		return repository.findAll();
	}

}
