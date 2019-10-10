import { MongoClient } from 'mongodb'

// const { url, port, dbname } = mongodb
// const { url, port, dbname, username, password } = mongodb

export default async function mongoConnection(callback, errorCallback = null) {

    let conn = null

    try {
        conn = await MongoClient.connect(`mongodb://localhost:27017`, { useNewUrlParser: true })
        return await callback(conn.db('nodeTraining'))

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Database connection error: ', e)
        if (errorCallback !== null) {
            return errorCallback(e)
        }
    } finally {
        if (conn !== null) {
            conn.close()
            //console.log('Database connection closed')
        }
    }

    return null
}
