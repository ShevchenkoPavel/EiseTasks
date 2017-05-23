package it.sevenbits.web.controllers;

import it.sevenbits.Task;
import it.sevenbits.core.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

/**
 * Requests to db.
 */

@Controller
@RequestMapping("/tasks/{id}")
public class TasksIdController {

    private final TasksRepository tasksRepository;

    @Autowired
    public TasksIdController(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Task> get(@PathVariable long id) {
        Task result = tasksRepository.getTaskById(id);
        if (result == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<Task> update(
            @PathVariable long id, @RequestBody Task newTask) {
        Task result = tasksRepository.update(id, newTask);
        if (result == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI location = UriComponentsBuilder.fromPath("/tasks/")
                    .path(String.valueOf(result.getId()))
                    .build().toUri();
            return ResponseEntity.created(location).body(result);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity delete(@PathVariable long id) {
        boolean deleted = tasksRepository.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
