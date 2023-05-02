package com.github.vinyprogramador.apicrudweb.controller;

import com.github.vinyprogramador.apicrudweb.entity.Post;
import com.github.vinyprogramador.apicrudweb.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostRepository postRepository;

    //Show all posts
    @CrossOrigin
    @GetMapping
    ResponseEntity<List<Post>> allPosts() {
        List<Post> posts = postRepository.findAll();
        if (posts.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(posts);
    }

    //Add a new post
    @CrossOrigin
    @PostMapping
    ResponseEntity<Post> addPost(@RequestBody Post post) {
        postRepository.save(post);
        return ResponseEntity.status(200).body(post);
    }

    //Update post
    @CrossOrigin
    @PutMapping
    public ResponseEntity<Post> updatePost(@RequestParam Integer id, @RequestBody Post post) {
        if (postRepository.existsById(id)) {
            post.setId(id);
            Post newPostUpdate = postRepository.save(post);
            return ResponseEntity.status(201).body(newPostUpdate);
        }
        return ResponseEntity.status(404).build();
    }

    //search by id
    @GetMapping("/id")
    public ResponseEntity<Optional<Post>> searchById(@RequestParam Integer id){
        Optional<Post> postOptional = postRepository.findById(id);
        if (postOptional.isPresent()){
            return ResponseEntity.status(200).body(postOptional);
        }
        return ResponseEntity.status(404).build();
    }

    //Delete post by id
    @CrossOrigin
    @DeleteMapping
    public ResponseEntity<Post> deletePostById(@RequestParam Integer id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }
}
