import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';
import noteRouter from './note.routes';

const router = new Router();

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

//Update a line name
router.route('/lanes/:laneId').put(LaneController.updateLane);

router.use('/lanes/:laneId/', noteRouter);

export default router;
