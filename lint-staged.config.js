module.exports = {
  '*.ts': [
    'prettier --write',
    'tslint --fix --format verbose',
    'yarn jest --findRelatedTests',
    'git add'
  ]
};
