package uy.com.mycompany.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import uy.com.mycompany.todolist.entities.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
