import ArrayModel from "../model/websiteModel.js";

const deleteAllData = async(req, res) => {
    try {
        const deletedData = await ArrayModel.deleteMany({ })
        console.log(deletedData)
        res.status(200).send(deletedData)
    } catch (error) {
        console.error(error)
        res.status(404).send(error)
    }
}

export default deleteAllData;