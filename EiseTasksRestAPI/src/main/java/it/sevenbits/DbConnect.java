package it.sevenbits;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.sql.*;

/**
 * Created by pavel on 4/12/17.
 */
public class DbConnect {

    public void connect() {

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        /*
        String url = "jdbc:postgresql://localhost/test";
        String username = "postgres";
        String password = "postgres";
        */

        String url = "jdbc:postgresql://localhost/db";
        String username = "admin";
        String password = "123";


        Connection connection = null;
        try {
            connection = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        Statement createStat = null;
        try {
            createStat = connection.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();
        }
            ResultSet resultSet = null;
            try {
                resultSet = createStat.executeQuery("SELECT * FROM item");
            } catch (SQLException e) {
                e.printStackTrace();
            }
                try {
                while (resultSet.next())
                {
                    System.out.println(
                            String.format("%s\t%s",
                                    resultSet.getInt(1),
                                    resultSet.getString(2)));
                }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            try {
                resultSet.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        try {
            createStat.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        PreparedStatement insertStat = null;
        try {
            insertStat = connection.prepareStatement(
                            "INSERT INTO item (name) VALUES (?)");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            insertStat.setString(
                    1,
                    String.format(
                            "New Item at %s", new java.util.Date()));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            insertStat.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            insertStat.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        PreparedStatement updateStat = null;
        try {
            updateStat = connection.prepareStatement(
                    "UPDATE item SET name = ? WHERE id = ?");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            updateStat.setString(1, "Item Name");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            updateStat.setInt(2, 42);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            updateStat.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            updateStat.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        PreparedStatement deleteStat = null;
        try {
            deleteStat = connection.prepareStatement(
                    "DELETE FROM item WHERE id = ?");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            deleteStat.setInt(1, 42);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            deleteStat.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            deleteStat.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        // do something
        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
