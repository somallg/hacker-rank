module.exports = {
  '*.ts': ['prettier --write', 'tslint --fix --format verbose', 'git add']
};
