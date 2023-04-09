
export async function getPoints(db) {
    return db
      .collection('Points')
      .aggregate([
        {'$project': {_id: 0}}
      ]).toArray();
  }