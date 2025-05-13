package com.example.library.controller;

import com.example.library.model.Library;
import com.example.library.repository.LibraryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libraries")
@CrossOrigin(origins = "http://localhost:5173")
public class LibraryController {

    @Autowired
    private LibraryRepository libraryRepository;

    // Initialize predefined libraries
    @PostConstruct
    public void initLibraries() {
        if (libraryRepository.count() == 0) {
            libraryRepository.save(new Library("Coding Books"));
            libraryRepository.save(new Library("Electrical Books"));
            libraryRepository.save(new Library("English Books"));
        }
    }

    @GetMapping
    public List<Library> getLibraries() {
        return libraryRepository.findAll();
    }
}
