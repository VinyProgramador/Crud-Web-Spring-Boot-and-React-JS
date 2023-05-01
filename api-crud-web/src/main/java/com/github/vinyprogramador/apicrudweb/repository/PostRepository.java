package com.github.vinyprogramador.apicrudweb.repository;

import com.github.vinyprogramador.apicrudweb.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
