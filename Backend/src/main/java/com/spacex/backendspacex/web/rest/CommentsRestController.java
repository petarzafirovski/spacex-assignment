package com.spacex.backendspacex.web.rest;

import com.spacex.backendspacex.model.Comment;
import com.spacex.backendspacex.model.dto.CommentDTO;
import com.spacex.backendspacex.service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping({"/api/comments","/"})
public class CommentsRestController {
    private final CommentService commentService;

    public CommentsRestController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/add")
    public ResponseEntity<Comment> save(@RequestBody CommentDTO commentDTO){
        return this.commentService.save(commentDTO)
                .map(comment->ResponseEntity.ok().body(comment))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }
}
