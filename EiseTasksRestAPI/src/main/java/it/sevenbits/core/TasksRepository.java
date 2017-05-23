package it.sevenbits.core;

import it.sevenbits.Item;
import it.sevenbits.Task;

import java.util.List;

/**
 * Created by pavel on 4/14/17.
 */
public interface TasksRepository {

    List<Task> getAllTasks();

    List<Task> getFilteredTasks(boolean imp, boolean urg, boolean und);

    Task create(Task newTask);

    Task getTaskById(long id);

    Task update(long id, Task newTask);

    boolean delete(long id);
}