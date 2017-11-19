import Note from '../models/note';
import Lane from '../models/lane';

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
  Lane.findById(req.params.laneId).exec()
  .then(foundLane => {
    if (foundLane) {
      const index = foundLane.notes.findIndex(n => String(n._id) === req.params.noteId);
      if (index >= 0) {
        foundLane.notes.splice(index, 1);
      }
      return foundLane.save();
    }
  });
}

