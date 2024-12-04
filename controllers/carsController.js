const db = require("../database")

// GET all cars from the database
exports.getAllCars = (_req, res) => {
	db.all("SELECT * FROM cars", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}

// GET one car based on its ID
exports.getOneCarById = (req, res) => {
	const { id } = req.params
	// find the user with this ID,
	db.get("SELECT * FROM cars WHERE id = ?", [parseInt(id)], (err, rows) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		} else {
			if (!rows) {
				return res
					.status(404)
					.json({ error: "car not found with this ID: " + id })
			} else {
				return res.status(200).json(rows)
			}
		}
	})
}

// POST create a new car
exports.createNewCar = (req, res) => {
	const { carName, carYear, carImage } = req.body

	// Lancez la requête pour ajouter des voitures à la base de données.
	db.run(
		"INSERT INTO cars (carName,carYear, carImage ) VALUES (?, ?, ?)",
		[carName, carYear, carImage],
		function (err) {
			if (err) {
				res.status(500).json({ error: err.message })
			} else {
				res.status(201).json({ id: this.lastID, carName })
			}
		}
	)
}

// DELETE car based on its ID
exports.deleteCarById = (req, res) => {
	const { id } = req.params
	res.json({
		msg: "delete a car based on its id ... " + id,
	})
}