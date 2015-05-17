package uy.com.mycompany.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import uy.com.mycompany.todolist.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
