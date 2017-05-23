package it.sevenbits.web.controllers;

import it.sevenbits.Task;
import it.sevenbits.core.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

/**
 * Created by pavel on 5/4/17.
 */

@Controller
@RequestMapping("/tasks")
public class TasksController {

    private final TasksRepository tasksRepository;

    @Autowired
    public TasksController(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Task> list() {
        return tasksRepository.getAllTasks();
    }


    @RequestMapping(path="filtered")
    @ResponseBody
    public List<Task> getFilteredTasks(
            @RequestParam boolean imp, @RequestParam boolean urg, @RequestParam boolean und) {
            return tasksRepository.getFilteredTasks(imp, urg, und);
    }


    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Task> create(
            @RequestBody Task newTask) {
        Task createdTask = tasksRepository.create(newTask);
        URI location = UriComponentsBuilder.fromPath("/tasks/")
                .path(String.valueOf(createdTask.getId()))
                .build().toUri();
        return ResponseEntity.created(location)
                .body(createdTask);
    }
}
