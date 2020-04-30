module.exports = createDalInstance = ({ instance }) => {
  return Object.freeze({
    insert
  })

  async function insert ({ ...data }) {
    const db = await instance()
    const result = await db
      .collection('entries')
      .insertOne({ ...data })
    return { ...result }
  }

}


// TODO NOT COMPLETEDED, MAKE REFACTOR !! 