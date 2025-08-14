
    module.exports = function (app) {
        const modelName = 'tasks';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , required: true, maxLength: null },
description: { type:  String , required: true, maxLength: null },
credits: { type: Number, required: false, max: 1000000 },
status: { type: Boolean, required: false },
postedBy: { type: Schema.Types.ObjectId, ref: "users" },
claimedBy: { type: Schema.Types.ObjectId, ref: "users" },
 },
createdAt: { type: Date, required: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };