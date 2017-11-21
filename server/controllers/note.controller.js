import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid/v4';
import mongoose from 'mongoose';

export function addNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  const newNote = new Note(req.body);

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({id: req.params.laneId})
      .then(lane => {
        lane.notes.push(saved);
        return lane.save()
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Lane.findOne({ id: req.params.laneId }, (err, foundLane) => {
    if (err) {
      res.status(500).send(err);
    }

    Note.findOne({ id: req.params.noteId }, (err, foundNote) => {
      const index = foundLane.notes.findIndex(n => String(n) === String(foundNote._id));
    
      if (index >= 0) {
        foundLane.notes.splice(index, 1);
      }
      
      foundLane.save();
      res.json(foundLane);
    });
  });    
}

export function updateNote() {}

