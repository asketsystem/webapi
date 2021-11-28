import { Request, Response } from "express";
import app from "../app";

export class Routes {
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) =>{
            res.status(200).send({
                message: 'GET request successful'
            })
        })
    }
}

// Contact
app.route('/contact')
// GET endpoint
.get ((req: Request, res: Response) => {
    // Get all Contacts
        res.status(200).send({
            message: 'GET request successful!!'
        })
})

// POST endpoint
.post ((req: Request, res: Response) => {
// Create new contact
    res.status(200).send({
        message: 'POST request successful'
    })
})

// Contact detail
app.route('/contact/:contactId')
// get specific contact
.get((req: Request, res: Response) => {
// Get a single contact detail
    res.status(200).send({
        message: 'GET request successful'
    })
})
.put ((req: Request, res: Response) => {
// Update a contact
    res.status(200).send({
        message: 'PUT request successful'
    })
})
.delete ((req: Request, res: Response) => {
// Delete a contact
    res.status(200).send({
        message: 'DELETE request successful'
    })
})