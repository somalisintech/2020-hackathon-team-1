const seeder = require('mongoose-seed');
const data = 

const db = "mongodb://localhost:27017/letterific";

// Connect to MongoDB via Mongoose
seeder.connect(db, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/Users.js',
        './models/Address.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Users', 'Address'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function (err, done) {
            if (err) {
                return console.log("seeding error", err);
            }
            if (done) {
                return console.log("seeding done", done);
            }
            seeder.disconnect();
        });

    });
});
