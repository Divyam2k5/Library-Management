package com.example.library.controller;

import com.example.library.model.Book;
import com.example.library.repository.BookRepository;
import com.example.library.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private LibraryRepository libraryRepository;

    @GetMapping("/{libraryId}")
    public List<Book> getBooksByLibrary(@PathVariable Long libraryId) {
        return bookRepository.findByLibraryId(libraryId)
                .stream().sorted(Comparator.comparing(Book::getTitle))
                .collect(Collectors.toList());
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Long bookId) {
        bookRepository.deleteById(bookId);
    }
}
