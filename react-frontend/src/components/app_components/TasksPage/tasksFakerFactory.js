
import { faker } from "@faker-js/faker";
export default (user,count,postedByIds,claimedByIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
credits: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
postedBy: postedByIds[i % postedByIds.length],
claimedBy: claimedByIds[i % claimedByIds.length],
createdAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
