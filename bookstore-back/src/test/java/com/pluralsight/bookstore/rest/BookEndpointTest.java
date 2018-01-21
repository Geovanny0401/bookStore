package com.pluralsight.bookstore.rest;

import com.pluralsight.bookstore.model.Book;
import com.pluralsight.bookstore.model.Language;
import com.pluralsight.bookstore.repository.BookRepository;
import com.pluralsight.bookstore.util.IsbnGenerator;
import com.pluralsight.bookstore.util.NumberGenerator;
import com.pluralsight.bookstore.util.TextUtil;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.container.test.api.RunAsClient;
import org.jboss.arquillian.extension.rest.client.ArquillianResteasyResource;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.junit.InSequence;
import org.jboss.shrinkwrap.api.Archive;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import java.util.Date;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.Response.Status.*;
import static org.junit.Assert.*;

@RunWith(Arquillian.class)
@RunAsClient
public class BookEndpointTest {

    private static String bookId;
    private Response response;


    @Deployment(testable=false)
    public static Archive<?> createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(Book.class)
                .addClass(Language.class)
                .addClass(BookRepository.class)
                .addClass(TextUtil.class)
                .addClass(NumberGenerator.class)
                .addClass(IsbnGenerator.class)
                .addClass(BookEndpoint.class)
                .addClass(JAXRSConfiguration.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsManifestResource("META-INF/test-persistence.xml", "persistence.xml");
    }

    @Test
    @InSequence(2)
    public void shouldGetNoBook(@ArquillianResteasyResource("api/books") WebTarget webTarget) {
        //Count All
        response=webTarget.path("count").request().get();
        assertEquals(NO_CONTENT.getStatusCode(), response.getStatus());
        //Find All
        response=webTarget.request(APPLICATION_JSON).get();
        assertEquals(NO_CONTENT.getStatusCode(), response.getStatus());

    }
}
