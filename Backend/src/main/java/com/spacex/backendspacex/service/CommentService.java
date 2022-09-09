package com.spacex.backendspacex.service;

import com.spacex.backendspacex.model.Comment;
import com.spacex.backendspacex.model.dto.CommentDTO;

import java.util.Optional;

public interface CommentService {
    Optional<Comment> save(CommentDTO commentDTO);
}
