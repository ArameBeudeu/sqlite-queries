const express = require("express")
const carsRouter = express.Router()
const db = require("../database")

carsRouter.get("/test", (req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

// GET return a list of all cars
carsRouter.get("/", (req, res) => {
	db.all("SELECT * FROM cars", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
})

// POST add a new car
carsRouter.post("/", (req, res) => {
	res.json({
		msg: "add a new car ... ",
	})
})

// PUT update a car based on the param id
carsRouter.put("/:id", (req, res) => {
	res.json({
		msg: "update a car based on its id ... ",
	})
})

// DELETE delete a car based on the param id
carsRouter.delete("/:id", (req, res) => {
	res.json({
		msg: "update a car based on its id ... ",
	})
})

// GET one car based on its id
carsRouter.get("/:id", (req, res) => {
	res.json({
		msg: "update a car based on its id ... ",
	})
})

module.exports = carsRouter
