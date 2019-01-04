const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

// Data source definitions.
const DataSourceDefinitionSchema = new mongoose.Schema({

  // The ID of the data source definition.
  _id: {
    type: String,
    default: uuidv4
  },

  // The name of the data source definition.
  name: {
    type: String,
    required: true,
    unique: true
  },

  // The description of the data source definition.
  description: {
    type: String,
    required: false
  },

  // The data interface of the data source definition.
  dataInterfaceReferenceID: {
    type: String,
    ref: 'DataInterface',
    required: true
  },

  // The data kind of the data source definition.
  dataKindReferenceID: {
    type: String,
    ref: 'DataKind',
    required: true
  }

}, {
  collection: 'data-source-definitions',
  timestamps: true
});

DataSourceDefinitionSchema.set('toJSON', {
  transform: (doc, ret, _options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  }
});

module.exports = mongoose.model('DataSourceDefinition', DataSourceDefinitionSchema);
