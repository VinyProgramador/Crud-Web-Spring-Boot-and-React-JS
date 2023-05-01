package com.github.vinyprogramador.apicrudweb.controller;

import com.github.vinyprogramador.apicrudweb.entity.Post;
import com.github.vinyprogramador.apicrudweb.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostRepository postRepository;

    //Show all posts
    @GetMapping
    ResponseEntity<List<Post>> allPosts() {
        List<Post> posts = postRepository.findAll();
        if (posts.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(posts);
    }

    //Add a new post
    @PostMapping
    ResponseEntity<Post> addPost(@RequestBody Post post) {
        postRepository.save(post);
        return ResponseEntity.status(200).body(post);
    }

    //Update post
    @PutMapping
    public ResponseEntity<Post> updatePost(@RequestParam Integer id, @RequestBody Post post) {
        if (postRepository.existsById(id)) {
            post.setId(id);
            Post newPostUpdate = postRepository.save(post);
            return ResponseEntity.status(201).body(newPostUpdate);
        }
        return ResponseEntity.status(404).build();
    }

    //Delete post by id
    @DeleteMapping
    public ResponseEntity<Post> deletePostById(@RequestParam Integer id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }
}
