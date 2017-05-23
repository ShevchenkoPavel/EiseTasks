package it.sevenbits;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

public class Item {
   private final long id;
   private final String name;

    @JsonCreator
    public Item(
            @JsonProperty("id") long id,
            @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

   public long getId() {
       return id;
   }
   public String getName() {
       return name;
   }

}

