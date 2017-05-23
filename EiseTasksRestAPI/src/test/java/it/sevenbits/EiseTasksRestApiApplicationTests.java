package it.sevenbits;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.flyway.FlywayDataSource;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@JdbcTest
//@FlywayDataSource ////////// !temporary_add! //////////
public class EiseTasksRestApiApplicationTests {

	@Test
	public void contextLoads() {
	}

}
