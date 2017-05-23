package it.sevenbits;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.flyway.FlywayDataSource;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

/**
 * Created by pavel on 4/12/17.
 */
public class TasksDataSource {

    @Bean
    @Qualifier("tasksDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.tasks")
    //@FlywayDataSource
    public DataSource tasksDataSource() {
        return DataSourceBuilder.create().build();
    }

}
