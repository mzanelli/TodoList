package uy.com.mycompany.todolist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TODO")
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "TODO_ID")
	private Integer todoId;
	
	@Column(name="ACTION")
	private String action;
	
	@Column(name="DONE")
	private Boolean done;

	public Integer getTodoId() {
		return todoId;
	}

	public void setTodoId(Integer todoId) {
		this.todoId = todoId;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}
	
	
}
