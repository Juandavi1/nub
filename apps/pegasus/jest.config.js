module.exports = {
  name: 'pegasus',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pegasus',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
