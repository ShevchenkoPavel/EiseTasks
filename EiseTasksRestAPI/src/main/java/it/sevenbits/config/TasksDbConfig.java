package it.sevenbits.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

/**
 * Created by pavel on 4/12/17.
 */

@Configuration
public class TasksDbConfig {
    @Bean
    @Qualifier("tasksDataSource")
    @ConfigurationProperties(
            prefix = "spring.datasource.tasks")
    public DataSource tasksDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    @Qualifier("tasksJdbcTemplate")
    public JdbcTemplate tasksJdbcTemplate(
            @Qualifier("tasksDataSource")
                    DataSource tasksDataSource
    ) {
        return new JdbcTemplate(tasksDataSource);
    }
    
}
