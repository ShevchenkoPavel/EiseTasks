package it.sevenbits.config;

import it.sevenbits.core.ItemsRepository;
import it.sevenbits.SampleItemsRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

/**
 * Config.
 */

@Configuration
public class RepositoryConfig {

    @Bean
    public ItemsRepository itemsRepository() {
        return new SampleItemsRepository();
    }
}

