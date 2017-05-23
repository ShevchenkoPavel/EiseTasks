package it.sevenbits;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by pavel on 4/14/17.
 */
public class Task {
    private final Long id;
    private final String name;
    private boolean important;
    private boolean urgent;
    private boolean understood;

    @JsonCreator
    protected Task(@JsonProperty("id") long id,
                   @JsonProperty("name") String name,
                   @JsonProperty("important") boolean important,
                   @JsonProperty("urgent") boolean urgent,
                   @JsonProperty("understood") boolean understood) {
        this.id = id;
        this.name = name;
        this.important = important;
        this.urgent = urgent;
        this.understood = understood;
    }

    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }

}
