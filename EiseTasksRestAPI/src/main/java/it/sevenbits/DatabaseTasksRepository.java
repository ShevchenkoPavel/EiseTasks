package it.sevenbits;

import it.sevenbits.Task;
import it.sevenbits.core.TasksRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by pavel on 4/14/17.
 */
public class DatabaseTasksRepository implements TasksRepository {

    private JdbcTemplate jdbcTemplate;

    public DatabaseTasksRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Task> getAllTasks() {
        return jdbcTemplate.query(
                "SELECT id, name, important, urgent, understood FROM item",
                new RowMapper<Task>() {
                    public Task mapRow(
                            ResultSet resultSet, int i) throws SQLException {
                        long id = resultSet.getLong(1);
                        String name = resultSet.getString(2);
                        boolean important = resultSet.getBoolean(3);
                        boolean urgent = resultSet.getBoolean(4);
                        boolean understood = resultSet.getBoolean(5);
                        return new Task(id, name, important, urgent, understood);
                    }
                });

    }

    @Override
    public List<Task> getFilteredTasks(boolean imp, boolean urg, boolean und) {
        return jdbcTemplate.query(
                "SELECT id, name FROM item WHERE ((important=? AND important=true) OR (urgent=? AND urgent=true) OR (understood=? AND understood=true))",
                new RowMapper<Task>() {
                    public Task mapRow(
                            ResultSet resultSet, int i) throws SQLException {
                        long id = resultSet.getLong(1);
                        String name = resultSet.getString(2);
                        return new Task(id, name, imp, urg, und);
                    }
                }
                , imp, urg, und);
    }

    private long getNextId() {
        return jdbcTemplate.queryForObject(
                "select nextval('item_id_seq')", Long.class);
    }


    @Override
    public Task create(Task newTask) {

        long id = getNextId();      // or generate UUID
        String name = newTask.getName(); // newTask.toString();
        int rows = jdbcTemplate.update(
                "INSERT INTO item (id, name) VALUES (?, ?)",
                id, name
        );
        return new Task(id, name, false, false, false);  // or select from DB

    }



    @Override
    public Task getTaskById(long id) {
        return jdbcTemplate.queryForObject(
                "SELECT id, name FROM item WHERE id = ?",
                (resultSet, i) -> {
                    long rowId = resultSet.getLong(1);
                    String rowName = resultSet.getString(2);
                    return new Task(rowId, rowName, false, false, false);
                },
                id);
    }

    @Override
    public Task update(long id, Task newTask) {
        String name = newTask.getName();
        int rows = jdbcTemplate.update(
                "UPDATE item SET name = ? WHERE id = ?",
                name, id);
        return new Task(id, name, false, false, false);  // or select from DB
    }

    @Override
    public boolean delete(long id) {
        int rows = jdbcTemplate.update(
                "DELETE FROM item WHERE id = ?",
                id
        );
        return rows > 0;
    }
}
