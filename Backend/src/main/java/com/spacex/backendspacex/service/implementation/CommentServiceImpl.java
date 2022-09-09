package com.spacex.backendspacex.service.implementation;

import com.spacex.backendspacex.model.Comment;
import com.spacex.backendspacex.model.dto.CommentDTO;
import com.spacex.backendspacex.repository.CommentRepository;
import com.spacex.backendspacex.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public Optional<Comment> save(CommentDTO commentDTO) {
        Comment comment = new Comment(commentDTO.getMissionId(),commentDTO.getRocketId(),commentDTO.getComment());
        this.commentRepository.save(comment);
        return Optional.of(comment);
    }

}
