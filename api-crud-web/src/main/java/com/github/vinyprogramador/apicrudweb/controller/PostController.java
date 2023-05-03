package com.github.vinyprogramador.apicrudweb.controller;

import com.github.vinyprogramador.apicrudweb.entity.Post;
import com.github.vinyprogramador.apicrudweb.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostRepository postRepository;

    //Show all posts
    @CrossOrigin(origins = { "http://localhost:3000"})
    @GetMapping
    ResponseEntity<List<Post>> allPosts() {
        List<Post> posts = postRepository.findAll();
        if (posts.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(posts);
    }

    //Add a new post
    @CrossOrigin(origins = { "http://localhost:3000"})
    @PostMapping
    ResponseEntity<Post> addPost(@RequestBody Post post) {
        postRepository.save(post);
        return ResponseEntity.status(200).body(post);
    }

    //Update post
    @CrossOrigin(origins = { "http://localhost:3000"})
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post post) {
        if (postRepository.existsById(id)) {
            post.setId(id);
            Post newPostUpdate = postRepository.save(post);
            return ResponseEntity.status(201).body(newPostUpdate);
        }
        return ResponseEntity.status(404).build();
    }

    //search by id
    @CrossOrigin(origins = { "http://localhost:3000"})
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> searchById(@PathVariable Integer id){
        Optional<Post> postOptional = postRepository.findById(id);
        if (postOptional.isPresent()){
            return ResponseEntity.status(200).body(postOptional);
        }
        return ResponseEntity.status(404).build();
    }

    //Delete post by id
    @CrossOrigin(origins = { "http://localhost:3000"})
    @DeleteMapping("/{id}")
    public ResponseEntity<Post> deletePostById(@PathVariable Integer id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }
}
