import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
} from "../controllers/events.controller.js";

const router = Router();

router.route("/").post(createEvent).get(getAllEvents);

router.route("/:id").get(getSingleEvent).put(updateEvent).delete(deleteEvent);

export default router;
