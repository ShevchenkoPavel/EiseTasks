package it.sevenbits.core;

import it.sevenbits.Item;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

public interface ItemsRepository {

   List<Item> getAllItems();

   Item create(Item newItem);

    Item getItemById(long id);

    Item update(long id, Item newItem);

    boolean delete(long id);
}

