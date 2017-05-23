package it.sevenbits;

import it.sevenbits.core.ItemsRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Implementation of ItemsRepository interface.
 */

    @Repository
    public class SampleItemsRepository implements ItemsRepository {
        List<Item> items = new ArrayList<>();
        public SampleItemsRepository() {
            //...
    }

    @Override
    public List<Item> getAllItems() {
        return Collections.unmodifiableList(items);
    }

    @Override
    public Item create(Item newItem) {
        return null;
    }

    @Override
    public Item getItemById(long id) {
        return null;
    }

    @Override
    public Item update(long id, Item newItem) {
        return null;
    }

    @Override
    public boolean delete(long id) {
        return false;
    }
}
