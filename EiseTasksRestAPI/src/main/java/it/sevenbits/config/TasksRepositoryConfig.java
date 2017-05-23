package it.sevenbits.config;

import it.sevenbits.DatabaseTasksRepository;
import it.sevenbits.core.TasksRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * Created by pavel on 4/14/17.
 */
@Configuration
public class TasksRepositoryConfig {
    @Bean
    public TasksRepository tasksRepository(
            @Qualifier("tasksJdbcTemplate")
                    JdbcTemplate jdbcTemplate) {
        return new DatabaseTasksRepository(jdbcTemplate);
    }
}
