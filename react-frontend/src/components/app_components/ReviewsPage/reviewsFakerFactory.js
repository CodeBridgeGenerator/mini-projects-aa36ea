
import { faker } from "@faker-js/faker";
export default (user,count,taskIdIds,reviewIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
taskId: taskIdIds[i % taskIdIds.length],
reviewId: reviewIdIds[i % reviewIdIds.length],
rating: faker.lorem.sentence(""),
comment: faker.lorem.sentence(""),
createdAt: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
