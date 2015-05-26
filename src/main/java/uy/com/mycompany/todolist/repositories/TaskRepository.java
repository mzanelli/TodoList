package uy.com.mycompany.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import uy.com.mycompany.todolist.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
